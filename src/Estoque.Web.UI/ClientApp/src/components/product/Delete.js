import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../../../src/services/product.service";

export class Delete extends Component {
    constructor(props) {
        super(props);
        this.getProduct = this.getProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);

        this.state = {
            currentProduct: {
                id: null,
                name: "",
                unitPrice: null,
                amount: null
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getProduct(this.props.match.params.id);
    }

    getProduct(id) {
        Service.get(id)
            .then(response => {
                this.setState({
                    currentProduct: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    deleteProduct() {
        Service.delete(this.state.currentProduct.id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/')
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {

        const { currentProduct } = this.state;

        return (
            <div>
                {currentProduct ? (
                    <div className="edit-form">
                        <h4>Excluir produto</h4>
                        <p>Confirma a exclusão do produto?</p>
                        <form>
                            <div className="form-group">
                                <label><strong>Nome:</strong> {currentProduct.name}</label>
                            </div>
                            <div className="form-group">
                                <label><strong>Preço unitário:</strong> {currentProduct.unitPrice}</label>
                            </div>
                            <div className="form-group">
                                <label><strong>Quantidade:</strong> {currentProduct.amount}</label>
                            </div>
                        </form>

                        <Link
                            to={"/"}
                            className="btn btn-sm btn-warning mr-2">
                            Voltar
                        </Link>

                        <button
                            type="submit"
                            className="btn btn-sm btn-danger"
                            onClick={this.deleteProduct}>
                            Excluir
                        </button>
                        <p>{this.state.message}</p>
                    </div>
                ) : (
                        <div>
                            <br />
                            <p>Selecione um produto...</p>
                        </div>
                    )}
            </div>
        );
    }
}