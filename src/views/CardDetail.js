import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardUser from '../components/CardUser/CardUser';


const CardDetail = ({ match }) => {
<<<<<<< HEAD
    const [users, setUsers] = useState();
    console.log('MATCH', match);
=======
    const [user, setUser] = useState([]);
    const params = match.params.id;
    console.log(user)


>>>>>>> rama

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
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardDetail;