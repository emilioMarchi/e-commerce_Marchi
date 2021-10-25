import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CardList from '../components/CardListContainer/CardListContainer';

const CardDetail = ({ match }) => {
    const [user, setUsers] = useState();


    useEffect(() => {
            axios(`https://api.github.com/users`)
                .then((res)=>{setUsers(res.data)})
    }, [])

    return (
        <div className='card-detail'>

        </div>
    )
}

export default CardDetail;