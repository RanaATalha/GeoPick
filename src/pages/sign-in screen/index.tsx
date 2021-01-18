import * as React from 'react';
import PasswordField from '../../components/Inputs/PasswordField';
import TextField from '../../components/Inputs/TextField';
import Card from '../../components/Layouts/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import { Link } from 'react-router-dom';
import './styles.scss';
import { auth } from '../../firebase';
import { useForm } from 'react-hook-form';
export interface SignInProps {}

export default class SignInScreen extends React.Component<SignInProps> {
    public render(): JSX.Element {
        /* const Signin = ()=> {
            const email=document.querySelector("#Email")?.nodeValue;
            const password=document.querySelector("#Password")?.nodeValue;
            auth.doSignInWithEmailAndPassword(email,password).then((u)=>{
                console.log("sucessfully logged");
                
            }).catch((err)=>{
                console.log("Error "+ err.toString);
            })
        };*/
        
        return (
            <div>
                <div className="bg">
                    Hello
                </div>
            </div>
        );
            };
    }

