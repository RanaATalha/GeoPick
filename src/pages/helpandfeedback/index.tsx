import * as React from 'react';
import WhiteLogo from './WhiteLogo.svg';
import './styles.scss';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import TextField from '../../components/Inputs/TextField';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';

export interface HelpandFeedbackProps {}

export default function HelpandFeedback() {
    return (
        <div className="background">
            <div className="button" style={{ float: 'left' }}>
                <ArrowBackRoundedIcon />
            </div>

            <div className="image">
                <img src={WhiteLogo} alt="GeoPicK Logo" />
            </div>

            <Card background="black" title="Help & FeedBack" split={2}>
                <p>Hi there,</p>
                <p> This is our first phone based web application. We would love to hear your Feedback.</p>
                <p> You can either mail the developer team or send any message via the feedback form.</p>
                <p>Thanks,</p>
                <p>The GeoPick Dev Team</p>

                <TextField
                    id="standard-multiline-flexible"
                    label="Feedback"
                    variant="outlined"
                    placeholder="Write something..."
                    multiline
                    rowsMax={5}
                />
            </Card>

            <RegularBtn type="submit" colorType="orange" style={{ width: '40%', borderRadius: '15px' }}>
                Send Feedback
            </RegularBtn>
            <br />
        </div>
    );
}
