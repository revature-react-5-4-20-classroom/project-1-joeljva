

import React from "react";
import { NavbarBrand } from "reactstrap";


export class FooterComponent extends React.Component<any,any>{

    render(){
        return(

<div className="fixed-bottom bg-dark">
    <nav>
    <ul className="nav navbar-nav mx-auto align-content-center">
<NavbarBrand>
                        
                        <img src="../logo.png" width="50" height="30" className="d-inline-block mx-auto align-top " alt="footer"/>
                    </NavbarBrand>
                    </ul>
                    </nav>
</div>


        )
    }





}