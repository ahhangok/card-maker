  import firebase from 'firebase';
  
  const firebaseConfig = {
    apiKey: "AIzaSyAr906Nr3PETiYPCCAQw-NK41PzlAHf5no",
    authDomain: "business-card-maker-ad1f9.firebaseapp.com",
    projectId: "business-card-maker-ad1f9",
    databaseURL: "https://business-card-maker-ad1f9-default-rtdb.firebaseio.com/",
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  export default firebaseApp;

