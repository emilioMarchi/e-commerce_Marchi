import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './CardUser.css';

const CardUser = ({data}) => {


  return(
      <div className='card-user'>
        <Card>
            <Image src={data.avatar_url} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{data.login}</Card.Header>
            <Card.Meta>{data.type}</Card.Meta>
            </Card.Content>
        </Card>
      </div>
    )
};

export default CardUser;