import React from "react";
import { getReimsByUserId, pathReimbursement } from "../../api/finance";
import { Reimbursement } from "../../models/reimbursement";
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


    componentDidMount = async () => {
        console.log(this.props.user)
        // this.setState({
        //     user:this.props.user
        // })
        this.onView();


    }


    onView = async () => {
        try {
            let response = await getReimsByUserId(this.props.user.userId);
            console.log(response);
            this.setState({
                reims: response
            })
        }
        catch (e) {

        }

    }

    //creates the modal
    onApprove = (e: any) => {
        let reimId = e.target.value;
        console.log(reimId);
        let status = e.target.id;
        let filterReim = this.state.reims.filter((elem: Reimbursement) => { return elem.reimbursementId == reimId });
        // let d=new Date();
        // filterReim[0].dateResolved=d;
        console.log(filterReim)
        this.setState({
            change: filterReim[0],
            modal: true,
            status: status,
            success: false
        })



    }



    modalChange = (e: any) => {

        let property = e.target.id;
        let value = e.target.value;
        this.setState((prevState: any) => {

            let change = Object.assign({}, prevState.change);   //

            change[property] = value;    //make sure to make the target exist

            return { change };


        })
        console.log(this.state.change);


    }

    //modal button reject
    modalReject = (e: any) => {

        e.preventDefault();
        this.setState({
            modal: false,
            change: new Reimbursement(0, 0, 0, 0, 0, "", 0, 0, 0)
        })

    }

    modalApprove = async (e: any) => {
        e.preventDefault();
        let change = this.state.change;
        try {
            let response = await pathReimbursement(change.reimbursementId, change.dateResolved, change.description, change.resolver, this.state.status);
            console.log("tes");
            console.log(response);

            toast("success", { type: "success" });
            this.setState({
                modal: false,
                change: new Reimbursement(0, 0, 0, 0, 0, "", 0, 0, 0),
                success: true
            })
        } catch (e) {
            toast("error", { type: "error" });
            console.log(e);
        }
        this.onView();   //to update 
    }



    render() {
        if (!this.state.reims) {
            return (
                <p>dfdgf</p>
            )
        } else if (Array.isArray(this.state.reims)) {
            return (
                <>
                    {
                        this.state.reims.map((elem: Reimbursement, i: any) => {

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
                                            {(elem.status == 1) &&
                                                <>
                                                    <Button color="success" id="2" value={elem.reimbursementId} onClick={this.onApprove} className="mr-1">Approve</Button>
                                                    <Button color="danger" id="3" value={elem.reimbursementId} onClick={this.onApprove} className="mr-1">Reject</Button>
                                                </>
                                            }



                                        </CardBody>


                                    </Card>




                                </div>)
                        })}



                    <Modal isOpen={this.state.modal}>
                        <ModalBody>
                            <div>

                                <Form onSubmit={this.modalApprove}>
                                    <FormGroup>
                                        <Label for="reimbursementId">Reimbursement Id</Label>
                                        <Input type="number" id="reimbursementId" value={this.state.change && this.state.change.reimbursementId} disabled />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="author">Author</Label>
                                        <Input type="number" id="author" value={this.state.change && this.state.change.author} disabled />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="dateSubmitted">Date Submitted</Label>
                                        <Input type="text" id="dateSubmitted" value={this.state.change && this.state.change.dateSubmitted} disabled />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="dateResolved">Date Resolved</Label>
                                        <Input type="date" id="dateResolved" onChange={this.modalChange} value={this.state.change && this.state.change.dateResolved} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="description">Description</Label>
                                        <Input type="text" id="description" onChange={this.modalChange} value={this.state.change && this.state.change.description} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="resolver">Resolver</Label>
                                        <Input type="number" id="resolver" onChange={this.modalChange} value={this.state.change && this.state.change.resolver} required />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="status">Status</Label>
                                        <Input type="number" id="status" onChange={this.modalChange} disabled value={this.state.status} />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="type">Type</Label>
                                        <Input type="number" id="type" value={this.state.change && this.state.change.type} disabled />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="amount">Amount</Label>
                                        <Input type="text" id="amount" value={this.state.change && this.state.change.amount} disabled />
                                    </FormGroup>
                                    <Button type="submit" >Submit</Button>
                                    <Button onClick={this.modalReject}>Cancel</Button>



                                </Form>


                            </div>
                        </ModalBody>
                    </Modal>

                </>



            )
        } else {
            return (
                <p>No reimbursement exists for the user</p>
            )
        }


    }



}