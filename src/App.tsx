import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './pages/welcome screen';
import SignInScreen from './pages/sign-in screen/SignInForm';
import SignUpScreen from './pages/sign-up screen/SignupForm';
import CreateProfileScreen from './pages/create-profile-screen';
import SetNewPasswordScreen from './pages/sign-in screen/setnewpass';
import ReSetNewPasswordScreen from './pages/sign-in screen/resetpass';
import { Terms } from './pages/terms/index';
import { HomeScreen } from './pages/home-screen/home';
import PostViewScreen from './pages/post-view';
import HelpandFeedback from './pages/helpandfeedback';
import SettingsScreen from './pages/settings-screen/SettingsMenu';
import ProfilePage from './pages/profile-screen/ProfilePage';
import { UploadImage } from './pages/upload-image/index';
function App(): JSX.Element {
    return (
        <div className="App">
            <Router>
                <Nav />
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
                        <SetNewPasswordScreen />
                    </Route>
                    <Route exact path="/ReSet-password">
                        <ReSetNewPasswordScreen />
                    </Route>
                    <Route exact path="/home">
                        <HomeScreen />
                    </Route>
                    <Route exact path="/helpnfeedback">
                        <HelpandFeedback />
                    </Route>
                    <Route exact path="/terms">
                        <Terms />
                    </Route>
                    <Route exact path="/settings">
                        <SettingsScreen />
                    </Route>
                    <Route path="/post/:catId" component={PostViewScreen}></Route>
                    <Route path="/ProfilePage">
                        <ProfilePage />
                    </Route>
                    <Route exact path="/upload-image">
                        <UploadImage />
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
                        <Link to="/ReSet-password">reset password </Link>
                    </li>
                    <li>
                        <Link to="/home">Home Screen</Link>
                    </li>
                    <li>
                        <Link to="/post">Post View Screen</Link>
                    </li>
                    <li>
                        <Link to="/terms">Terms and Conditions</Link>
                    </li>
                    <li>
                        <Link to="/settings">Settings</Link>
                    </li>
                    <li>
                        <Link to="/helpnfeedback">Help and Feedback</Link>
                    </li>
                    <li>
                        <Link to="/ProfilePage">Profile Page</Link>
                    </li>
                    <li>
                        <Link to="/upload-image">Upload Image</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default App;
