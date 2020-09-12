import React from 'react';
import { AccountData } from '../api/types';
import { Card } from 'semantic-ui-react';
import { Layout } from '../common/';

const { Grid } = Layout;

const Profile: React.FC<AccountData> = ({ profileData }) => {
  const { name, url, email, avatarUrl } = profileData;
  return (
    <Card>
      <div>{name}</div>
      <div>{url}</div>
      <div>{email}</div>
      <div>{avatarUrl}</div>
    </Card>
  );
};

export default Profile;
