import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardUser = ({data}) => {

    const user = data;
  return(
    <Card>
        <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
        <Card.Content>
        <Card.Header></Card.Header>
        <Card.Meta>Joined in 2016</Card.Meta>
        <Card.Description>
            Daniel is a comedian living in Nashville.
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            <Icon name='user' />
            10 Friends
        </a>
        </Card.Content>
    </Card>)
};

export default CardUser;