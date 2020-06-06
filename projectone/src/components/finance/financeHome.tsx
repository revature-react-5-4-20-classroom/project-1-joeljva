import React from "react";
import { FinanceNavigationComponent, FinanceNavigationComponentR, FinanceNavigationComponentRW } from "./financeNavigation";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { FinanceReimbursementComponent } from "./financeRiembursement";
import { EmployeeCardComponent } from "../employeecard";
import { ViewAllEmployeeComponent, ViewAllEmployeeComponentR } from "./viewAllEmployees";
import { ReimbursementSingleUser } from "./reimbursementSingleUser";
import { AllEmployees } from "./allEmployees";
import { EditProfileComponentRW } from "../editInfo";





export class FinanceComponent extends React.Component<any, any>{




    render() {


        return (
            <>


                {/* <FinanceNavigationComponentR/> */}
                <Router>
                    <FinanceNavigationComponentRW />
                    <Switch>
                        <Route path="/finance/reimbursement">
                            <FinanceReimbursementComponent />
                        </Route>
                        <Route path="/finance/allemployees">
                            <AllEmployees />
                        </Route>
                        <Route path="/finance/editprofile">
                            <EditProfileComponentRW />
                        </Route>
                        <Route path="finance/allemployees/employee">
                            <ReimbursementSingleUser />
                        </Route>
                        <Route path="*">
                            <EmployeeCardComponent user={this.props.user} />
                        </Route>


                    </Switch>


                </Router>

            </>


        )
    }

}


