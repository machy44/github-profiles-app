import React from 'react';
import { AccountData } from '../api/types';
import { Card, CardContent, CardHeader, Image } from 'semantic-ui-react';
import { Layout, Link } from '../common/';

const { Grid } = Layout;

const Profile: React.FC<{ profileData: AccountData }> = ({ profileData }) => {
  const { name, url, email, avatarUrl } = profileData;
  return (
    <Card>
      <Image src={avatarUrl} alt="avatar image" wrapped ui={false} />
      <CardContent>
        <CardHeader>{name}</CardHeader>
        {email && <Card.Description>{email}</Card.Description>}
      </CardContent>
      <Card.Content extra>
        <Link url={url} />
      </Card.Content>
    </Card>
  );
};

export default Profile;
