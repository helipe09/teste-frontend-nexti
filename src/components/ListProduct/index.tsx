import React from "react";

import { Container, FirstData, Button } from "./styles";

interface IListProductProps {
  nome: string;
  preco: string;
}

const ListProduct: React.FC<IListProductProps> = ({ nome, preco }) => {
  return (
    <Container>
      <FirstData>
        <span>Nome: {nome}</span>
      </FirstData>
      <h3>R${preco}</h3>
      <Button>Editar</Button>
      <Button>Excluir</Button>
    </Container>
  );
};

export default ListProduct;
