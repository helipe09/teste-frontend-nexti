import React from "react";

import { Container, MenuContainer, MenuItemLink, Title } from "./styles";
import { FaUserAlt, FaList, FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { MdDashboard } from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Title>Teste Agendamento Barbearia Romario</Title>
      <MenuContainer>
        <Link to="/dashboard">
        <MenuItemLink>
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        </Link>

        <Link to="/lista/clientes">
        <MenuItemLink>
          <FaUserAlt />
          Clientes Agendados
        </MenuItemLink>
        </Link>


      </MenuContainer>
    </Container>
  );
};

export default Aside;
