/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import app from 'firebase/app';
import 'firebase/auth';
import fb from 'firebase';
import cred from '../constants/firebase-creds.json';
import 'dot-env';
import 'firebase/storage';

const prodConfig = {
    apiKey: cred.REACT_APP_API_KEY,
    authDomain: cred.REACT_APP_AUTH_DOMAIN,
    databaseURL: cred.REACT_APP_DATABASE_URL,
    projectId: cred.REACT_APP_PROJECT_ID,
    storageBucket: cred.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: cred.REACT_APP_MESSAGING_SENDER_ID,
};

const devConfig = {
    apiKey: cred.REACT_APP_DEV_API_KEY,
    authDomain: cred.REACT_APP_DEV_AUTH_DOMAIN,
    databaseURL: cred.REACT_APP_DEV_DATABASE_URL,
    projectId: cred.REACT_APP_DEV_PROJECT_ID,
    storageBucket: cred.REACT_APP_DEV_STORAGE_BUCKET,
    messagingSenderId: cred.REACT_APP_DEV_MESSAGING_SENDER_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

class firebase {
    auth: app.auth.Auth; // variable assigned for auth
    static auth: app.auth.Auth;
    providerGoogle: app.auth.GoogleAuthProvider | undefined;

    constructor() {
        app.initializeApp(config);
        this.auth = app.auth(); // auth api, use this.auth to use it
    }

    /**============================================
     **               AUTH API
     *=============================================**/

    // signup with email and pass
    doCreateUserWithEmailAndPassword = (email: string, password: string) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email: string, password: string) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    getGoogleProvider = () => {
        this.providerGoogle = new app.auth.GoogleAuthProvider();
        return this.providerGoogle;
    };

    getApp = () => {
        return app;
    }

    getStorage = () => {
        return app.storage();
    }
}
// app.initializeApp(config);

export type User = fb.User;
export default firebase;
