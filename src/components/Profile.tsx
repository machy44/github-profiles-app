import React from 'react';
import styled from '@emotion/styled';
import { AccountData } from '../api/types';
import { Link } from '../common';
import { Card, CardContent, CardHeader, Image } from 'semantic-ui-react';
import { Layout } from '../theme/';

const ProfileCard = styled(Card)({
  width: 'min-content !important',
});

const Profile: React.FC<{ profileData: AccountData }> = ({ profileData }) => {
  const { name, url, email, avatarUrl } = profileData;
  return (
    <ProfileCard>
      <Image src={avatarUrl} alt="avatar image" wrapped />
      <CardContent>
        <CardHeader>{name}</CardHeader>
        {email && <Card.Description>{email}</Card.Description>}
      </CardContent>
      <Card.Content extra>
        <Link href={url} />
      </Card.Content>
    </ProfileCard>
  );
};

export default Profile;
