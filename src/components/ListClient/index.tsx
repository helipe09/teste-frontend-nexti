import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { Container, FirstData, Button } from "./styles";
import ModalEditClient from '../ModalEditClient';

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
  id:number,
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
  const[cliente, setCliente] = useState([]);
  const history = useHistory()

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => ClienteService.put(data).then(()=>{
    alert(`Cliente ${nome} editado`)
    history.push("/dashboard")
  }));




  // useEffect(() => {
  //   ClienteService.getOne(id).then((results) => {
  //     setCliente(results.data);
  //   });
  // }, []);




  function excluirUser(id:any){

    ClienteService.delete(id).then(()=>{
      alert(`CLiente ${nome} excluído!`);
      history.push("/dashboard");
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

    <ModalEditClient className={modal}
        onClick={() => setModal("")}
        title="Editar Cliente">
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <input type="hidden"{...register("id", { required: true })}defaultValue={id}/>
        <label>Nome</label>
          <input {...register("nome", { required: true })} defaultValue={nome}/>
          {errors.nome && <span className="error">O nome é obrigatório</span>}
        </div>
         <div className="form-control">
          <label>CPF</label>
          <input {...register("cpf", { required: true })} defaultValue={cpf}/>
          {errors.cpf && <span className="error">O CPF é obvrigatório</span>}
        </div>
        <div className="form-control">
          <label>Data de Nacimento</label>
          <input {...register("data_nascimento", { required: true })} defaultValue={data_nascimento}/>
          {errors.data_nascimento && <span className="error">A data de nascimento é obrigatória</span>}
        </div>
      <button className="btn" type="submit">Enviar</button>
    </form>
    </ModalEditClient>
    </>
  );
};

export default ListClient;
