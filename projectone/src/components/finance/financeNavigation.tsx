import React from "react";
import { Navbar, Nav, NavItem, Button, NavbarBrand } from "reactstrap";

import { NavLink, withRouter } from 'react-router-dom';
import { IState } from "../../redux/reducers";
import { connect } from "react-redux";

import { loginSaveUserMapper } from "../../redux/action-mappers";


export class FinanceNavigationComponent extends React.Component<any, any>{



  logoutUser = (e: any) => {
   
    // console.log(this.props.location.pathname)
    this.props.loginSaveUserMapper(null);
    this.props.history.push("/");


  }


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">

          <Nav tabs className="w-100">
          <NavbarBrand>
                        
                        <img src="../logo.png" width="50" height="30" className="d-inline-block align-top"/>
                    </NavbarBrand>
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
            <NavItem className="float-right" tag={() => { return <Button className="float-right" onClick={this.logoutUser} color="primary" outline>Logout</Button> }} />


          </Nav>
          {/* <NavItem className="float-right" tag={() => { return <Button className="float-right" onClick={this.logoutUser} color="primary" outline>Logout</Button> }} /> */}
        </Navbar>
      </div>



    )
  }

}


export let FinanceNavigationComponentR = withRouter(FinanceNavigationComponent);



const mapStateToProps = (state: IState) => {
 
  return {
    ...state.loginUser
  }

}

const mapDispatchToProps = {
  loginSaveUserMapper


}


export let FinanceNavigationComponentRW = connect(mapStateToProps, mapDispatchToProps)(FinanceNavigationComponentR);