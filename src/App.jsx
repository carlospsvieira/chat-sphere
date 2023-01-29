import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import { useAuthState} from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyAyET04wcP5vVnrExDpLwrs_YjYSSydFfs",
  authDomain: "chat-sphere-a68c4.firebaseapp.com",
  projectId: "chat-sphere-a68c4",
  storageBucket: "chat-sphere-a68c4.appspot.com",
  messagingSenderId: "692133335404",
  appId: "1:692133335404:web:8ec3978405db3c55142349"
})

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <header></header>

      <section>
        { user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
