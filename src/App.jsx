import "./App.css";
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="main-container flex flex-col ">
      <header className="bg-indigo-600 p-6 text-white text-2xl font-bold">
        Chat Sphere
      </header>

      <section className="flex-1 overflow-auto">
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

export default App;
