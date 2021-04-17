import React, { useState } from "react";

import { Container, FirstData, Button } from "./styles";
import { useForm } from "react-hook-form";
import ModalEditProduct from "../ModalEditProduct";
import productService from "../../services/productService";

interface IListProductProps {
  nome: string;
  preco: string;
  id:number;
}

type FormData = {
  firstName: string;
  lastName: string;
};

const ListProduct: React.FC<IListProductProps> = ({ nome, preco,id }) => {
  const [modal, setModal] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  function excluirProduct(id:any){

    productService.delete(id).then(()=>{
      alert("Produto Excluido");
      // history.push("/");
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
        title="Título"
      >
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Nome do Produto</label>
            <input {...register("firstName", { required: true })} />
            {errors.firstName && (
              <span className="error">O nome do Produto é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>Descrição</label>
            <input {...register("lastName", { required: true })} />
            {errors.firstName && (
              <span className="error">A descrição do produto é obrigatória</span>
            )}
          </div>
          <div className="form-control">
            <label>Preço</label>
            <input {...register("lastName", { required: true })} />
            {errors.firstName && (
              <span className="error">O preço do produto é obrigatória</span>
            )}
          </div>
          <div className="form-control">
            <label>Quantidade</label>
            <input {...register("lastName", { required: true })} />
            {errors.firstName && (
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
