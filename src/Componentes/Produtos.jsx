import React, { Component } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import ProdutoServices from '../Servicos/ProdutoServices';

class Produtos extends Component {

    constructor (props){
        super(props);
        this.state = {
            produtos: []
        }

        this.voltar = this.voltar.bind(this);
        this.novoProduto = this.novoProduto.bind(this);
        this.editar = this.editar.bind(this);
        this.excluir = this.excluir.bind(this); 
    }

    componentDidMount(){
        this.getProdutos();
    }

    getProdutos(){
        ProdutoServices.getProdutos().then(
            (resposta) => this.setState({produtos:resposta.data})
        );
    }

    voltar(){
        this.props.history.push("/");
    }

    excluir(id){
        ProdutoServices.deleteProduto(id).then(
            res => {
                alert(res.data);
                this.getProdutos();
            }
        );
    }

    editar(id){

    }

    novoProduto(){
        this.props.history.push("/produto/_add");
    }

    render() {
        return (
            <Container>
                <Row>
                    <h1>Usuários</h1>    
                </Row>
                <Row>
                    <Button variant="link" onClick={this.voltar}>Voltar</Button>
                </Row>
                <Row>
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>
                                    Descrição
                                </th>
                                <th>
                                    Quantidade
                                </th>
                                <th>
                                    Valor
                                </th>
                                <th>
                                    Ações
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produtos.map(
                                    produto => 
                                        <tr key = {produto.idProduto}>
                                            <td>
                                                {produto.descricao}
                                            </td>
                                            <td>
                                                {produto.quantidade}
                                            </td>
                                            <td>
                                                {produto.valor}
                                            </td>
                                            <td>
                                                <Button variant="warning" onClick={() => this.editar(produto.idProduto)}>Editar</Button>
                                                <Button variant="danger" onClick={() => this.excluir(produto.idProduto)}>Excluir</Button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Row>
                <Row>
                    <Col>
                        <Button className="float-left" variant="link" onClick={this.voltar}>Voltar</Button>
                    </Col>
                    <Col>
                        <Button className="float-right" variant="secondary" onClick={this.novoProduto}>Novo Produto</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Produtos;