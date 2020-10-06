import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: 'AIzaSyDNDLaJY_j7ZdYpQIhNWZ-xIsnneb0wd7g',
  databaseURL: 'https://secondhandy-e3052.firebaseio.com/',
  projectId: 'secondhandy-e3052',
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.database();
const auth = firebase.auth();

// collection references

// export utils/refs
export default {
  db,
  auth,
};
