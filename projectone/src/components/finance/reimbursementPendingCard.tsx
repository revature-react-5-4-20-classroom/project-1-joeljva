import React from "react";
import { Card, CardBody, ListGroup, ListGroupItem, Button, Modal, Form, FormGroup, Label, Input, ModalBody, Toast } from "reactstrap";
import { Reimbursement } from "../../models/reimbursement";
import { pathReimbursement } from "../../api/finance";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { emitKeypressEvents } from "readline";

//riems is the props it is an array with reims

interface IReimsProps {
    riems: Reimbursement[],
    history?: any,
    changeB?: any

}


interface IReimState {
    riems: any,
    change: any,
    modal: boolean,
    status: number,
    refresh: boolean

}

export class ReimbursementPendingCardComponent extends React.Component<IReimsProps, IReimState>{
    constructor(props: any) {
        super(props);
        this.state = {
            riems: null,
            change: null,
            // change:null,
            modal: false,
            status: 0,
            refresh: false
        }
    }
    approve = (e: any) => {   //for both reject and approve
        let reimId = e.target.value;
        console.log(reimId);
        let status = e.target.id;
        let filterReim = this.state.riems.filter((elem: Reimbursement) => { return elem.reimbursementId == reimId });
        // let d=new Date();
        // filterReim[0].dateResolved=d;
        console.log(filterReim)
        this.setState({
            change: filterReim[0],
            modal: true,
            status: status,

        })



    }

    componentDidMount() {
        console.log(this.props.riems)
        if (this.props.riems) {
            this.setState({
                riems: this.props.riems,

            })
        }
    }

    // shouldComponentUpdate=(prevProps:any,PrevState:any)=>{



    // }


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
            change:null
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
                change: null
                // change: new Reimbursement(0, 0, 0, 0, 0, "", 0, 0, 0),

            })
        } catch (e) {
            toast("error", { type: "error" });
            console.log(e);
        }
        if (this.props.changeB) {
            this.props.changeB();   /// all goofd
        }

    }




    render() {
        if (!Array.isArray(this.props.riems)) {
            return (
                <h2>No reimbursements exist</h2>
            )

        } else if (this.props.riems) {





            let riems: Reimbursement[] = this.props.riems;
            if (riems) {

                return (
                    <>
                        {
                            riems.map((elem: Reimbursement, i: any) => {

                                return (
                                    <div key={elem.reimbursementId}>

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

                                                <Button color="success"  id="2" value={elem.reimbursementId} onClick={this.approve} className="mr-1">Approve</Button>
                                                <Button  color="danger" id="3" value={elem.reimbursementId} onClick={this.approve} className="mr-1">Reject</Button>


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
                                            <Input type="number" id="reimbursementId" value={this.state.change? this.state.change.reimbursementId:""} disabled />
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
                                            <Input type="date" id="dateResolved" onChange={this.modalChange} value={this.state.change && this.state.change.dateResolved||""} required />
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
                                        <Button type="submit"  color="danger" className="mr-1">Submit</Button>
                                        <Button  onClick={this.modalReject} color="primary">Cancel</Button>



                                    </Form>


                                </div>
                            </ModalBody>
                        </Modal>

                        {/* {this.state.success&&
<>
<Toast color="primary" onCLick={this.toggle}>
success

    
</Toast>
</>

} */}

                    </>



                )

            }
        }
        else {
            return (
                <p>Error</p>
            )
        }



    }
}