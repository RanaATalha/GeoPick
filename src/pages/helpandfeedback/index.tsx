import * as React from 'react';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import './styles.scss';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import TextField from '../../components/Inputs/TextField';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Typography } from '@material-ui/core';

export interface HelpandFeedbackProps {}

export default function HelpandFeedback() {
    return (
        <div className="background">
            <div className="button" style={{ float: 'left' }}>
                <ArrowBackRoundedIcon />
            </div>
            <div className="image">
                <img src={WhiteLogo} alt="GeoPicK Logo" className="WhiteLogo" />
            </div>
            <div style={{ color: '#fafafa' }}>
                <Card background="#202020" title="Help & FeedBack" split={2}>
                    <Typography variant="body1">
                        <p style={{ fontSize: '20px' }}>Hi there👋,</p>
                        <p> This is our first phone based web application. We would love to hear your Feedback.</p>
                        <p>
                            {' '}
                            You can either <a href="mailto:geopick2021@gmail.com">mail</a> the developer team or send
                            any message via the feedback form.
                        </p>
                        <p>Thanks❤,</p>
                        <p>
                            The Geo<span style={{ color: '#f56920' }}>Pic</span>K Dev Team
                        </p>
                    </Typography>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Feedback"
                        variant="outlined"
                        placeholder="Write something..."
                        multiline
                        rowsMax={5}
                    />
                    <br></br>
                    <RegularBtn type="submit" colorType="orange" style={{ width: 'auto', borderRadius: '20px' }}>
                        Send Feedback
                    </RegularBtn>
                </Card>
            </div>
            <br />
        </div>
    );
}
