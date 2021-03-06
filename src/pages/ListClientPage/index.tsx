import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaUserPlus } from "react-icons/fa";
import ContentHeader from "../../components/ContentHeader";
import ListCliente from "../../components/ListClient";

import {useHistory} from 'react-router-dom';

import ModalAddClient from "../../components/ModalAddClient";
import { Button } from "./styles";

interface IListClientProps {
  nome: string[];
  cpf: string[];
  data_nascimento: string[];

}

type FormData = {
  nome: string;
  cpf: string;
  data_nascimento: string;
};

const ListClientPage: React.FC<IListClientProps> = ({nome,
  cpf,
  data_nascimento,}) => {
  const [modal, setModal] = useState("");


  const Clientes = [{nome: "Felipe", cpf:"089.098.098-90", data_nascimento: "28/06/2006", id: 2},
  {nome: "Romario", cpf:"089.098.098-90", data_nascimento: "28/06/2006", id: 2},
  {nome: "Matheus", cpf:"089.098.098-90", data_nascimento: "28/06/2006", id: 2}]

  const history = useHistory()
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();



  return (
    <>
      <ContentHeader title="Clientes Agendados" lineColor="#FFF">
        <Button onClick={() => setModal("active")}>
          <FaUserPlus />
          Agendar Cliente
        </Button>
      </ContentHeader>
      {Clientes.map((item) => {
        return (
          <ListCliente
            key={1}
            nome={item.nome}
            cpf={item.cpf}
            data_nascimento={item.data_nascimento}
            id={item.id}
          />
        );
      })}
      <ModalAddClient
        className={modal}
        onClick={() => setModal("")}
        title="Adicionar Cliente"
      >
        <form >
          <div className="form-control">
            <label>Nome</label>
            <input {...register("nome", { required: true})} />
            {errors.nome && (
              <span className="error">O nome é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>CPF</label>
            <input {...register("cpf", { required: true })} />
            {errors.cpf && (
              <span className="error">O CPF é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>Data de nascimento</label>
            <input {...register("data_nascimento", { required: true })} />
            {errors.data_nascimento && (
              <span className="error">A data de nascimento é obrigatória</span>
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
