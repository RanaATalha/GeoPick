import React, { useState } from 'react';
// import SwipeableViews from 'react-swipeable-views';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileOverview from '../../components/Display/profileOverview';
import firebase from 'firebase';

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: any;
    value: any;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: any) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        // width: auto,
    },
}));

export default function FullWidthTabs() {
    const [users, setUsers] = useState(Array());
    const [posts, setPosts] = useState(Array());
    const [userOn, setUserOn] = useState(false);
    const [postOn, setPostOn] = useState(false);
    const [query, setQuery] = useState('');

    const toggleUser = () => {
        setUserOn(true);
        setPostOn(false);
        firebase
            .firestore()
            .collection('users')
            .where('User_name', '>=', query)
            .limit(5)
            .get()
            .then((snapshot) => {
                let users = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                });
                setUsers(users);
                setPosts([]);
            });
    };

    const togglePost = () => {
        setUserOn(false);
        setPostOn(true);
        firebase
            .firestore()
            .collection('Posts')
            .where('tags', 'array-contains', query)
            .limit(5)
            .get()
            .then((snapshot) => {
                let posts = snapshot.docs.map((doc) => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data };
                });
                setPosts(posts);
                setUsers([]);
            });
    };

    const fetchResults = (search: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(search.target.value.toLowerCase());
        if (userOn) {
            toggleUser();
        }
        if (postOn) {
            togglePost();
        }
    };
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index: number) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="relative" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Followers" {...a11yProps(0)} />
                    <Tab label="Following" {...a11yProps(1)} />
                    {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
                </Tabs>
            </AppBar>
            {/* <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            > */}
            <TabPanel value={value} index={0} dir={theme.direction}>
                {users.length > 0 &&
                    users.map((data) => {
                        // console.log(data);
                        <ProfileOverview
                            key={data.id}
                            uid={data.id}
                            User_name={data.User_name}
                            Avatar={data.Avatar}
                            Size="small"
                            User={data}
                            followers
                        />;
                    })}
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
            </TabPanel>
            {/* </SwipeableViews> */}
        </div>
    );
}
