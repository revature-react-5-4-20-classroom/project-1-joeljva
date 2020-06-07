import React from "react";
import { Card, CardBody, ListGroup, ListGroupItem, Button, Modal, Form, FormGroup, Label, Input, ModalBody, Toast } from "reactstrap";
import { Reimbursement } from "../../models/reimbursement";
import { pathReimbursement } from "../../api/finance";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";
import { emitKeypressEvents } from "readline";

//riems is the props it is an array with reims
//need to split if time 
//remove if  else and if only
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


}

export class ReimbursementResolvedCardComponent extends React.Component<IReimsProps, IReimState>{
    constructor(props: any) {
        super(props);
        this.state = {
            riems: null,
            change: null,
            modal: false,
            status: 0,

        }
    }


    componentDidMount() {
        // console.log(this.props.riems)
        if (this.props.riems) {
            this.setState({
                riems: this.props.riems,

            })
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




                                            </CardBody>


                                        </Card>




                                    </div>)
                            })}

                        {/* //split state into props  */}



                    </>



                )

            }
        }
        else {
            return (
                <p></p>
            )
        }



    }
}