import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import GuessTheLocationButton from '../Display/guess-the-location.svg';
import { Fab, IconButton } from '@material-ui/core';
import CameraAltRoundedIcon from '@material-ui/icons/CameraAltRounded';

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

export default function UploadIcon(props: any) {
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
                        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" onChange={props.onChange}/>
                        <label htmlFor="icon-button-file">
                            <IconButton className={classes.options} color="inherit" aria-label="upload picture" component="span" > Select from Gallery </IconButton>
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
