import React, { useState } from "react";

import { Container, FirstData, Button } from "./styles";
import { useForm } from "react-hook-form";
import {useHistory} from 'react-router-dom';
import ModalEditProduct from "../ModalEditProduct";
import productService from "../../services/productService";

interface IListProductProps {
  nome: string;
  preco: string;
  id:number;
  sku:any;
  descricao:string;
  quantidade:string;
}

type FormData = {
  id:number;
  nome: string;
  sku: any;
  quantidade: string;
  preco: string;
  descricao: string;
};

const ListProduct: React.FC<IListProductProps> = ({ nome, preco,id,sku, descricao, quantidade}) => {
  const [modal, setModal] = useState("");
  const history = useHistory()

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => productService.put(data).then(()=>{
    alert(`Produto ${nome} editado!`)
    history.push("/dashboard")
  }));

  function excluirProduct(id:any){

    productService.delete(id).then(()=>{
      alert("Produto Excluido");
      history.push("/dashboard");
    })
  }


  return (
    <>
      <Container>
        <FirstData>
          <span>Nome: {nome}</span>
        </FirstData>
        <h3>R${preco}</h3>
        <Button onClick={() => setModal("active")}>Editar</Button>
        <Button onClick={() => excluirProduct(id)}>Excluir</Button>
      </Container>
      <ModalEditProduct
        className={modal}
        onClick={() => setModal("")}
        title="Editar produto"
      >
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Nome do Produto</label>
            <input type="hidden"{...register("id", { required: true })}defaultValue={id}/>
            <input {...register("nome", { required: true })} defaultValue={nome}/>
            {errors.nome && (
              <span className="error">O nome do Produto é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>SKU</label>
            <input {...register("sku", { required: true })} defaultValue={sku}/>
            {errors.sku && (
              <span className="error">O sku do produto é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>Descrição</label>
            <input {...register("descricao", { required: true })} defaultValue={descricao}/>
            {errors.descricao && (
              <span className="error">A descrição do produto é obrigatória</span>
            )}
          </div>
          <div className="form-control">
            <label>Preço</label>
            <input {...register("preco", { required: true })} defaultValue={preco}/>
            {errors.preco && (
              <span className="error">O preço do produto é obrigatória</span>
            )}
          </div>
          <div className="form-control">
            <label>Quantidade</label>
            <input {...register("quantidade", { required: true })} defaultValue={quantidade}/>
            {errors.quantidade && (
              <span className="error">A quantidade do produto é obrigatória</span>
            )}
          </div>
          <button className="btn" type="submit">
            Enviar
          </button>
        </form>
      </ModalEditProduct>
    </>
  );
};

export default ListProduct;
