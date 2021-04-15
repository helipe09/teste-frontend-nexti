import React from "react";

import ContentHeader from "../../components/ContentHeader";
import ListCliente from "../../components/ListClient";

import { Container, Content } from "./styles";

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <></>
      </ContentHeader>
      <Content>
        <ListCliente
          nome="Felipe"
          cpf="000.000.000-00"
          dataNascimento="28/06/1997"
        />
      </Content>
    </Container>
  );
};

export default Dashboard;
