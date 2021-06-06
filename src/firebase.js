import  firebase from 'firebase';


var firebaseConfig = {
    apiKey: "AIzaSyAneT3uw_01VaEPnh4iwCyRoiHn-Gx_Qdw",
    authDomain: "react-crud-63a57.firebaseapp.com",
    databaseURL: "https://react-crud-63a57-default-rtdb.firebaseio.com",
    projectId: "react-crud-63a57",
    storageBucket: "react-crud-63a57.appspot.com",
    messagingSenderId: "204951582401",
    appId: "1:204951582401:web:49f10636cecfde31c14640"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();