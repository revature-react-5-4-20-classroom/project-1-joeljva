import { Reimbursement } from "../models/reimbursement";
import React from "react";
import { ListComponent } from "./listComponent";
import { getReimbursements } from "../api/project0";
import { IState } from "../redux/reducers";
import { ViewReimursementComponent } from "./employeeViewReimbursement";
import { connect } from "react-redux";


interface IResolved{
    riems:Reimbursement[]|null
}




export class ReimbursementResolvedViewComponent extends React.Component<any, IResolved>{

    constructor(props: any) {
        super(props);
        this.state = {
            riems: null
        }

    }

    componentDidMount = async () => {

        let id = this.props.user.userId;
      
        try {
            let riems = await getReimbursements(id);
            // console.log(riems);
            let riemsFilter = riems.filter((elem: any) => {

                return elem.status === 2;
            });
            this.setState({
                riems: riemsFilter
            })
            // console.log(riems)
        } catch (e) {
            // console.log(e);
        }
    }




    render() {

       

        if (this.state.riems) {
            return (<>

                <ViewReimursementComponent reims={this.state.riems} />
                {/* {
            this.state.riems.map((elem:any,i:any)=>{
        
                return  <li key={i}><ListComponent  listItem={elem}/></li>
        
            })
        } */}
            </>)

        }

        if (!this.state.riems) {
            return <h1></h1>
        }


    }
}


const mapStateToProps = (state: IState) => {
   
    return {
        ...state.loginUser
    }

}

const mapDispatchToProps = {

}


export let ReimbursementResolvedViewComponentR = connect(mapStateToProps, mapDispatchToProps)(ReimbursementResolvedViewComponent);