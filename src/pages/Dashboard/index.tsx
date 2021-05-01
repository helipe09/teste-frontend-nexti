import React from "react";

import ContentHeader from "../../components/ContentHeader";

import { Container, Content,BoxProduct } from "./styles";

const Dashboard: React.FC = () => {


  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <></>
      </ContentHeader>
      <Content>
        <BoxProduct>
          <h1>Clientes agendados</h1>
          <h2>5</h2>
        </BoxProduct>
        <BoxProduct>
          <h1>Clientes atendidos</h1>
          <h2>10</h2>
        </BoxProduct>
      </Content>
    </Container>
  );
};

export default Dashboard;
