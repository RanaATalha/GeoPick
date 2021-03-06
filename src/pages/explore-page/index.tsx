import React, { useState, useLayoutEffect, useRef, useEffect } from 'react'
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import TextField from '../../components/Inputs/TextField';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Box } from '@material-ui/core';
import firebase from 'firebase';
import ProfileOverview from '../../components/Display/profileOverview';
import Button from '@material-ui/core/Button';
import SinglePostNew from '../../components/Display/singlePostNew';
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';



export interface SearchProps {}

export default function ExploreScreen() {
    const [posts, setPosts] = useState<any[]>([]);
    const firstUpdate = useRef(true);
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "100%",
        height: "100vh",
        zoom: 5
      });

    useLayoutEffect(() => {
        if (firstUpdate.current) {
          firstUpdate.current = false;
          return;
        }
    
        // console.log("componentDidUpdateFunction");
        firebase
            .firestore()
            .collection('Posts')
            .onSnapshot((snapshot: any) => {
                setPosts(snapshot.docs.map((doc: any) => ({ id: doc.id, post: doc.data() })));
            });
        // console.log(posts)
      });

    // useEffect(() => {
        
    // });
    return (
        <div className="background">
            <div className="button" style={{ float: 'left' }}>
                <ArrowBackRoundedIcon />
            </div>
            <div className="image">
                <img src={WhiteLogo} alt="GeoPicK Logo" className="WhiteLogo" />
            </div>
            <div id="titleDiv">
                <Card background="#202020" title="Explore" split={2}>
                <ReactMapGL
                    {...viewport}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/geopick2021/cklr56ufp069x18pss5neglc4"
                    onViewportChange={(viewport: any) => {
                    setViewport(viewport);
                    }}
                >
                    {posts.map(({id, post}) => (
                        <Marker
                            key={id}
                            latitude={post.coordinates.lat}
                            longitude={post.coordinates.lng}
                        >
                            <Link to={{ pathname: `/post/${id}`, state: post.uid}}>
                                <Avatar alt={post.user_name} src={post.Image} />
                            </Link>
                            
                        </Marker>
                    ))}

                </ReactMapGL>
                 
                  
                </Card>
            </div>
            <br />
        </div>
    );
}
