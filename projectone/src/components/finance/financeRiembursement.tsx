import React from "react";
import { Container, Row, Col, ListGroup, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { PendingComponent } from "./pendingComponent";



export class FinanceReimbursementComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            // changet:false
        }
    }

    // change=()=>{
    //     console.log("in chnaget")
    //     let changet=this.state.changet;
    //     this.setState({
    // changet:!changet
    //     })
    // }


    render() {
        return (

            <Container fluid>
                <Row>
                    <Router>
                        <Col sm="4" >

                            <ListGroup>
                                <Nav>
                                    <NavItem>
                                        <NavLink to="/finance/reimbursement/pending" className="nav-link" activeClassName="active">View Pending Requests</NavLink>
                                    </NavItem>
                                </Nav>

                            </ListGroup>




                            {/* changet={this.change} */}

                        </Col>
                        <Col sm="8">

                            <Switch>
                                <Route path="/finance/reimbursement/pending">
                                    <PendingComponent />
                                </Route>



                            </Switch>



                        </Col>
                    </Router>
                </Row>
            </Container>

        )
    }

}