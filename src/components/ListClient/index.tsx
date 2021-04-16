import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { Container, FirstData, Button } from "./styles";
import ModalClient from "../ModalClient";

interface IListClientProps {
  nome: string;
  cpf: string;
  dataNascimento: string;

}

type FormData = {
  firstName: string;
  lastName: string;
};
const ListClient: React.FC<IListClientProps> = ({

  nome,
  cpf,
  dataNascimento,
}) =>  {
  const[modal, setModal] = useState("");

  const { register, setValue, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <>
      <Container>
      <FirstData>
        <span>Nome: {nome}</span>
        <small>Data de Nascimento: {dataNascimento}</small>
      </FirstData>
      <h3>CPF: {cpf}</h3>
      <Button onClick={() => setModal("active")}>Editar</Button>
      <Button>Excluir</Button>
    </Container>
     <ModalClient className={modal} onClick={() => setModal("")} title="Título">
     <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>First Name</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <span className="error">First name is required</span>}
        </div>
         <div className="form-control">
          <label>Last Name</label>
          <input {...register("lastName", { required: true })} />
          {errors.firstName && <span className="error">Last name is required</span>}
        </div>
      <button className="btn" type="submit">Enviar</button>
    </form>
   </ModalClient>
    </>
  );
};

export default ListClient;
