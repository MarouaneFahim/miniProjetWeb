import React, { Component } from 'react'
import StyleSheet from '../../styles/HomeStyle';


export default class Home extends Component {
    render() {
        return (
            <div className=" col-md-10 d-flex justify-content-center align-items-center">
                <div className="d-flex flex-column">
                    <h1>Welcom to Admin Dashboard</h1>
                    <div className="d-flex justify-content-center align-items-center" style={StyleSheet.bar}>
                        <button type="button" className="btn btn-outline-primary" style={StyleSheet.butt} onClick={()=> this.props.handel("listStdts")}>Students</button>
                        <button type="button" className="btn btn-outline-success"  style={StyleSheet.butt} onClick={()=> this.props.handel("listProf")}>Professors</button>
                    </div>
                </div>
            </div>
        )
    }
}
