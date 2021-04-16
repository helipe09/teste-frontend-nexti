import React, { useState } from "react";

import { Container, FirstData, Button } from "./styles";
import { useForm } from "react-hook-form";
import ModalEditProduct from "../ModalEditProduct";

interface IListProductProps {
  nome: string;
  preco: string;
}

type FormData = {
  firstName: string;
  lastName: string;
};

const ListProduct: React.FC<IListProductProps> = ({ nome, preco }) => {
  const [modal, setModal] = useState("");

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));
  return (
    <>
      <Container>
        <FirstData>
          <span>Nome: {nome}</span>
        </FirstData>
        <h3>R${preco}</h3>
        <Button onClick={() => setModal("active")}>Editar</Button>
        <Button>Excluir</Button>
      </Container>
      <ModalEditProduct
        className={modal}
        onClick={() => setModal("")}
        title="Título"
      >
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>First Name</label>
            <input {...register("firstName", { required: true })} />
            {errors.firstName && (
              <span className="error">First name is required</span>
            )}
          </div>
          <div className="form-control">
            <label>Last Name</label>
            <input {...register("lastName", { required: true })} />
            {errors.firstName && (
              <span className="error">Last name is required</span>
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
