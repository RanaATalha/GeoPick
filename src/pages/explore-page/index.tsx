import React, { useState } from 'react'
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


export interface SearchProps {}

export default function ExploreScreen() {
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: "35vw",
        height: "100vh",
        zoom: 10
      });
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

                </ReactMapGL>
                 
                  
                </Card>
            </div>
            <br />
        </div>
    );
}
