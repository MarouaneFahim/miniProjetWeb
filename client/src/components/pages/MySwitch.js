import React from 'react';
import Switch from '@material-ui/core/Switch';

class MySwitch extends React.Component{
   constructor(props){
       super(props);
       this.state = {
            isCheked : false
        }

        console.log( "** ",this.props.id_student)
   }
  
     handleChange =  event => {
            this.setState({  isCheked: event.target.checked });
            console.log( "------------------------",event.target.checked)
    };

    render(){
        return(
            <div className="switch">
                <label>
                
                <input onChange={(e)=>{ this.props.handleSwitcheChanges(e);  }} type="checkbox" value={this.props.id_student}/>
                <span className="lever"></span>
                
                </label>
          </div>
        )       

    };

        
    /*
    render(){
        return (
            <Switch
                checked={ this.state.isCheked}
                onChange={this.handleChange}
                value = {this.state.isCheked}
                color="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        );
    }*/

}

export default MySwitch;