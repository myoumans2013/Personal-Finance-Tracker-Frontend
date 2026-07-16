import {useEffect, useState} from "react";

function ListAccounts() {
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        try {
            const fetchAccounts = async () => {
                setLoading(true);
                const response = await fetch('http://localhost:8080/api/account/getAccounts');
                const json = await response.json();
                setAccounts(json);
            }
            fetchAccounts().catch(console.error);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <ul>
                {accounts.map((account => (
                    <li key={account.id}>
                        <p> Name: {account.name} </p>
                        <p> Starting Balance: ${account.startingBalance} </p>
                        <p> Current Balance: ${account.currentBalance} </p>
                        <ul> Transactions: {account.transactionList.map((transaction => (
                            <li key={transaction.id}>
                                <p>Amount: ${transaction.amount}</p>
                                <p>Transaction type: {transaction.transactionType}</p>
                                <p>Category: {transaction.category}</p>
                                <p>Description: {transaction.description}</p>
                                <p>Transaction Date: {transaction.transactionDate}</p>
                            </li>
                        )))}
                        </ul>
                    </li>
                )))}
            </ul>
        </div>
    )
}
export default ListAccounts;