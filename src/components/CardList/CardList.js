import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CardUser from '../CardUser/CardUser';

import './CardList.css';

const CardList = () => {

    const [users, setUsers] = useState([]);

    const getUsers = () => {
        return (
            setTimeout(() => {
                axios.get('https://api.github.com/users')
                    .then((res)=>{setUsers(res.data)})
            }, 2000)
        )
    }

        useEffect(()=>{
            getUsers();
        }, []);

    return (
        <div className='card-list'>
            {users.map((user) => {
                return(
                    <div key={user.node_id}>
                        <CardUser data={user} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;
