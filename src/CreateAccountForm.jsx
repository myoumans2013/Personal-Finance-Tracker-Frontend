import {useState} from "react";

function CreateAccountForm() {

    const [newAccount, setNewAccount] = useState({
        accountName: '',
        startingBalance: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        fetch('http://localhost:8080/api/account/createAccount', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newAccount),
        })
        .then(res => res.json())
            .then((savedAccount) => {
                setNewAccount([...newAccount, savedAccount])
            })

    }

    return (
        <div>
            <form method="post" onSubmit={handleSubmit}>
                <label>Account Name: <input></input></label>
            </form>
        </div>
    )

}
export default CreateAccountForm;
