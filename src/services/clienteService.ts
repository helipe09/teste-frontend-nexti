import api from './api';


class ClientService {

  getAll() {
    return api.get("clientes");
  }

  getOne(id:number) {
    return api.get(`clientes/${id}`);
  }

  post(data: any) {
    return api.post('clientes', data);
  }

  put(data:any) {
    return api.put('clientes', data)
  }

  delete(id:number){
    return api.delete(`clientes/${id}`)
  }

}

export default new ClientService();
