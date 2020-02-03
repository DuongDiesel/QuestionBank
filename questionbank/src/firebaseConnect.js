// Your web app's Firebase configuration
import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAcMzoaN3RsA58KV7Ve102Fuepf2Gn82FI",
    authDomain: "dethi-88e8c.firebaseapp.com",
    databaseURL: "https://dethi-88e8c.firebaseio.com",
    projectId: "dethi-88e8c",
    storageBucket: "dethi-88e8c.appspot.com",
    messagingSenderId: "463817774849",
    appId: "1:463817774849:web:f0e5be4b203e4017bbed00",
    measurementId: "G-HRH865G8JJ"
  };

 firebase.initializeApp(firebaseConfig);

  
 export const firebaseQuestionBank = firebase.database().ref("question")
  
 