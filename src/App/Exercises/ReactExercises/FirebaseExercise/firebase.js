import { initializeApp } from 'firebase/app';

// web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA2QB9WFbCZkJP_DqhoTxWEQKGbKeGXwRc',
  authDomain: 'pomeranian-basic-form-marta.firebaseapp.com',
  projectId: 'pomeranian-basic-form-marta',
  storageBucket: 'pomeranian-basic-form-marta.appspot.com',
  messagingSenderId: '760778193321',
  appId: '1:760778193321:web:9ff3eb5f00c31bd969ecb8',
};

export const firebaseApp = initializeApp(firebaseConfig);
