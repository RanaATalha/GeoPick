import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import WelcomeScreen from './pages/welcome screen';
import SignInScreen from './pages/sign-in screen';
import SignUpScreen from './pages/sign-up screen';
import BottomNavigation from './components/NavBar/navbar';
import BackwardBtn from './components/Buttons/BackwardBtn';
import TextField from './components/Inputs/TextField';
import Card from './components/Layouts/Card';
import Checkbox from './components/Inputs/Checkbox';
import { RegularBtn } from './components/Buttons/RegularBtn';
import CreateProfileScreen from './pages/create-profile-screen';
import SetNewPasswordScreen from './pages/set-new-password';
import ReSetNewPasswordScreen from './pages/reset-password';

function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Nav />
                <div style={{ background: 'black' }}>
                    <RegularBtn colorType="auto">Hello</RegularBtn>
                </div>
                <div>
                    <BottomNavigation />
                </div>
                <Switch>
                    <Route exact path="/welcome">
                        <WelcomeScreen />
                    </Route>
                    <Route exact path="/sign-in">
                        <SignInScreen />
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUpScreen />
                    </Route>
                    <Route exact path="/create-profile">
                        <CreateProfileScreen />
                    </Route>
                    <Route exact path="/Set-password">
                        <SetNewPasswordScreen/>
                    </Route> 
                    <Route exact path="/ReSet-password">
                        <ReSetNewPasswordScreen/>
                    </Route>                                        
                </Switch>
            </Router>
        </div>
    );
}

function Nav() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/sign-in">Sign-In</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign-Up</Link>
                    </li>
                    <li>
                        <Link to="/create-profile">Create Profile</Link>
                    </li>
                    <li>
                        <Link to="/Set-password">Set new password</Link>
                    </li>
                    <li>
                        <Link to="/ReSet-password">reset password </Link></li>  
                                  </ul>
            </nav>
        </div>
    );
}

export default App;
