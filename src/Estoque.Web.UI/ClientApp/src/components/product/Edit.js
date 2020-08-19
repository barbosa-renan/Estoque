import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../../../src/services/product.service";

export class Edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.getProduct = this.getProduct.bind(this);
        this.updateProduct = this.updateProduct.bind(this);

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

    onChangeName(e) {
        const name = e.target.value;

        this.setState(function (prevState) {
            return {
                currentProduct: {
                    ...prevState.currentProduct,
                    name: name
                }
            };
        });
    }

    onChangeUnitPrice(e) {
        const unitPrice = e.target.value;

        this.setState(prevState => ({
            currentProduct: {
                ...prevState.currentProduct,
                unitPrice: +unitPrice
            }
        }));
    }

    onChangeAmount(e) {
        const amount = e.target.value;

        this.setState(prevState => ({
            currentProduct: {
                ...prevState.currentProduct,
                amount: +amount
            }
        }));
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

    updateProduct() {
        Service.update(
            this.state.currentProduct.id,
            this.state.currentProduct
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "Produto atualizado!"
                });
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
                        <h4>Editar produto</h4>
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nome</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    value={currentProduct.name}
                                    onChange={this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="unitPrice">Preço unitário</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="unitPrice"
                                    value={currentProduct.unitPrice}
                                    onChange={this.onChangeUnitPrice}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Quantidade</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="amount"
                                    value={currentProduct.amount}
                                    onChange={this.onChangeAmount}/>
                            </div>
                        </form>

                        <Link
                            to={"/"}
                            className="btn btn-sm btn-warning mr-2">
                            Voltar
                        </Link>

                        <button
                            type="submit"
                            className="btn btn-sm btn-info"
                            onClick={this.updateProduct}>
                            Salvar
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