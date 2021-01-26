import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Switch from '@material-ui/core/Switch';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import SaveIcon from '@material-ui/icons/Save';
import PrintIcon from '@material-ui/icons/Print';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteIcon from '@material-ui/icons/Favorite';
import GuessTheLocationButton from '../Display/guess-the-location.svg';
import { Icon, IconButton } from '@material-ui/core';
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
    const [direction, setDirection] = React.useState<SpeedDialProps['direction']>('right');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

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

    const handleDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDirection((event.target as HTMLInputElement).value as SpeedDialProps['direction']);
    };

    const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setHidden(event.target.checked);
    };

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
            hidden={hidden}
            icon={<ShareIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={direction}
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
