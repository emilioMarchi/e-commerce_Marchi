import React, {useState, useEffect} from 'react';
import axios from 'axios';


const CardDetail = ({ match }) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState([]);


    useEffect(() => {
            axios(`https://api.github.com/users`)
                .then((res)=>{setUsers(res.data)})
    }, []);

    return (
        <div className='card-detail'>
            {
                users !=0 ? getUser() : console.log('out')
            }
        </div>
    )
}

export default CardDetail;