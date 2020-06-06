import React from "react";
import { EmployeeCardComponent } from "../employeecard";
import { Container, Row, Col } from "reactstrap";
import { ViewReimursementComponent } from "./viewReimbursement";





export class ReimbursementSingleUser extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount() {
        console.log(this.props.user);
        this.setState({
            user: this.props.user
        })
        //function to get all reimbursemetns of all users  and pass as a prop
    }


    render() {

        if (this.state.user) {

            return (
                <Container>
                    <Row >
                        <Col sm="5" >
                            <EmployeeCardComponent user={this.state.user} />
                        </Col>
                        <Col sm="6">
                            dfdfdfdfd
            <ViewReimursementComponent user={this.state.user} />
                        </Col>

                    </Row>

                </Container>
            )

        } else {
            return (
                <p></p>
            )
        }


    }
}