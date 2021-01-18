import * as React from 'react';
import { Component } from 'react';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import './homesStyles.scss';
import SinglePost from './singlePost';
import Picture from './welcome-pg.png';
export interface HomeScreenProps {}
export interface HomeScreenState {}

export class HomeScreen extends Component<HomeScreenProps, HomeScreenState> {
    // state = { :  }
    render() {
        return (
            <div style={{ background: '#1b1b1b' }}>
                <img src={WhiteLogo} alt="GeoPicK" className="WhiteLogo"></img>
                <br></br>
                <SinglePost username="GeoPicker" date="13-01-2021" postPic={Picture} />
                <SinglePost username="GeoPicker" date="13-01-2021" postPic={Picture} />
            </div>
        );
    }
}
