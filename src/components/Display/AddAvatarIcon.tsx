import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddAvatar from './AddAvatar.png';
import Avatar from '@material-ui/core/Avatar';
import {storage} from '../../firebase/firebase'

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

export default function UploadButton() {
  const classes = useStyles();
  const imageInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState<File | null>(null)
  const [imageAsUrl, setImageAsUrl] = useState(imageInputs) 
  
  console.log(imageAsFile)

  
  const handleImageAsFile = (e:React.ChangeEvent<HTMLInputElement>) =>{

    
    if(e.target.files)
    {
      setImageAsFile(e.target.files[0])
      const uploadRef = storage.ref(`/Images/User1/${e.target.files[0].name}`).put(e.target.files[0])
      uploadRef.on("state_changed", console.log, console.error, () => {
        storage
          .ref("images")
          .getDownloadURL()
          .then((url) => {
            setImageAsFile(null);
            setImageAsUrl(url);
          });
      });
    }
    
    console.log(e.target.files)
    if(imageAsFile === null ) {
      return console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
    }

      
  }

  // const handleFireBaseUpload = (e:React.FormEvent<HTMLSpanElement>) => {
  //   e.preventDefault()
  //   console.log(imageAsFile)
  //   if(imageAsFile === null ) {
  //     return console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
  //   }

  //   const uploadRef = storage.ref('/images').put(imageAsFile)
  //   uploadRef.on("state_changed", console.log, console.error, () => {
  //     storage
  //       .ref("images")
  //       .getDownloadURL()
  //       .then((url) => {
  //         setImageAsFile(null);
  //         setImageAsUrl(url);
  //       });
  //   });
  // }

  return (
    <div className={classes.root}>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={handleImageAsFile} />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
        <SmallAvatar alt="Add Avatar Icon" src={AddAvatar} />
        </IconButton>
      </label>
    </div>
  );
}