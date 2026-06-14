import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "asdgsdgasdgasdgasdfasdgasdg",
  authDomain: "asdgafsdgsadgasfg-asdfsadf.firebaseapp.com",
  databaseURL: "https://asdgsadgasdgasdg-cbf2d-default-rtdb.firebaseio.com",
  projectId: "asfgasdgasdg-asdgfsag",
  storageBucket: "asgdgsdgasdg-cbf2d.appspot.com",
  messagingSenderId: "asdfsadfasdf",
  appId: "1:sdfasfsaf:web:0f76ac882b49f38cef923d",
  measurementId: "G-sdasdafdsa"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
