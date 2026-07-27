import './App.css'
import {useState} from "react";
import ListAccounts from "./ListAccounts.jsx";
import CreateAccountForm from "./CreateAccountForm.jsx";

function App() {
    const [accounts, setAccounts] = useState([])

  return (
      <div>
        <ListAccounts accounts={accounts} />
        <CreateAccountForm setAccounts={setAccounts}/>
      </div>
  )
}

export default App
