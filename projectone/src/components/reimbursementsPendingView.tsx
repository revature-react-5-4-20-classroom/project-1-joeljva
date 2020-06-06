import { Reimbursement } from "../models/reimbursement";
import React from "react";
import { ListComponent } from "./listComponent";
import { getReimbursements } from "../api/project0";
import { IState } from "../redux/reducers";
import { connect } from "react-redux";
import { ViewReimursementComponent } from "./employeeViewReimbursement";







export class ReimbursementPendingViewComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            reims: null
        }

    }

    componentDidMount = async () => {

        let id = this.props.user.userId;
        console.log(id);
        try {
            let riems = await getReimbursements(id);
            console.log(riems);
            let riemsFilter = riems.filter((elem: any) => {

                return elem.status === 1;
            });
            this.setState({
                riems: riemsFilter
            })
            console.log(riems)
        } catch (e) {
            console.log(e);
        }


        //         let riems:[]=this.props.riems;
        //         console.log(riems);
        //         if(riems){
        // let riemsFilter=riems.filter((elem:any)=>{

        // return elem.status===1;});
        // console.log(riemsFilter)
        //         this.setState({
        //             reims:riemsFilter});

        //     }
        // console.log(this.state.riems)
    }


    viewReims = async (e: any) => {


    }



    render() {

        // console.log(this.props.riems)
        // let riems:[]=this.props.riems;
        // let riemsFilter=riems.filter((elem:any)=>{
        // return elem.type===1;});

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
            return <h1>No</h1>
        }


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


export let ReimbursementPendingViewComponentR = connect(mapStateToProps, mapDispatchToProps)(ReimbursementPendingViewComponent);











