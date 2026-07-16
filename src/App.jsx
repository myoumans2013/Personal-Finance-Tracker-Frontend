import './App.css'
import {useState} from "react";
import ListAccounts from "./ListAccounts.jsx";

function App() {

  const [newAccount, setNewAccount] = useState({
    accountName: '',
    startingBalance: '',
  });


  return (
      <div>
        <ListAccounts />
      </div>
  )
}

export default App
