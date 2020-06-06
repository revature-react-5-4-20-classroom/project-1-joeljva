import React from "react";
import { loginP } from "../api/project0";
import { User } from "../models/user";
import { withRouter } from 'react-router-dom'
import { Button, Container, Row, Col } from "reactstrap";
import { toast } from "react-toastify";

interface IloginState {
    username: string,
    password: string,
    isError: boolean
}


// interface IloginProps{
//     setUser:(user:User)=>void;
//     history:any;
// }

export class LoginComponent extends React.Component<any, IloginState> {
    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isError: false

        }
    }
    //function to verify and if okay sent to the store and then call a function to change the page if verified
    verifyUser = async (event: any) => {
        event.preventDefault();
        try {
            let user: User = await loginP(this.state.username, this.state.password);   //setting the store there
            //  this.props.setUser(user);
            if (user.roleName === "finance-manager") {
                this.props.history.push("/finance");
            } else {
                this.props.history.push("/employee");
            }




        } catch (e) {
            toast("invalid credentials", { type: "error" });
            this.setState({
                isError: true
            })

        }



    }

    //onchange functions
    setUsername = (event: any) => {
        let username = event.target.value;
        this.setState({
            username: username
        })

    }

    setPassword = (event: any) => {
        let password = event.target.value;
        this.setState({
            password: password
        })
    }



    render() {




        return (

            <>
                {/* style={{verticalAlign:"middle"}} */}
                {/* <Container> */}
                {/* <Row>
    <Col>
    <h1 className="font-weight-bold">Welcome to the Employee Login Website</h1>
    </Col>
</Row> */}


                {/* <Row className="align-items-center bg-light"> */}
                {/* <Col sm={{size:9,offset:3}} > */}

                <div className="row align-items-center justify-content-center" style={{ height: "80%" }}  >
                    <form onSubmit={this.verifyUser} className="form-signin" >
                        <h2 className="">Login in</h2>
                        <div className="form-group">
                            <label><span className="font-weight-bold">UserName:</span><input type="text" className="form-control" value={this.state.username} onChange={this.setUsername} required /></label>
                        </div>
                        <div className="form-group">
                            <label><span className="font-weight-bold">Password:</span><input type="password" className="form-control" value={this.state.password} onChange={this.setPassword} required /></label>
                        </div>
                        {/* <button className="btn btn-primary" type="submit">Login</button> */}
                        <Button color="primary">Login</Button>
                    </form>
                </div>
            </>
            // {/* </Col>
            // </Row>
            // </Container> */}


        )
    }






}

export let Logins = withRouter(LoginComponent);