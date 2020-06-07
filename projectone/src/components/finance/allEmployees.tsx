import React from "react";


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ViewAllEmployeeComponentR, ViewAllEmployeeComponent } from "./viewAllEmployees";
import { ReimbursementSingleUser } from "./reimbursementSingleUser";
import { User } from "../../models/user";


export class AllEmployees extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            user: 0
        }
    }


    changeUser = (user: any) => {
        this.setState({
            user: user
        })
        // console.log(user)
    }

    render() {


        return (

            <>
                {/* {this.state.user&&  <p>{this.state.user}</p>}      */}

                <Router>
                    <Switch>
                        <Route path="/finance/allemployees/employee">
                            <ReimbursementSingleUser user={this.state.user} />

                        </Route>

                        <Route path="*">
                            <ViewAllEmployeeComponentR changeUser={this.changeUser} />
                        </Route>

                    </Switch>




                </Router>



            </>
        )
    }




}