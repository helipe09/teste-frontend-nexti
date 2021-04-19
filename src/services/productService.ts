import api from './api';


class ProductService {

  getAll() {
    return api.get("produtos");
  }

  post(data: any) {
    return api.post('produtos', data);
  }

  delete(id:any){
    return api.delete(`produtos/${id}`)
  }

}

export default new ProductService();
