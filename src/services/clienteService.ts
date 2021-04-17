import api from './api';


class ClientService {

  getAll() {
    return api.get("clientes");
  }

  post(data: any) {
    return api.post('novoCliente', data);
  }

  delete(id:any){
    return api.delete(`cliente/${id}`)
  }

}

export default new ClientService();
