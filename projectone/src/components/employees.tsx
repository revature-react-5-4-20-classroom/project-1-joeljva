import React from "react";
import { Provider, connect } from "react-redux";
import { IState } from "../redux/reducers";
import { EmployeeNavigationComponent, EmployeeNavigationRoute, EmployeeNavigationRouteS } from "./employeeNavigation";
import { ReimbursementSubmitComponent } from "./reimbursementSubmitComponent";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { EmployeeCardComponent } from "./employeecard";
import { ReimbursementComponent, ReimbursementComponentR1, ReimbursementComponentR } from "./reimbursementComponent";
import { EditProfileComponent, EditProfileComponentR, EditProfileComponentRW } from "./editInfo";
import { FooterComponent } from "./Footer";
// import { S3Test } from "./s3test";






export class EmployeeComponent extends React.Component<any, any>{



    render() {
        // console.log(this.props);
        let user = this.props.user;
        // console.log(user)


        return (
            <>
          
                <Router>
                    <EmployeeNavigationRouteS />



                    <Switch>


                        <Route path={`${this.props.match.path}/reimbursements`} render={(props) => { return <ReimbursementComponentR {...props} /> }} />
                        <Route path={`${this.props.match.path}/editprofile`} render={(props) => { return <EditProfileComponentRW {...props} /> }} />

                        <Route path={["/home", "*"]}>
                            <EmployeeCardComponent user={this.props.user} />
                        </Route>

                    </Switch>








                </Router>

<FooterComponent/>

            </>



        )
    }
}


const mapStateToProps = (state: IState) => {
    // console.log("in mys state")
    // console.log(state);
    return {
        ...state.loginUser
    }

}

const mapDispatchToProps = {

}

export const ReduxEmployeeContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent);

