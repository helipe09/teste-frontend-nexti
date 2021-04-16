import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ContentHeader from "../../components/ContentHeader";
import ListProduct from "../../components/ListProduct";

import ModalAddProduct from "../../components/ModalAddProduct";

import { FaPlus } from "react-icons/fa";
import { Button } from "./styles";

type FormData = {
  firstName: string;
  lastName: string;
};

const ListProductPage: React.FC = () => {
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
      <ContentHeader title="Produtos" lineColor="#FFF">
        <Button onClick={() => setModal("active")}>
          <FaPlus />
          Adicionar Produto
        </Button>
      </ContentHeader>
      <ListProduct nome="Felipe" preco="50" />
      <ModalAddProduct
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
      </ModalAddProduct>
    </>
  );
};

export default ListProductPage;
