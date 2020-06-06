import React from "react";
import { User } from "../models/user";
import { Button } from "reactstrap";



interface ICardProps {
    user: User,
    riems?: any,
    cardClick?: any,


}

export class EmployeeCardComponent extends React.Component<ICardProps, any>{

    constructor(props: any) {
        super(props);
        this.state = {
            user: null
        }
    }


    clicks = (e: any) => {
        let id = e.target.value;
        console.log(id);
        console.log(this.state.user);
        this.props.cardClick(this.state.user);

    }

    componentDidMount = () => {
        this.setState({
            user: this.props.user
        })
    }


    render() {
        return (
            <>

                <div className="card bg-info text-white" style={{ backgroundColor: "" }}>

                    <div className="card-header">
                        <h2>{this.props.user.firstName + "  " + this.props.user.lastName}</h2>
                        <p>{this.props.user.roleName}</p>
                        <p>{this.props.user.username}</p>
                    </div>
                    <div className="card-body">
                        <p>username:{this.props.user.username}</p>
                        <p>email:{this.props.user.email}</p>
                        {this.props.riems &&
                            <Button value={this.props.user.userId} onClick={this.clicks}>view Reimbursements</Button>


                        }
                    </div>

                </div>
            </>
        )
    }

}