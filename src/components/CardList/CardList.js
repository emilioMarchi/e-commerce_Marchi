import React, {useState, useEffect} from 'react';
import CardUser from '../CardUser/CardUser';
import axios from 'axios';

const CardList = () => {

    const [users, setUsers] = useState([]);

        useEffect(()=>{
            axios.get('https://api.github.com/users')
            .then((res)=>{setUsers(res.data)});
        }, []);

    return (
        <div className='card-list'>
            <CardUser data={users[0]} />
        </div>
    )
}

export default CardList;
