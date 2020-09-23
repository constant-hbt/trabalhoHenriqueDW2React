import axios from 'axios';

const URL_BASE = "http://localhost:8080/produtos";

class ProdutoServices{
    getProdutos(){
        return axios.get(URL_BASE + "/all");
    }
}

export default new ProdutoServices();