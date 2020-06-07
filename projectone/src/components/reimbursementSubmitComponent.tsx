import React from "react";
import { submitReimbursements } from "../api/project0";
import { User } from "../models/user";
import { IState } from "../redux/reducers";
import { connect } from "react-redux";
import { Form, Input, FormGroup, Button, Label } from "reactstrap";
import { toast } from "react-toastify";





interface IReimbursementStateType {
    amount: any,
    dateSubmitted: "",
    description: string,
    type: number
}


export class ReimbursementSubmitComponent extends React.Component<any, IReimbursementStateType>{   //view componnet





    constructor(props: any) {
        super(props);
        this.state = {
            amount: 0,
            dateSubmitted: "",
            type: 1,
            description: ""



        }
    }

    // componentDidMount = () => {
    //     console.log(this.props.user.userId)
    // }




    //functions for all the inputs

    setAmount = (e: any) => {
        let amount = e.target.value;
        this.setState({
            amount: amount
        })

    }

    setDate = (e: any) => {
        let date = e.target.value;
        this.setState({
            dateSubmitted: date
        })

    }
    setDescription = (e: any) => {
        let description = e.target.value;
        this.setState({
            description: description
        })

    }
    setType = (e: any) => {
        let type = e.target.value;
        // console.log(type);
        // let name=e.target.name;
        this.setState({
            type: type
        })

    }

    //onsubmit
    onSubmit = async (e: any) => {
        e.preventDefault();
        //call the axios function get the reim user and then display the reimbursement from the user
        // console.log(this.state.type);
        // console.log(this.state.description)
        // console.log(this.props.user.userId);
        try {
            let x = await submitReimbursements(this.props.user.userId, this.state.amount, this.state.dateSubmitted, this.state.description, this.state.type);
            toast("success", { type: "success" });
            // console.log(x);
            this.props.history.push("/employee/reimbursements/pending");
        }

        catch (e) {
            toast("error", { type: "error" });
        }
    }

    render() {

        return (
            <Form onSubmit={this.onSubmit}>
                <FormGroup>
                    <label>Amount</label>
                    <Input type="number" id="amount" onChange={this.setAmount} value={this.state.amount || ""} required />

                </FormGroup>
                <FormGroup>
                    <label>date submitted</label>
                    <Input type="date" onChange={this.setDate} value={this.state.dateSubmitted} required />

                </FormGroup>
                <FormGroup>
                    <label>Description</label>
                    <Input type="text" onChange={this.setDescription} value={this.state.description} required />

                </FormGroup>
                <FormGroup>
                    <Label>Reason</Label>
                    {/* <input type="text" onChange={this.setType}  value={this.state.type} /> */}
                    {/* <Select name="types" value={this.state.type} onChange={this.setType}  > */}
                    <Input type="select" name="types" value={this.state.type} onChange={this.setType} required>
                        <option value="1"  >Lodging</option>
                        <option value="2">Travel</option>
                        <option value="3">Food</option>
                        <option value="4">Other</option>
                        {/* </Select> */}
                    </Input>
                </FormGroup>
                <Button type="submit" color="primary">Submit</Button>



            </Form>






        )

    }

}

const mapStateToProps = (state: IState) => {

    return {
        ...state.loginUser
    }

}

const mapDispatchToProps = {

}

export const ReimbursementSubmitComponentR = connect(mapStateToProps, mapDispatchToProps)(ReimbursementSubmitComponent);