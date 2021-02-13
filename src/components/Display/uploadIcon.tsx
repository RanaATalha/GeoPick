import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import GuessTheLocationButton from '../Display/guess-the-location.svg';
import { Fab, IconButton } from '@material-ui/core';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';
import { auth } from '../../firebase';
import Compress from 'react-image-file-resizer';
import { storage } from '../../firebase/firebase';
import firebase from 'firebase';
import UploadPic from './uploadPic';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // transform: 'translateZ(0px)',
            flexGrow: 1,
            backgroundColor: 'transparent',
        },
        speedDial: {
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            '&.MuiFab-primary': {
                backgroundColor: 'transparent',
            },
        },
        options: {
            width: '80px',
            height: '40px',
            textSizeAdjust: 'auto',
            fontSize: '0.7em',
            borderRadius: '0%',
        },
        fabButton: {
        position: 'absolute',
        zIndex: 1,
        left: 0,
        right: 0,
        margin: '0 auto',
        transform: 'translate(0em, -6em)',

        },
         input: {
        display: 'none',
    },
    }),
);

export default function UploadIcon() {
    const classes = useStyles();
    const [direction] = React.useState<SpeedDialProps['direction']>('up');
    const [open, setOpen] = React.useState(false);
    const [hidden] = React.useState(false);

    const actions = [
        { icon: <p>Select From Gallery</p>, name: 'gallery' },
        { icon: <p>Take a photo</p>, name: 'camera' },
    ];

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

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
        //   <div className={classes.exampleWrapper}>
        <SpeedDial
            className={classes.fabButton}
            ariaLabel="SpeedDial example"
            // className={classes.speedDial}
            hidden={hidden}
            icon={
                <Fab color="secondary" aria-label="add" >
                    <CameraAltRoundedIcon />
                </Fab>
            }
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={direction}
        >
            <SpeedDialAction
                key="gallery"
                className={classes.options}
                icon={<div>
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
                        <label htmlFor="icon-button-file">
                            <IconButton className={classes.options} color="inherit" aria-label="upload picture" component="span"> Select from Gallery </IconButton>
                        </label>
                        </div>}
                tooltipTitle="gallery"
                onClick={handleClose}
            />
            <SpeedDialAction
                key="camera"
                className={classes.options}
                icon={<p> Take Photo </p>}
                tooltipTitle="camera"
                onClick={handleClose}
            />
        </SpeedDial>
    );
}
