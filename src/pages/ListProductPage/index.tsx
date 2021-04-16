import React from "react";
import ContentHeader from "../../components/ContentHeader";
import ListProduct from "../../components/ListProduct";

import {FaPlus} from 'react-icons/fa';
import {Button} from './styles';

const ListProductPage: React.FC = () => {
  return (
    <>
      <ContentHeader title="Produtos" lineColor="#FFF">
        <Button><FaPlus/>Adicionar Produto</Button>
      </ContentHeader>
      <ListProduct nome="Felipe" preco="50" />
    </>
  );
};

export default ListProductPage;
