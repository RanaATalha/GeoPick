import React from 'react';
import Badge from '@material-ui/core/Badge';
import { makeStyles } from '@material-ui/core/styles';
import UploadButton from './AddAvatarIcon';
import Avatars from './Avatar';


// const StyledBadge = withStyles((theme) => ({
//     badge: {
//         backgroundColor: '#44b700',
//         color: '#44b700',
//         boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//         '&::after': {
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             width: '100%',
//             height: '100%',
//             borderRadius: '50%',
//             animation: '$ripple 1.2s infinite ease-in-out',
//             border: '1px solid currentColor',
//             content: '""',
//         },
//     },
//     '@keyframes ripple': {
//         '0%': {
//             transform: 'scale(.8)',
//             opacity: 1,
//         },
//         '100%': {
//             transform: 'scale(2.4)',
//             opacity: 0,
//         },
//     },
// }))(Badge);

// const SmallAvatar = withStyles((theme) => ({
//     root: {
//         width: 22,
//         height: 22,
//         border: `2px solid ${theme.palette.background.paper}`,
//     },
// }))(Avatar);

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// interface Image {
//     src: string
// }

export default function BadgeAvatar(props: any) {
    const classes = useStyles();

    // const [avat, setAvat] = useState({})
    // const [changeDetected, setChangeDetected] = useState(false);
    // const changeAvatar = (newAvat: File) => {
    //     setAvat(newAvat);
    //     console.log(avat);
    //     setChangeDetected(true);
    //     // props.newAvatar(avat);
    // }


    return (
        <div className={classes.root}>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<UploadButton onChange = {props.onChange} />}
            >
                <Avatars imgsrc={props.src}/>
            </Badge>
        </div>
    );
}

