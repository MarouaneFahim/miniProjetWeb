import React, { Component } from 'react';

export default class AddStudent extends Component {

    constructor(props){
        super(props);

        this.state= {
            Classes:["ISIL","MGE","ERDD","MBF","MT"]
        }
    }

    render() {
        return (
            <div className=" col-md-10 d-flex flex-column justify-content-start align-items-center">
                <h4>Add new Student</h4>

                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Class</label>
                        {this.state.Classes.map((el) =>{
                            return(
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="exampleRadios1" value="" />
                                <label class="form-check-label" for="exampleRadios1">
                                    {el}
                                </label>
                                </div>
                            )
                        })}
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
