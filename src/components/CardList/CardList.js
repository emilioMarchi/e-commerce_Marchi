import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


import CardUser from '../CardUser/CardUser';

import './CardList.css';

const CardList = () => {

    const [users, setUsers] = useState([]);

    const getUsers = () => {
        return (
            setTimeout(() => {
                axios('https://www.breakingbadapi.com/api/characters')
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
                    <div key={user.char_id}>
                        <Link to={`/detail/${user.char_id}`}>
                            <CardUser data={user} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;
