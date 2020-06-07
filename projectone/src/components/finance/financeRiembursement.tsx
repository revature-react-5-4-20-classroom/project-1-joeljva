import React from "react";
import { Container, Row, Col, ListGroup, NavItem, Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { PendingComponent } from "./pendingComponent";
import { ResolvedComponent } from "./financeResolved";



export class FinanceReimbursementComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            // changet:false
        }
    }

  


    render() {
        return (

            <Container fluid>
                <Row>
                    <Router>
                        <Col sm="4" >

                            {/* <ListGroup> */}
                                {/* <Nav tabs className="navbar"> */}
                                <nav className="navbar bg-light">
                                <ul className="navbar-nav">
                                    <NavItem>
                                        <NavLink to="/finance/reimbursement/pending" className="nav-link " activeClassName="active">View Pending Requests</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/finance/reimbursement/resolved" className="nav-link " activeClassName="active">View Resolved Requests</NavLink>
                                    </NavItem>
                                    </ul>
                                    </nav>
                                {/* </Nav> */}

                            {/* </ListGroup> */}




                            {/* changet={this.change} */}

                        </Col>
                        <Col sm="8">

                            <Switch>
                                <Route path="/finance/reimbursement/pending">
                                    <PendingComponent />
                                </Route>
                                <Route path="/finance/reimbursement/resolved">
                                    <ResolvedComponent />
                                </Route>


                            </Switch>



                        </Col>
                    </Router>
                </Row>
            </Container>

        )
    }

}