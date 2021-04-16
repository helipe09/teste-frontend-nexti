import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import ContentHeader from "../../components/ContentHeader";
import ListCliente from "../../components/ListClient";

import ModalAddClient from "../../components/ModalAddClient";
import { Button } from "./styles";

const cliente = [
  { nome: "Felipe", cpf: "000000000", nascimento: "25/03/02" },
  { nome: "Joao", cpf: "025", nascimento: "25/03/04" },
];

type FormData = {
  firstName: string;
  lastName: string;
};

const ListClientPage: React.FC = () => {
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
      <ContentHeader title="Clientes" lineColor="#FFF">
        <Button onClick={() => setModal("active")}>
          <FaUserPlus />
          Adicionar Cliente
        </Button>
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
      <ModalAddClient
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
      </ModalAddClient>
    </>
  );
};

export default ListClientPage;
