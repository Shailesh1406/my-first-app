import React,{Component} from "react";

export default class MainComponent extends Component{

    state = {
        pageTitle : "Customers", 
        customerCount : 5,
        customers : [
        {id: 1, name: "Shailesh", age : 32},
        {id: 2, name: "Somya", age : 30},
        {id: 3, name: "Bauli", age : 2},
        {id: 4, name: "Baula", age : 3}
    ]};

    render(){

        return (
            <div>
                <h4 className="border-bottom m1 p1">{this.state.pageTitle}
                    <span className="badge badge-secondary m2">{this.state.customerCount}</span>
                </h4>
                <button className="btn btn-info" onClick={this.onRefreshClick()}>Refresh</button>
                <table>
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Customer Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((cust) =>{
                                return (
                                    <tr key={cust.id}>
                                        <td>{cust.id}</td>
                                        <td>{cust.name}</td>
                                        <td>{cust.age}</td>
                                    </tr>

                                );
                            })
                        }
                    </tbody>
                </table>
                
            </div>
        );
    }

    onRefreshClick = () => {
        this.setState({customerCount:7});
        console.log("Refresh Clicked !!!");
    }
}