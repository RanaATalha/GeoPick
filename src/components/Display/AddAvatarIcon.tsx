
import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddAvatar from './AddAvatar.png';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const SmallAvatar = withStyles((theme) => ({
    root: {
      width: 22,
      height: 22,
      border: `2px solid ${theme.palette.background.paper}`,
    },
}))(Avatar);

export default function UploadButton(props: any) {
  const classes = useStyles();
  // const imageInputs = {imgUrl: ''}
  // const [imageAsFile, setImageAsFile] = useState<File | null>(null)
  // const [imageAsUrl, setImageAsUrl] = useState(imageInputs) 
  
  // console.log(imageAsFile)

  
  return (
    <div className={classes.root}>
      {/* <form onSubmit = {submitInfo}> */}
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={props.onChange}/>
      <label htmlFor="icon-button-file">
      
      <IconButton color="primary" aria-label="upload picture" component="span" >
      <SmallAvatar alt="Add Avatar Icon" src={AddAvatar} />
      </IconButton>
      </label>
      {/* </form> */}
    </div>
  );
}