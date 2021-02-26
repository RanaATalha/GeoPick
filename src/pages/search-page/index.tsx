import React, { useState } from 'react'
import WhiteLogo from '../welcome screen/WhiteLogo.svg';
import Card from '../../components/Layouts/Card';
import { RegularBtn } from '../../components/Buttons/RegularBtn';
import TextField from '../../components/Inputs/TextField';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import { Typography } from '@material-ui/core';
import firebase from 'firebase';
import ProfileOverview from '../../components/Display/profileOverview';


export interface SearchProps {}

export default function SearchScreen() {
    const [users, setUsers] = useState(Array())

    const fetchUsers = (search: React.ChangeEvent<HTMLInputElement>) => {
        firebase.firestore()
            .collection('users')
            .where('User_name', '>=', search.target.value)
            .limit(5)
            .get()
            .then((snapshot) => {
                let users = snapshot.docs.map(doc => {
                    const data = doc.data();
                    const id = doc.id;
                    return { id, ...data }
                });
                setUsers(users);
            })
    }

    return (
        <div className="background">
            <div className="button" style={{ float: 'left' }}>
                <ArrowBackRoundedIcon />
            </div>
            <div className="image">
                <img src={WhiteLogo} alt="GeoPicK Logo" className="WhiteLogo" />
            </div>
            <div id="titleDiv">
                <Card background="#202020" title="Search" split={2}>
                    <TextField
                        id="standard-multiline-flexible"
                        label="Search"
                        variant="outlined"
                        placeholder="Search here..."
                        onChange = {fetchUsers}
                    />
                    <br></br>
                    {users.length>0 && users.map((data) => {
                        console.log(data);
                      return (
                          <div>
                            <ProfileOverview 
                                key = {data.id}
                                uid = {data.id} 
                                User_name = {data.User_name} 
                                Avatar = {data.Avatar} 
                                Size = "small"
                                User = {data}
                            />
                            <br/><br/>
                          </div>
                      );
                      // console.log(data.User_name);
                  })}
                  
                </Card>
            </div>
            <br />
        </div>
    );
}
