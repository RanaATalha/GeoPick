import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import ShareIcon from '@material-ui/icons/Share';
import {
    FacebookShareButton,
    TwitterShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    TelegramIcon,
    WhatsappIcon,
    EmailIcon,
} from 'react-share';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transform: 'translateZ(0px)',
            flexGrow: 1,
            backgroundColor: 'transparent',
        },
        speedDial: {
            '&.MuiFab-primary': {
                backgroundColor: 'transparent',
            },
            width: '40px',
            height: '40px',
        },
        options: {
            width: '0px',
            height: '0px',
            padding: '10px',
            backgroundColor: 'transparent',
        },
    }),
);

export default function SharePost({ sharedURL }: { sharedURL: string }) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const actions = [
        {
            icon: (
                <FacebookShareButton url={sharedURL}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
            ),
            name: 'Facebook',
        },
        {
            icon: (
                <TwitterShareButton url={sharedURL}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
            ),
            name: 'Twitter',
        },
        {
            icon: (
                <TelegramShareButton url={sharedURL}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
            ),
            name: 'Telegram',
        },
        {
            icon: (
                <WhatsappShareButton url={sharedURL}>
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
            ),
            name: 'WhatsApp',
        },
        {
            icon: (
                <EmailShareButton url={sharedURL}>
                    <EmailIcon size={32} round />
                </EmailShareButton>
            ),
            name: 'Email',
        },
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
            ariaLabel="SpeedDial example"
            className={classes.speedDial}
            icon={<ShareIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction='right'
        >
            {actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    className={classes.options}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={handleClose}
                />
            ))}
        </SpeedDial>
        //   </div>
    );
}
