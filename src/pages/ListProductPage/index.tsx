import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ContentHeader from "../../components/ContentHeader";
import ListProduct from "../../components/ListProduct";

import ModalAddProduct from "../../components/ModalAddProduct";
import ProductService from '../../services/productService';

import { FaPlus } from "react-icons/fa";
import { Button } from "./styles";

type FormData = {
  nome: string;
  descricao: string;
  sku: string;
  preco: string;
  quantidade: string;
};

const ListProductPage: React.FC = () => {
  const [modal, setModal] = useState("");
  const[produtos, setProdutos] = useState<any[]>([]);

  useEffect(() => {
    ProductService.getAll().then((results) => {
      setProdutos(results.data);
    });
  }, []);

  console.log(produtos)

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(data => ProductService.post(data).then(()=>{
    alert("Produto Incluído");
  }));

  return (
    <>
      <ContentHeader title="Produtos" lineColor="#FFF">
        <Button onClick={() => setModal("active")}>
          <FaPlus />
          Adicionar Produto
        </Button>
      </ContentHeader>
      {produtos.map((item)=>{
        return(
          <ListProduct nome={item.nome} preco={item.preco} id={item.id}/>
        )
      })}

      <ModalAddProduct
        className={modal}
        onClick={() => setModal("")}
        title="Título"
      >
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label>Nome do Produto</label>
            <input {...register("nome", { required: true })} />
            {errors.nome && (
              <span className="error">O nome do Produto é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>SKU do Produto (Somente números)</label>
            <input type="number"{...register("sku", { required: true })} />
            {errors.sku && (
              <span className="error">O SKU do Produto é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>Descrição</label>
            <input {...register("descricao", { required: true })} />
            {errors.descricao && (
              <span className="descricao">A descrição do produto é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>Preço</label>
            <input {...register("preco", { required: true })} />
            {errors.preco && (
              <span className="preco">O preço do Produto é obrigatório</span>
            )}
          </div>
          <div className="form-control">
            <label>Quantidade</label>
            <input {...register("quantidade", { required: true })} />
            {errors.quantidade && (
              <span className="quantidade">A quantidade do produto é obrigatória</span>
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
