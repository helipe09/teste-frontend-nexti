import React,{useState, useEffect} from "react";

import ContentHeader from "../../components/ContentHeader";
import ProductService from '../../services/productService';
import ClientService from '../../services/clienteService';

import { Container, Content,BoxProduct } from "./styles";

const Dashboard: React.FC = () => {

  const[produtos,setProdutos]= useState([]);
  const[clientes,setClientes]= useState([]);

  useEffect(() => {
    ProductService.getAll().then((results) => {
      setProdutos(results.data);
    });
  }, []);

  useEffect(() => {
    ClientService.getAll().then((results) => {
      setClientes(results.data);
    });
  }, []);

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#FFF">
        <></>
      </ContentHeader>
      <Content>
        <BoxProduct>
          <h1>Produtos Cadastrados</h1>
          <h2>{produtos.length}</h2>
        </BoxProduct>
        <BoxProduct>
          <h1>Clientes Cadastrados</h1>
          <h2>{clientes.length}</h2>
        </BoxProduct>
      </Content>
    </Container>
  );
};

export default Dashboard;
