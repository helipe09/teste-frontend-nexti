import React from 'react';

import { Container, Profile, Welcome, Username } from './styles';

import Toggle from '../Toogle';

const MainHeader: React.FC = () => {
  return (
    <Container>
      {/* <Toggle /> */}
      <Profile>
        <Welcome>Olá,</Welcome>
        <Username>Username</Username>
      </Profile>
    </Container>
  );
};

export default MainHeader;
