import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
apiKey: "AIzaSyAMHjI8ClsFZi7c8zzClz3iFbEgEVXsrtM",
  authDomain: "class-test-c955f.firebaseapp.com",
  projectId: "class-test-c955f",
  storageBucket: "class-test-c955f.appspot.com",
  messagingSenderId: "381642525187",
  appId: "1:381642525187:web:dc9c7749b6f27cb2029c36"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
