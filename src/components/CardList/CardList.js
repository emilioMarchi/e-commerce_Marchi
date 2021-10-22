import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CardUser from '../CardUser/CardUser';

import './CardList.css';

const CardList = () => {

    const [users, setUsers] = useState([]);

        useEffect(()=>{
            axios.get('https://api.github.com/users')
            .then((res)=>{setUsers(res.data)});
        }, []);

    return (
        <div className='card-list'>
            {users.map((user) => {
                return(
                    <div>
                        <CardUser data={user} />
                    </div>
                )
            })}
        </div>
    )
}

export default CardList;
