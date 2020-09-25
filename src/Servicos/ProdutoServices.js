import axios from 'axios';

const URL_BASE = "http://localhost:8080/produtos";

class ProdutoServices{
    getProdutos(){
        return axios.get(URL_BASE + "/all");
    }

    createProduto(){

    }

    editProduto(){

    }

    deleteProduto(id){
        return axios.delete(URL_BASE + "/delete/" + id);
    }
}

export default new ProdutoServices();