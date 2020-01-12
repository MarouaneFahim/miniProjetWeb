import React, { Component } from 'react'
import StyleSheet from '../styles/HomeStyle'
import {Link} from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
            <div style={{  height: '100%'}}>
                <nav className="navbar navbar-dark bg-dark">
                    <span className="navbar-brand mb-0 h1">Ecole Supérieur de Technologie Essaouira</span>
                </nav>

                <div className="row" style={{ alignItems: 'center' , height: '100%' }}>
                     <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <Link to="login/espaceStudent" className="btn btn-outline-info"  style={StyleSheet.profil} >Espace Etudiant</Link>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <Link to="login/espaceAdmin" className="btn btn-info"  style={StyleSheet.profil} >Espace Admin </Link>
                    </div>

                    <div className="col-md-4 d-flex justify-content-center align-items-center">
                        <Link to="/login/espaceProfessor" className="btn btn-outline-info"  style={StyleSheet.profil} >Espace Professeur </Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
