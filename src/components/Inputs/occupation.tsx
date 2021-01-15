import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
  root: {
borderRadius: 20,
    position: 'relative',
    backgroundColor: 'white',
    borderColor: 'white',
    fontSize: 14,
    width: '100%',
    // transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
    //   borderRadius: 20,
    //   borderColor: '#80bdff',
    //   boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
    },
}));

export default function OccupationSelect() {
  const classes = useStyles();
  const [occ, setOcc] = React.useState('');
  const handleChange = (event: any) => {
    setOcc(event.target.value);
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.root}>
        <InputLabel id="demo-simple-select-outlined-label">Occupation (Optional)</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={occ}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={"Historian"}>Historian</MenuItem>
          <MenuItem value={"Student"}>Student</MenuItem>
          <MenuItem value={"Teacher"}>Teacher</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}