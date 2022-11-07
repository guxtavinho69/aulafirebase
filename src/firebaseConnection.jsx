import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4IjTwkZKqXPbGRww5XJJaiO6EdRMpO2s",
  authDomain: "guxtavinho69-5042f.firebaseapp.com",
  projectId: "guxtavinho69-5042f",
  storageBucket: "guxtavinho69-5042f.appspot.com",
  messagingSenderId: "648957333352",
  appId: "1:648957333352:web:cb11cef8ec2c6f7716d0dd"
};

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  export {db, auth};
