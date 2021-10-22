import React, { useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const CardUser = ({data}) => {


  return(
    <Card>
        <Image src={data.avatar_url} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{data.login}</Card.Header>
        <Card.Meta>{data.type}</Card.Meta>
        </Card.Content>
    </Card>)
};

export default CardUser;