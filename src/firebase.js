import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBXsfqls4q8Pkg3UY04l03KmG_Iu9IhOcc',
  authDomain: 'idobatakaigi-with-ham.firebaseapp.com',
  databaseURL: 'https://idobatakaigi-with-ham.firebaseio.com',
  projectId: 'idobatakaigi-with-ham',
  storageBucket: 'idobatakaigi-with-ham.appspot.com',
  messagingSenderId: '979582252050',
  appId: '1:979582252050:web:84d437a2c2a7c6706ed4cb',
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

export const pushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
