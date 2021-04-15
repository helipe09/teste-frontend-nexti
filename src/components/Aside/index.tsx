import React from "react";

import { Container, MenuContainer, MenuItemLink, Title } from "./styles";
import { FaUserAlt, FaList, FaShoppingCart } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const Aside: React.FC = () => {
  return (
    <Container>
      <Title>Teste Nexti</Title>
      <MenuContainer>
        <MenuItemLink href="/dashboard">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="/lista/clientes">
          <FaUserAlt />
          Clientes
        </MenuItemLink>
        <MenuItemLink href="/lista/produtos">
          <FaList />
          Produtos
        </MenuItemLink>
        <MenuItemLink href="/lista/pedidos">
          <FaShoppingCart />
          Pedidos
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
