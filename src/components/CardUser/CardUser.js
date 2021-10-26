import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import './CardUser.css';

const CardUser = ({data}) => {


  return(
      <div className='card-user'>
        <Card>
            <Image src={data.img} wrapped ui={false} />
            <Card.Content>
            <Card.Header>{data.name}</Card.Header>
            <Card.Meta>{data.occupation}</Card.Meta>
            </Card.Content>
        </Card>
      </div>
    )
};

export default CardUser;