import * as React from 'react';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import { Grid, Typography, Box } from '@material-ui/core';
import Card from '../../components/Layouts/Card';
import { Avatar, IconButton, Toolbar } from '@material-ui/core';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch, { SwitchClassKey, SwitchProps } from '@material-ui/core/Switch';
export interface NotificationProps {}

const PurpleSwitch = withStyles({

    
    switchBase: {
      color: purple[300],
      '&$checked': {
        color: purple[500],
      },
      '&$checked + $track': {
        backgroundColor: purple[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

const WhiteTypography = withStyles({
    root: {
        color: '#FAFAFA',
        textAlign: 'left',
    },
})(Typography);

export default function Notification() {

    const [state, setState] = React.useState({
        checkedA: true
      });
      

      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };


    return (
        <div style={{ background: '#1b1b1b' }} className="bgg">
                <Toolbar>
                    <img src={WhiteLogo} alt="GeoPicK" className="WhiteLogo" />
                </Toolbar>
                <div style={{ color: '#fafafa' }}>
                    <Card  background="#202020" title="Notification Setting" split={1}>
                        <div style={{ color: 'black' }}>
                            {/* <Grid container spacing={4} direction="row" alignItems="center" justify="center"> */}
                            <FormGroup>
                            <WhiteTypography>Push notification </WhiteTypography>
                            
                            <FormControlLabel
                                control={<PurpleSwitch checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                                label=""
                            />
                            </FormGroup>
                            {/* </Grid> */}
                        </div>
                    </Card>
                </div>
                <br />
            </div>
    );
}
