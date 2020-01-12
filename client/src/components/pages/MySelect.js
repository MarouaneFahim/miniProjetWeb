import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect( props) {
  const classes = useStyles();
  const [module, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  

  let ItemsList = [];
  let cmp = 0;
 
    ItemsList = props.content.map( (obj) => {
      ++cmp;
      return <MenuItem key={cmp} value={cmp}> {obj}</MenuItem>
    }) 
 


  return (
    
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name = {props.title}
          value={module}
          onChange={(e) => { handleChange(e);  props.handleSelect(e);  } }
        >

          {ItemsList}
        </Select>
      </FormControl>     
  );
}
