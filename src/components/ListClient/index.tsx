import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Container, FirstData, Button } from "./styles";
import ModalClient from "../ModalClient";

import {Link,useHistory} from 'react-router-dom';

import ClienteService from "../../services/clienteService";

interface IListClientProps {
  nome: string;
  cpf: string;
  data_nascimento: string;
  key:number;
  id:number;

}



type FormData = {
  nome: string;
  cpf: string;
  data_nascimento:String;
};
const ListClient: React.FC<IListClientProps> = ({

  nome,
  cpf,
  data_nascimento,
  key,id

}) =>  {
  const[modal, setModal] = useState("");
  const history = useHistory()

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));




  function excluirUser(id:any){

    ClienteService.delete(id).then(()=>{
      alert("Cliente Excluido");
      history.push("/");
    })
  }


  return (
    <>
       <Container>
       <FirstData key={key}>
         <span>Nome: {nome}</span>
         <small>Data de Nascimento: {data_nascimento}</small>
       </FirstData>
       <h3>CPF: {cpf}</h3>
       <Button onClick={() => setModal("active")}>Editar</Button>
       <Button onClick={() => excluirUser(id)}>Excluir</Button>
     </Container>

     <ModalClient className={modal} onClick={() => setModal("")} title="Título">
     <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Nome</label>
          <input {...register("nome", { required: true })} />
          {errors.nome && <span className="error">O nome é obrigatório</span>}
        </div>
         <div className="form-control">
          <label>CPF</label>
          <input {...register("cpf", { required: true })} />
          {errors.cpf && <span className="error">O CPF é obvrigatório</span>}
        </div>
        <div className="form-control">
          <label>Data de Nacimento</label>
          <input {...register("data_nascimento", { required: true })} defaultValue={"Nome"}/>
          {errors.data_nascimento && <span className="error">A data de nascimento é obrigatória</span>}
        </div>
      <button className="btn" type="submit">Enviar</button>
    </form>
   </ModalClient>
    </>
  );
};

export default ListClient;
