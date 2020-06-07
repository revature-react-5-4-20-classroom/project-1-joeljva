import React from "react";

import { Reimbursement } from "../models/reimbursement";
import { Button, ListGroupItem, ListGroup, CardBody, Card, Modal, ModalBody, Form, FormGroup, Label, Input } from "reactstrap";
import { toast } from "react-toastify";

export class ViewReimursementComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            user: null,
            reims: null,
            modal: false,
            change: new Reimbursement(0, 0, 0, 0, 0, "", 0, 0, 0),
            status: 0
        }


    }


  





    render() {
        if (!this.props.reims) {
            return (
                <p></p>
            )
        } else if (Array.isArray(this.props.reims)) {
            return (
                <>
                    {
                        this.props.reims.map((elem: Reimbursement, i: any) => {

                            return (
                                <div key={i}>

                                    <Card>
                                        <CardBody>
                                            <ListGroup>
                                                <ListGroupItem>
                                                    Reimbursement Id:{elem.reimbursementId}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Author:{elem.author}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Date Submitted: {elem.dateSubmitted}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Date Resolved: {elem.dateResolved}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Description: {elem.description}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Resolver Id: {elem.resolver}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Status: {elem.status}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Type: {elem.type}
                                                </ListGroupItem>
                                                <ListGroupItem>
                                                    Amount: {elem.amount}
                                                </ListGroupItem>

                                            </ListGroup>


                                        </CardBody>


                                    </Card>




                                </div>)
                        })}
                </>
            )
        }
    }

}