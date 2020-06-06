import React from "react";
import { getAllUsers } from "../../api/finance";
import { User } from "../../models/user";
import { EmployeeCardComponent } from "../employeecard";
import { Container, Row, Col } from "reactstrap";
import { withRouter } from "react-router-dom";

import { toast } from "react-toastify";

export class ViewAllEmployeeComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            users: null
        }
    }

    componentDidMount = async () => {
        try {
            let users = await getAllUsers();
            this.setState({
                users: users,

            })
        }
        catch (e) {


        }

    }

    cardClick = (user: any) => {
        console.log(this.props.history);

        this.props.changeUser(user);

        this.props.history.push("/finance/allemployees/employee");


    }




    render() {
        if (this.state.users && (Array.isArray(this.state.users))) {
            return (

                this.state.users.map((user: User) => {

                    return (

                        <Container key={user.userId}>
                            <Row>
                                <Col sm="9">
                                    <EmployeeCardComponent cardClick={this.cardClick} riems={true} user={user} />
                                </Col>


                            </Row>

                            <br />
                        </Container>




                    )

                })



            )
        } else {
            return (
                <p>Error</p>
            )
        }
    }
}

export let ViewAllEmployeeComponentR = withRouter(ViewAllEmployeeComponent);