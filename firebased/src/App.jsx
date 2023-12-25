import { useState } from "react";
import "./index.css";
import { auth } from "./firebaseConfig";
import { createUserWithEmailAndPassword } from "@firebase/auth";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(auth.currentUser);
  
  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  }

  return (
    <>
      <form action="#" onSubmit={() => signIn()}>
        <input type="email" placeholder="EMAIL..." onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="PASS..." onChange={e => setPassword(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
