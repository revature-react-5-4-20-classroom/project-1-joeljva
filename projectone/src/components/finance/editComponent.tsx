import React from "react";
import { Container, Row, Col, Form, Input, Label, FormGroup, Button } from "reactstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";




export class EditReimbursementComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            change: null,
            status: 0
        }
    }

    modalChange = () => {

    }

    modalApprove = () => {

    }

    modalReject = () => {

    }

    componentDidMount = () => {
        this.setState({
            change: this.props.change,

        })

    }



    render() {

        if (this.state.change) {
            return (
                <Container>
                    <Row>
                        <Col>
                            <Form>
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
                                <Button onClick={this.modalApprove}>Submit</Button>
                                <Button onClick={this.modalReject}>Cancel</Button>



                            </Form>



                        </Col>


                    </Row>
                </Container>
            )
        }




    }


}

