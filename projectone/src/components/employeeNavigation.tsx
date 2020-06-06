import React from "react";
import { NavLink, Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'

import { IState } from "../redux/reducers";
import { connect } from "react-redux";
import { loginSaveUserMapper } from "../redux/action-mappers";
import { NavItem, Navbar, Nav, Button, ButtonToggle } from "reactstrap";




export class EmployeeNavigationComponent extends React.Component<any, any>{




    reimChange = (e: any) => {
        e.preventDefault();
        // console.log(this.props.location.pathname)
        if (this.props.location.pathname !== "/employee/reimbursements") {
            console.log("dfg")
            this.props.history.push("/employee/reimbursements");
        }               // this works

    }

    editProfile = (e: any) => {
        e.preventDefault();
        // console.log(this.props.location.pathname)
        if (this.props.location.pathname !== "/employee/editprofile") {
            console.log("dfg")
            this.props.history.push("/employee/editprofile");
        }

    }

    logout = (e: any) => {
        e.preventDefault();
        // console.log(this.props.location.pathname)
        this.props.loginSaveUserMapper(null);
        this.props.history.push("/");


    }
    home = (e: any) => {
        e.preventDefault();
        if (this.props.location.pathname !== "/employee/home") {
            console.log("dfg")
            this.props.history.push("/employee/home");
        }


    }




    render() {
        return (

            // <>
            // <nav className="navbar navbar-expand-sm justify-content-right">


            // <ul className="nav nav-tabs mr-auto">
            // <li className="nav-item">

            //     {/* <a className="nav-link" onClick={this.reimChange} >Reimbursements</a> */}
            //     <button onClick={this.home}>Home</button>
            // </li>
            // <li className="nav-item">

            //     {/* <a className="nav-link" onClick={this.reimChange} >Reimbursements</a> */}
            //     <button onClick={this.reimChange}>Reimbursements</button>
            // </li>

            // <li className="nav-item">

            //     {/* <a className="nav-link" onClick={this.editProfile}>Edit Profile</a> */}
            //     <button onClick={this.editProfile}>Edit Profile</button>
            // </li>

            // <li className="nav-item">

            //     {/* <a className="nav-link"  onClick={this.logout}>logout</a> */}
            //     <button onClick={this.logout}>logout</button>
            // </li>

            // </ul>


            // </nav>




            // </>
            <div>
                <Navbar>
                    <Nav>
                        <NavItem>
                            <ButtonToggle onClick={this.home} outline color="info" className="mr-2" >Home</ButtonToggle>
                        </NavItem>
                        <NavItem>
                            <ButtonToggle onClick={this.editProfile} className="mr-2" outline color="info" >Edit Profile</ButtonToggle>
                        </NavItem>
                        <NavItem>
                            <NavItem tag={() => { return <ButtonToggle className="mr-2" onClick={this.reimChange} color="info" outline>Reimbursements</ButtonToggle> }} />
                        </NavItem>
                        <NavItem tag={() => { return <Button className="mr-2" onClick={this.logout} color="info" outline>Logout</Button> }} />
                    </Nav>
                </Navbar>
            </div>



        )
    }
}

export let EmployeeNavigationRoute = withRouter(EmployeeNavigationComponent);

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


export let EmployeeNavigationRouteS = connect(mapStateToProps, mapDispatchToProps)(EmployeeNavigationRoute);
