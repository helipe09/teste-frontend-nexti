import React from "react";

import { Container, FirstData, Button } from "./styles";

interface IListClientProps {
  nome: string;
  cpf: string;
  dataNascimento: string;
}

const ListClient: React.FC<IListClientProps> = ({
  nome,
  cpf,
  dataNascimento,
}) => {
  return (
    <Container>
      <FirstData>
        <span>Nome: {nome}</span>
        <small>Data de Nascimento: {dataNascimento}</small>
      </FirstData>
      <h3>CPF: {cpf}</h3>
      <Button>Editar</Button>
      <Button>Excluir</Button>
    </Container>
  );
};

export default ListClient;
