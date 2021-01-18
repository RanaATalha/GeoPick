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
import { useForm, Controller } from "react-hook-form";
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';
export interface CreateProfileProps {}

export default class CreateProfileScreen extends React.Component<CreateProfileProps> {

    state = {
        img: {},
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
                                <CreateProfileForm img={this.state.imgurl}/>
                            </Grid>
                        </Card>
                    </div>
                </body>
            </html>
        );
    }
}


const CreateProfileFields = ({ register, errors, control}: { register: any; errors: any; control: any }) => {
    
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
                <OccupationSelect control={control}/>
            </Grid>
        </Grid>
    );
};

const CreateProfileForm = ({img }: {img: string;}) => {
    const { handleSubmit, errors, register, control } = useForm();
    const { push } = useHistory();
    const onSubmit = (data: any) => {
        const user = auth.checkUserLoggedIn()
        if(user != undefined){
            firebase.firestore()
            .collection('users/').doc(user.uid)
            .set({
                Avatar: img,
                Bio: "",
                GamePoint: 0,
                Occupation: data.Occupation,
                User_name: data.username,
            }).catch((err)=>{
                console.log("Error "+ err);
                alert(err)
            });
            push('/home');
        }
        
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CreateProfileFields register={register} errors={errors} control={control} />
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