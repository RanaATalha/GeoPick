import * as React from 'react';
import './styles.scss';
import UsernameField from '../../components/Inputs/UsernameField';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';
import { Grid, Typography } from '@material-ui/core';
import BadgeAvatar from '../../components/Display/AddAvatarBadge';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import sampleavatar from './sample-avatar.png';
import {storage} from '../../firebase/firebase';
import firebase from 'firebase';
import OccupationSelect from '../../components/Inputs/occupation';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

export interface CreateProfileProps {}

export default class CreateProfileScreen extends React.Component<CreateProfileProps> {

    state = {
        img: {},
        email: "",
        username: "",
        occupation: "",
        imgurl : sampleavatar,
    }

    changeAvatar = async (event:React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files && event.target.files[0]){
            const file = await event.target.files[0];
            this.setState({img: file})
            console.log(this.state.img);

            const uploadRef = storage.ref(`/Images/User1/${file.name}`).put(file).then(data => {
                data.ref.getDownloadURL().then(url => {
                    this.setState({imgurl: url});
                    firebase
                    .firestore()
                    .collection('users/').doc('User1/')
                    .update({
                        Avatar: url,
                    })
                });
            });;
        }
    }

    submitInfo = () => {

        firebase.firestore()
        .collection('users/').doc('User1/')
        .update({
            Avatar: this.state.imgurl,
            Email: this.state.email,
            User_name: this.state.username,
            Occupation: this.state.occupation
        })
    }
    
    handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({username: event.target.value});
    }
    public render(): JSX.Element {
        return (
            <html>
                <body>
                    <div className="Create-Profile-Page">
                        <Card title="Create Profile" split={1}>
                            <Grid container spacing={4} direction="row" alignItems="center" justify="center">
                                <Grid item>
                                    <BadgeAvatar src={this.state.imgurl} onChange = {this.changeAvatar} />
                                </Grid>
                                <CreateProfileForm />
                            </Grid>
                        </Card>
                    </div>
                </body>
            </html>
        );
    }
}


const CreateProfileFields = ({ register, errors }: { register: any; errors: any }) => {
    console.log(errors);
    return (
        <Grid item container spacing={3} direction="row" alignItems="center" justify="center">
            <Grid item style={{ width: '100%' }}>
                <TextField
                    name="username"
                    id="username"
                    label="username"
                    type="username"
                    inputRef={register({
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9_]{3,8}$/i,
                            message: 'invalid username',
                        },
                    })}
                    error={errors.username ? true : false}
                />
            </Grid>
            <Grid item style={{ width: '100%' }}>
                <OccupationSelect register={register(register)}/>
            </Grid>
        </Grid>
    );
};

const CreateProfileForm = () => {
    const { handleSubmit, errors, register } = useForm();
    const { push } = useHistory();
    const onSubmit = (data: any) => {
        console.log(data);
        push('/home');
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CreateProfileFields register={register} errors={errors} />
                <Grid item container spacing={3}>
                    <Grid item xs={10} alignContent="center" alignItems="center" style={{ paddingTop: '20px', verticalAlign: 'true' }}>
                        <Typography align="left" style={{ fontSize: '12px', color: '1B1B1E' }}>
                            *Other users will be able to view your username and display picture as
                            set above
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} alignItems="center" justify="center" style={{ textAlign: 'center' }}>
                    <RegularBtn type="submit" colorType="white" style={{ width: '50%', borderRadius: '15px' }}>
                        Complete Registration
                    </RegularBtn>
                </Grid>
            </form>
        </>
    );
};
