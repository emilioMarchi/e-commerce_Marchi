import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CardUser from '../components/CardUser/CardUser';
import Account from '../components/Account/Account';


const CardDetail = ({ match }) => {
    const [user, setUser] = useState([]);
    const params = match.params.id;


    useEffect(() => {
            axios(`https://www.breakingbadapi.com/api/characters/${params}`)
                .then((res)=>{setUser(res.data)})
    }, []);

    return (
        <div key={user.char_id}>
            {
                user.map((item) => {
                    return(
                        <div key={item.char_id}>
                            <CardUser data={item} />
                            <Account />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardDetail;