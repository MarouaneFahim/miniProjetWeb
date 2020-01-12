import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import StyleSheet from '../styles/HomeStyle';
import ListStudents from '../pages/Admin/ListStudents';
import AddStudent from '../pages/Admin/AddStudent';
import Home from '../pages/Admin/Home';
import API from '../../api_axios';


class DashboardAdmin extends Component {

    constructor(props){
        super(props);

        this.state= {
            show: "home",
            studentsList:[]
        }
    }

    componentWillMount(){
        API.get("api/users/studentsList")
        .then(res=> this.setState({studentsList: res.data}))
    }

    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    handelDashboard= (value)=>{
        this.setState({ show: value })
    }
    render() {
        return (
            <div className="row"  style={{height: '100%', margin: 'auto'}}>
                <div className="col-sm-2 bg-dark d-flex flex-column align-items-start" style={StyleSheet.menu}>
                    <button style={StyleSheet.li} onClick={()=> this.handelDashboard("home")}>Home</button>
                    <button style={StyleSheet.li} onClick={()=> this.handelDashboard("listStdts")}>Students</button>
                    <button style={StyleSheet.li} onClick={()=> this.handelDashboard("listProf")}>Professors</button>
                    <button style={StyleSheet.li}
                        onClick={this.onLogoutClick}
                    >
                        Logout
                    </button>
                </div>

                {this.state.show == "home" && <Home handel={(val)=> this.handelDashboard(val)} /> }
                
                {this.state.show == "listStdts" && 
                    <ListStudents students={this.state.studentsList} handel={(val)=> this.handelDashboard(val)}/> 
                }

                {this.state.show == "AddStudent" && 
                    <AddStudent />
                }
            </div>
        )
    }
}


DashboardAdmin.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(DashboardAdmin);