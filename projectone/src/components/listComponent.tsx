import React from "react";




//listarray
export class ListComponent extends React.Component<any, any> {


    constructor(props: any) {
        super(props);
        this.state = {
            listObject: null
        }
    }

    componentDidMount() {
        this.setState({
            listObject: this.props.listItem
        })
    }


    render() {

        if (this.state.listObject) {
            return (
                <>
                    {
                        Object.entries(this.state.listObject).map((item: any, i) => {
                            if (item[1] === null) {
                                item[1] = ""
                            }
                            return (

                                <p key={i}>{item[0] + "  " + item[1]}</p>
                            )

                        })
                    }


                    <br />
                </>


            )
        }
        else {
            return null
        }





    }
}



