/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import 'firebase/auth';
import 'firebase/database';
import firebase from 'firebase';
import cred from '../constants/firebase-creds.json';
import 'dot-env';

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

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.database();
export default auth;
