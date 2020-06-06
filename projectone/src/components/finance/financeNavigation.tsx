import React from "react";
import { Navbar, Nav, NavItem, Button } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';
import { IState } from "../../redux/reducers";
import { connect } from "react-redux";

import { loginSaveUserMapper } from "../../redux/action-mappers";


export class FinanceNavigationComponent extends React.Component<any, any>{



  logoutUser = (e: any) => {
    console.log("hello")
    // console.log(this.props.location.pathname)
    this.props.loginSaveUserMapper(null);
    this.props.history.push("/");


  }


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">

          <Nav tabs>
            <NavItem>
              <NavLink exact to="/finance/home" className="nav-link" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink exact to="/finance/reimbursement" className="nav-link" activeClassName="active">Reimbursements</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/finance/allemployees" className="nav-link" activeClassName="active">Employees</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/finance/editProfile" className="nav-link" activeClassName="active">Edit Profile</NavLink>
            </NavItem>
            <NavItem tag={() => { return <Button onClick={this.logoutUser} color="secondary" outline>Logout</Button> }} />


          </Nav>

        </Navbar>
      </div>



    )
  }

}


export let FinanceNavigationComponentR = withRouter(FinanceNavigationComponent);



const mapStateToProps = (state: IState) => {
  console.log("in mys state")
  console.log(state);
  return {
    ...state.loginUser
  }

}

const mapDispatchToProps = {
  loginSaveUserMapper


}


export let FinanceNavigationComponentRW = connect(mapStateToProps, mapDispatchToProps)(FinanceNavigationComponentR);