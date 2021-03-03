import React from 'react';
import { Menu, MenuItem, MenuButton, MenuHeader } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { Button, Typography } from '@material-ui/core';
import GTLicon from '../Inputs/The pin.svg';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, Theme } from '@material-ui/core/styles';

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function GTLmenu(props: any) {
    const [openCorrect, setOpenCorrect] = React.useState(false);
    const [openWrong, setOpenWrong] = React.useState(false);

    const handleClickRightAns = () => {
        setOpenCorrect(true);
    };

    const handleCloseRightAns = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenCorrect(false);
    };

    const handleClickWrongAns = () => {
        setOpenWrong(true);
    };

    const handleCloseWrongAns = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenWrong(false);
    };

    const generateOptions = () => {
        // const P = props.location;

        // const R = 100; // meters

        // const randomPoint = randomLocation.randomCirclePoint(P, R);

        // console.log(randomPoint);

    }
    return (
        <>
            <Menu
                styles={{
                    background: '#1b1b1b',
                    color: '#fafafa',
                    width: '80%',
                    borderRadius: '20px',
                    border: '2px solid #F56920',
                }}
                menuButton={
                    <Button
                        style={{
                            padding: '5px 20px 5px 20px',
                            // position: 'static',
                            float: 'right',
                            // right: '200px',
                            marginLeft: 'auto',
                            marginRight: '10px',
                            background: '#202020',
                            color: '#F56920',
                            borderRadius: '20px',
                            fontSize: '10px',
                            width: '160px',
                        }}
                        // onClick={this.GTLexpanded} ////////BUGGY LINE: do not uncomment until debugged/////////
                        variant="contained"
                        endIcon={<img src={GTLicon} alt="GeoPin"></img>}
                    >
                        <Typography variant="caption" style={{ fontSize: '9px' }}>
                            Guess The Location
                        </Typography>
                    </Button>
                }
                direction="top"
                overflow="hidden"
            >
                <MenuHeader color="primary">
                    <Typography variant="caption" style={{ color: '#f56920' }}>
                        Pick a place
                    </Typography>
                </MenuHeader>
                <MenuItem styles={{ background: '#1b1b1b', color: '#fafafa', borderRadius: '20px' }}>
                    <Button
                        style={{
                            // marginLeft: '3px',
                            // marginRight: '3px',
                            textAlign: 'center',
                            fontSize: '10px',
                            marginBottom: '5px',
                            background: '#fafafa',
                            width: '90%',
                            borderRadius: '20px',
                            margin: 'auto',
                        }}
                        onClick={handleClickRightAns}
                    >
                        Dubai
                    </Button>
                </MenuItem>
                <MenuItem styles={{ background: '#1b1b1b', color: '#fafafa', borderRadius: '20px' }}>
                    <Button
                        style={{
                            // marginLeft: '3px',
                            // marginRight: '3px',
                            textAlign: 'center',
                            fontSize: '10px',
                            marginBottom: '5px',
                            background: '#fafafa',
                            width: '90%',
                            borderRadius: '20px',
                            margin: 'auto',
                        }}
                        onClick={handleClickWrongAns}
                    >
                        Dubai
                    </Button>
                </MenuItem>
                <MenuItem styles={{ background: '#1b1b1b', color: '#fafafa', borderRadius: '20px' }}>
                    <Button
                        style={{
                            // marginLeft: '3px',
                            // marginRight: '3px',
                            textAlign: 'center',
                            fontSize: '10px',
                            marginBottom: '5px',
                            background: '#fafafa',
                            width: '90%',
                            borderRadius: '20px',
                            margin: 'auto',
                        }}
                    >
                        Dubai
                    </Button>
                </MenuItem>
            </Menu>
            <Snackbar
                open={openCorrect}
                autoHideDuration={6000}
                onClose={handleCloseRightAns}
                style={{ marginBottom: '50px' }}
            >
                <Alert onClose={handleCloseRightAns} severity="success">
                    Woohoo! You guessed the right location!👏
                </Alert>
            </Snackbar>
            {/* For the right answer */}

            <Snackbar
                open={openWrong}
                autoHideDuration={6000}
                onClose={handleCloseWrongAns}
                style={{ marginBottom: '50px' }}
            >
                <Alert onClose={handleCloseWrongAns} severity="error">
                    sorry, you guessed it wrong!😞 Better luck next time👍
                </Alert>
            </Snackbar>
        </>
    );
}
