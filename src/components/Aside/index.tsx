import React from "react";

import { Container, MenuContainer, MenuItemLink, Title } from "./styles";
import { FaUserAlt, FaList, FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';
import { MdDashboard } from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Title>Teste Nexti</Title>
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
          Clientes
        </MenuItemLink>
        </Link>

        <Link to="/lista/produtos">
        <MenuItemLink>
          <FaList />
          Produtos
        </MenuItemLink>
        </Link>

        <Link to="/lista/pedidos">
        <MenuItemLink>
          <FaShoppingCart />
          Pedidos
        </MenuItemLink>
        </Link>


      </MenuContainer>
    </Container>
  );
};

export default Aside;
