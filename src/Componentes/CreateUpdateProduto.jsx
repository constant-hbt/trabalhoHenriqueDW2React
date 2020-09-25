import React, { Component } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';

class CreateUpdateProduto extends Component {

    constructor(props){
        super(props);
        this.state = {
            descricao: "",
            quantidade: "",
            valor: ""
        }

        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.changeQuantidadeHandler = this.changeQuantidadeHandler.bind(this);
        this.changeValorHandler = this.changeValorHandler.bind(this);
        this.salvarProduto = this.salvarProduto.bind(this);
    }

    componentDidMount(){

    }

    changeDescricaoHandler(event){
        this.setState({descricao: event.target.value});
    }

    changeQuantidadeHandler(event){
        this.setState({quantidade: event.target.value});
    }

    changeValorHandler(event){
        this.setState({valor: event.target.value});
    }

    cancelar(){
        this.props.history.push("/produtos");
    }

    render() {
        return (
            <Container>
                <Row className = "justify-content-md-center">
                    <h1>Cadastro de Usuários</h1>
                </Row>

                <Form>
                    <Form.Group controlId= "formDescricao">
                        <Form.Control type="text" placeholder="Descricao" value={this.state.descricao} onChange={this.changeDescricaoHandler} />
                            <Form.Text className="text-muted">
                                Digite a descrição do produto
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId= "formQuantidade">
                        <Form.Control type="text" placeholder="Quantidade" value={this.state.quantidade} onChange={this.changeQuantidadeHandler} />
                            <Form.Text className="text-muted">
                                Digite a sua quantidade
                            </Form.Text>
                    </Form.Group>

                    <Form.Group controlId= "formValor">
                        <Form.Control type="text" placeholder="Valor" value={this.state.valor} onChange={this.changeValorHandler} />
                            <Form.Text className="text-muted">
                                Digite o seu valor
                            </Form.Text>
                    </Form.Group>
                    
                    <Row className="float-right">
                        <Button variant="success" style={{margin: "10px 0px 10px 0px"}} className="btnSubmit" onClick={this.salvarProduto}>
                            Inserir
                        </Button>
                        <Button variant="warning" style={{margin: "10px"}} onClick={this.cancelar.bind(this)}>
                            Cancelar
                        </Button>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default CreateUpdateProduto;