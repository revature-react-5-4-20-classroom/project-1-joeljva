import React from "react";
import { NavLink } from "react-router-dom";
import { User } from "../models/user";
import { ReimbursementSubmitComponent, ReimbursementSubmitComponentR } from "./reimbursementSubmitComponent";
import { withRouter } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getReimbursements } from "../api/project0";
import { userInfo } from "os";
import { IState } from "../redux/reducers";
import { connect } from "react-redux";
import { ReimbursementPendingViewComponentR } from "./reimbursementsPendingView";
import { ReimbursementResolvedViewComponent, ReimbursementResolvedViewComponentR } from "./reimbursementViewResolved";
import { Button } from "reactstrap";

interface IReimbursementProps {
    user: User
}


export class ReimbursementComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            reims: []
        }
    }

    clicks = (e: any) => {
        e.preventDefault();

        // console.log(this.props.history)
        if (this.props.location.pathname !== "/employee/reimbursements/submit") {
            console.log("hello")
            this.props.history.push("/employee/reimbursements/submit");
        }
    }

    viewReims = async (e: any) => {
        e.preventDefault();
        let id = e.target.id;
        console.log(id);
        let riems = await getReimbursements(id);
        this.setState({
            riems: riems
        })
        console.log(riems);
        if (this.props.location.pathname !== "/employee/reimbursements/pending") {
            console.log("hello")
            this.props.history.push("/employee/reimbursements/pending");
        }
    }

    viewResolved = async (e: any) => {
        e.preventDefault();
        let id = e.target.id;
        console.log(id);
        let riems = await getReimbursements(id);
        this.setState({
            riems: riems
        })
        console.log(riems);
        if (this.props.location.pathname !== "/employee/reimbursements/resolved") {
            console.log("hello")
            this.props.history.push("/employee/reimbursements/resolved");
        }
    }






    render() {

        return (

            <div>

                <div className="container-fluid">
                    <div className="row">

                        <div className="col-sm-3">
                            <div className="list-group">
                                {/* <a onClick={this.clicks} >Submit reim</a>
<a onClick={this.viewReims} id={this.props.user.userId}>View Pending requests</a>
<a onClick={this.viewResolved} id={this.props.user.userId}>View resolved Requests</a> */}

                                <Button onClick={this.clicks} className="mb-2" color="info">Submit Reimbursement</Button>
                                <Button onClick={this.viewReims} className="mb-2" color="info" id={this.props.user.userId}>VIew Pending Requests</Button>
                                <Button onClick={this.viewResolved} className="mb-2" color="info" id={this.props.user.userId}>View Resolved Requests</Button>

                            </div>
                        </div>

                        <div className="col-sm-6">


                            <Switch>
                                <Route path={`${this.props.match.path}/submit`} render={(props) => { return <ReimbursementSubmitComponentR {...props} /> }} />
                                {/* <Route path={`${this.props.match.path}/pending`} render={(props)=>{return <ReimbursementPendingViewComponent {...props}/>}}/>  */}
                                <Route path={`${this.props.match.path}/pending`}>
                                    <ReimbursementPendingViewComponentR riems={this.state.riems} /></Route>
                                <Route path={`${this.props.match.path}/resolved`}>
                                    <ReimbursementResolvedViewComponentR riems={this.state.riems} /></Route>



                            </Switch>

                        </div>


                    </div>


                </div>





            </div>

        )
    }
}


const mapStateToProps = (state: IState) => {
    console.log("in mys state")
    console.log(state);
    return {
        ...state.loginUser
    }

}

const mapDispatchToProps = {

}


export let ReimbursementComponentR = connect(mapStateToProps, mapDispatchToProps)(ReimbursementComponent);
export let ReimbursementComponentR1 = withRouter(ReimbursementComponentR);