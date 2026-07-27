import {useState} from "react";

function CreateAccountForm({setAccounts}) {
    const [newAccount, setNewAccount] = useState({
        accountName: '',
        startingBalance: 0
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("");

    function handleOnChange(e) {
        setNewAccount({
            ...newAccount,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const response = await fetch('http://localhost:8080/api/account/createAccount',
                {
                    method: "POST",
                    headers: {
                       "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newAccount)
                })
            const data = await response.json();
            setAccounts((previousAccounts) => [
                ...previousAccounts,
                data
            ]);
        } catch (error) {
            setError(error.message)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <label>Account Name: <input
                    onChange={handleOnChange}
                    value={newAccount.accountName}
                    type={"text"}
                    name={"accountName"}/></label>
                <label>Starting Balance: <input
                    name={"startingBalance"}
                    onChange={handleOnChange}
                    value={newAccount.startingBalance}
                    type={"number"}  /> </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default CreateAccountForm