import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';

export default class ListStudents extends Component {
    render() {
        return (
            <div className=" col-md-10 d-flex flex-column justify-content-start align-items-center">
                <h4>Students List</h4>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Class</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.students.map((student) => {
                            return(
                                <tr>
                                    <td>{student.name} </td>
                                    <td>{student.email}</td>
                                    <td>{student.id_class}</td>
                                    <td>
                                        <button type="button" className="btn btn-outline-primary btn-sm">
                                            Edit
                                        </button>
                                        <button type="button" className="btn btn-outline-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
                    
                <button type="button" className="btn btn-outline-success btn-sm" onClick={()=> this.props.handel("AddStudent")}>Add Student</button>
            </div>
        )
    }
}
