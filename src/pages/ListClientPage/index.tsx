import React from "react";

import ContentHeader from "../../components/ContentHeader";
import ListCliente from "../../components/ListClient";

const cliente = [
  { nome: "Felipe", cpf: "000000000", nascimento: "25/03/02" },
  { nome: "Joao", cpf: "025", nascimento: "25/03/04" },
];

const ListClientPage: React.FC = () => {
  return (
    <>
      <ContentHeader title="Clientes" lineColor="#FFF">
        <button>Adicionar Cliente</button>
      </ContentHeader>
      {cliente.map((item) => {
        return (
          <ListCliente
            nome={item.nome}
            cpf={item.cpf}
            dataNascimento={item.nascimento}
          />
        );
      })}
    </>
  );
};

export default ListClientPage;
