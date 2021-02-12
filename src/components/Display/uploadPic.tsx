import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import { auth } from '../../firebase';
import Compress from 'react-image-file-resizer';
import { storage } from '../../firebase/firebase';
import firebase from 'firebase';
import { IconButton } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    large: {
        width: theme.spacing(24),
        height: theme.spacing(24),
    },
}));

export default function uploadPic(props: any) {
    const [img, setImg] = React.useState({});
    const [url, setUrl] = React.useState('');
    const upload = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files || !event.target.files[0]) return;
        const file = await event.target.files[0];
        // this.setState({ img: file });
        setImg(file);
        const user = auth.checkUserLoggedIn();

        if (!user) return;
        const image = new Image();
        let fr = new FileReader();

        fr.onload = async function () {
            if (fr !== null && typeof fr.result == 'string') {
                image.src = fr.result;
                console.log('in frload');
                console.log('frwidg', image.width);
                console.log('frhigg', image.height);
            }
        };
        fr.readAsDataURL(file);

        var width = 0;
        var height = 0;

        image.onload = function () {
            height = image.height;
            width = image.width;
        };

        setTimeout(() => {
            Compress.imageFileResizer(
                file,
                width,
                height,
                'JPEG',
                50,
                0,
                async (uri) => {
                    if (typeof uri === 'string') {
                        const urinew = uri.split('base64,')[1];
                        storage
                            .ref(`/Images/${user.uid}/Avatar/${file.name}`)
                            .putString(urinew, 'base64')
                            .then((data) => {
                                data.ref.getDownloadURL().then((url) => {
                                    setUrl(url);
                                    firebase.firestore().collection('users/').doc(`${user.uid}/`).update({
                                        Avatar: url,
                                    });
                                });
                            });
                    }
                },
                'base64',
            );
        }, 2500);
    };

    return (
        <IconButton color="secondary" aria-label="add" className={classes.fabButton} onClick={upload}>
            <CameraAltRoundedIcon  />
        </IconButton>
    );
}