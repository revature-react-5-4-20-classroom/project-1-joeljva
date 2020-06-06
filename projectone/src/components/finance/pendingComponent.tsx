import React from "react";
import { getPending } from "../../api/finance";
import { ReimbursementPendingViewComponent } from "../reimbursementsPendingView";
import { ReimbursementPendingCardComponent } from "./reimbursementPendingCard";







export class PendingComponent extends React.Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            response: null,
            changes: false
        }
    }

    componentDidMount = async () => {
        this.getReims();

    }

    getReims = async () => {
        let response = await getPending();
        console.log("hello");
        console.log(response)
        if (response.length > 0) {

            this.setState({
                response: response
            })




        }


    }




    changesF = () => {
        // this.getReims();
        this.getReims();

    }

    // changeB={this.changesF}

    render() {
        if (!this.state.response) {
            return <p>g</p>
        } else {
            return (
                <ReimbursementPendingCardComponent changeB={this.changesF} riems={this.state.response} />
            )


        }


    }

}