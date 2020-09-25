import axios from 'axios';

const URL_BASE = "http://localhost:8080/produtos";

class ProdutoServices{
    getProdutos(){
        return axios.get(URL_BASE + "/all");
    }

    getProdutoById(id){
        return axios.get(URL_BASE + "/product/" + id);
    }

    createProduto(produto){
        return axios.post(URL_BASE + "/add", produto);
    }

    editProduto(produto){
        return axios.put(URL_BASE + "/update/" + produto.idProduto, produto);
    }

    deleteProduto(id){
        return axios.delete(URL_BASE + "/delete/" + id);
    }
}

export default new ProdutoServices();