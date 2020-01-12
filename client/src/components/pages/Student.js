import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import MySwitch from './MySwitch';
import Divider from '@material-ui/core/Divider';



class Student extends React.Component{


  render(){
    return (
        <div>
        <ListItem>
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText  primary={this.props.name}/>
          <ListItemSecondaryAction>
              <MySwitch></MySwitch>
          </ListItemSecondaryAction>
        </ListItem>
        <Divider />
        </div>
    );
  }
}

export default Student;