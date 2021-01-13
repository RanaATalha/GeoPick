import React, {useState, useEffect} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AddAvatar from './AddAvatar.png';
import Avatar from '@material-ui/core/Avatar';
import firebase from '../../firebase';
// import { storage } from "../../firebase/firebase";


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
  const ipRef = React.useRef<HTMLElement>(null);
  const avatarInput = {url: ''};
  const [avatFile, setAvatFile] = useState<any>({});
  const [avatURL, setAvatURL] = useState("");

  const onButtonClick = () => {
      console.log("inside")
      // `current` points to the mounted file input element
      const ipRef2 = ipRef
      if(ipRef2 != null){
        const ipRef2 = ipRef;
        
      }
      ipRef.current?.click();  
  };
  // const handleAvatarUpload= (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   // const avat = avatFile!
  //   // const avatarName = avatFile?['name'];
  //   const fb = new firebase();
  //   const db = fb.getStorage();
  //   const avatRef = db.ref();

  //   if(avatFile){
  //     const uploadTask = storage.ref(`/Images/User1/${avatFile.name}`).put(avatFile);
  //      uploadTask.on(
  //       "state_changed",
  //       error => {
  //         console.log(error);
  //       },
  //       () => {
  //         storage
  //           .ref("Images")
  //           .child(avatFile.name)
  //           .getDownloadURL()
  //           .then(avatURL => {
  //             setAvatURL(avatURL);
  //           });
  //       }
  //     );
  //     }
    

  // }

  // const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const fb = new firebase();
  //   const db = fb.getApp().firestore();
  //   const storage = fb.getStorage().ref();

  //   const avatar = (event.target.files == null) ? {} : event.target.files[0];
    
  //   setAvatFile(avatar);
  //   console.log(avatFile);

  //   if(avatFile != {}){
  //     const uploadRef = storage.child(avatFile.name);
  //     await uploadRef.put(avatFile);
  //     setAvatURL(await uploadRef.getDownloadURL());
  //   }

  //   const email = event.target.email.value;
  //   if (!email || !avatURL) {
  //     return;
  //   }

  //   await db.collection("users").doc(email).set({
  //     email: email,
  //     avatar: avatURL,
  //   });
    
  // };

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const usersCollection = await db.collection("users").get();
  //     setUsers(
  //       usersCollection.docs.map((doc) => {
  //         return doc.data();
  //       })
  //     );
  //   };
  //   fetchUsers();
  // }, []);
  // onChange={handleChange}
  // onClick={()=>onButtonClick()}
  
  return (
    <div className={classes.root}>
      {/* <form onSubmit={handleAvatarUpload}> */}
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
      
      <IconButton color="primary" aria-label="upload picture" component="span" >
      <SmallAvatar alt="Add Avatar Icon" src={AddAvatar} />
      </IconButton>
      </label>
      {/* </form> */}
    </div>
  );
}