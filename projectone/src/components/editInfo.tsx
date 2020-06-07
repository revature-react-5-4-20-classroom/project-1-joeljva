import React from "react";
import { IState } from "../redux/reducers";
import { connect } from "react-redux";
import { User } from "../models/user";
import { editUsers } from "../api/project0";
import { Form, Label, Input, FormGroup, Button, Container, Row, Col } from "reactstrap";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { loginSaveUserMapper } from '../redux/action-mappers';


interface IEdit{
    user:User|null;
    password:string,
    error:boolean,
    success:boolean
}


export class EditProfileComponent extends React.Component<any, IEdit>{

    constructor(props: any) {
        super(props);
        this.state = ({
            // user:new User(0,"","","","","",0)
            user: null,
            password: "",
            error: false,
            success: false
        })

    }

    componentDidMount() {
        if (this.props.user) {
            this.setState({
                user: this.props.user,

            })
        }

    }
    onChanges = (e: any) => {
        // e.preventDefault();

        let name = e.target.name;
        let value = e.target.value;

        if (this.state.user) {
            this.setState((prevState: any) => {

                let user = Object.assign({}, prevState.user);   //

                user[name] = value;    //make sure to make the target exist
                // console.log(user)
                return { user };


            }


            )
        }
        // console.log(this.state.user)

    }

    onChangesPass = (e: any) => {

        this.setState({
            password: e.target.value
        })
        // console.log(this.state.password)


    }
    onSubmits = async (e: any) => {
        e.preventDefault();
        if (this.state.user) {
            let user = this.state.user
            try {
                let response = await editUsers(user.userId, user.username, user.firstName, user.lastName, user.email, this.state.password);
                toast("success", { type: "success" });
                this.props.history.push("/employee/home");
                if (user.roleName === "finance-manager") {
                    this.props.history.push("/finance");
                }
                if (user && (user.roleName !== "finance-manager")) {
                    this.props.history.push("/employee/home");
                }

                this.props.loginSaveUserMapper(response);
                // this.setState({
                //     success:true
                // })
            } catch (e) {
                // console.log(e)
                toast("error", { type: "error" });


            }
        }

    }


    render() {

        if (this.state.user) {
            return (
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Form onSubmit={this.onSubmits}>
                                <FormGroup>
                                    <Label for="userId">user Id:  </Label>
                                    <Input type="number" name="userId" id="userId" value={this.state.user.userId} onChange={this.onChanges} disabled />

                                </FormGroup>
                                <FormGroup>
                                    <Label>username:  </Label>
                                    <Input type="text" name="username" value={this.state.user.username} onChange={this.onChanges} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>First Name:   </Label>
                                    <Input type="text" name="firstName" onChange={this.onChanges} value={this.state.user.firstName} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>Last Name: </Label>
                                    <Input type="text" name="lastName" onChange={this.onChanges} value={this.state.user.lastName} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>email:   </Label>
                                    <Input type="text" name="email" onChange={this.onChanges} value={this.state.user.email} required />

                                </FormGroup>
                                <FormGroup>
                                    <Label>New Password:  </Label>
                                    <Input type="text" name="password" value={this.state.password} onChange={this.onChangesPass} />

                                </FormGroup>
                                <FormGroup>
                                    <Button type="submit" color="info">Submit</Button>
                                </FormGroup>
                            </Form>


                        </Col>


                    </Row>
                </Container>




            )

        } else {
            return null
        }
    }

}

const mapStateToProps = (state: IState) => {
    // console.log("in mys state")
    // console.log(state);
    return {
        ...state.loginUser
    }

}

const mapDispatchToProps = {
    loginSaveUserMapper
}


export let EditProfileComponentR = connect(mapStateToProps, mapDispatchToProps)(EditProfileComponent);


export let EditProfileComponentRW = withRouter(EditProfileComponentR);




