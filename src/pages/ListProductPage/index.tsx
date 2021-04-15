import React from "react";
import ContentHeader from "../../components/ContentHeader";
import ListProduct from "../../components/ListProduct";

const ListProductPage: React.FC = () => {
  return (
    <>
      <ContentHeader title="Produtos" lineColor="#FFF">
        <button>Adicionar Produto</button>
      </ContentHeader>
      <ListProduct nome="Felipe" preco="50" />
    </>
  );
};

export default ListProductPage;
