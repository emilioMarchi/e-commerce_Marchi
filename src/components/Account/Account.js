import React, {useState} from 'react'
import './Account.css';

const Account = () => {

    const [account, setAccount] = useState(0);
    const [amount, setAmount] = useState(0);

    const getAccount = () => {
        const amount = account;
        setAmount(amount);
    }

    const sumAccount = () => {
        setAccount(account + 1)
    }
    const subAccount = () => {
        setAccount(account - 1)
    }

    return (
        <div className='control'>
            <div className='account' >
                <button onClick={ account > 0 ? subAccount : ''} >-</button>
                <input type='text' value={account} ></input>
                <button onClick={sumAccount} >+</button>
            </div>
            <div className='add-info'>
            <button onClick={getAccount} >Agregar al carrito</button>
            </div>
        </div>
    )
}

export default Account;