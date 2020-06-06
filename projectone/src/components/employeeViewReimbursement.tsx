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


    // componentDidMount=async()=>{
    //     console.log(this.props.user)
    //     // this.setState({
    //     //     user:this.props.user
    //     // })



    // }


    // onView=async()=>{
    //     try{
    //         let response=await getReimsByUserId(this.props.user.userId);
    //         console.log(response);
    //     this.setState({
    //         reims:response
    //     })
    //     }
    //         catch(e){

    //         }

    // }






    render() {
        if (!this.props.reims) {
            return (
                <p>dfdgf</p>
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