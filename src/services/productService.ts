import api from './api';


class ProductService {

  getAll() {
    return api.get("produtos");
  }

  post(data: any) {
    return api.post('novoProduto', data);
  }

  delete(id:any){
    return api.delete(`produto/${id}`)
  }

}

export default new ProductService();
