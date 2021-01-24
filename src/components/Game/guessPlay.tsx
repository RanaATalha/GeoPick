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

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            transform: 'translateZ(0px)',
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
        },
    }),
);

export default function GuessTheLocationPlay({ city1, city2, city3 }: { city1: string; city2: string; city3: string }) {
    const classes = useStyles();
    const [direction, setDirection] = React.useState<SpeedDialProps['direction']>('up');
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const actions = [
        { icon: <p>{city1}</p>, name: '' },
        { icon: <p>{city2}</p>, name: '' },
        { icon: <p>{city3}</p>, name: '' },
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
            style={{ transform: 'translate(15em, -16em)', height: 'fit-content' }}
            ariaLabel="SpeedDial example"
            // className={classes.speedDial}
            hidden={hidden}
            icon={
                <IconButton style={{ position: 'sticky' }}>
                    <img
                        src={GuessTheLocationButton}
                        alt="Guess The Location"
                        style={{ backfaceVisibility: 'hidden' }}
                    ></img>
                </IconButton>
            }
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
