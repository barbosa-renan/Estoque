import React, { Component } from "react";
import { Link } from "react-router-dom";
import Service from "../../../src/services/product.service";

export class Index extends Component {
    constructor(props) {
        super(props);
        this.retrieveProducts = this.retrieveProducts.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveProduct = this.setActiveProduct.bind(this);

        this.state = {
            products: [],
            currentProduct: null,
            currentIndex: -1
        };
    }

    componentDidMount() {
        this.retrieveProducts();
    }

    retrieveProducts() {
        Service.getAll()
            .then(response => {
                this.setState({
                    products: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    refreshList() {
        this.retrieveProducts();
        this.setState({
            currentProduct: null,
            currentIndex: -1
        });
    }

    setActiveProduct(product, index) {
        this.setState({
            currentProduct: product,
            currentIndex: index
        });
    }

    render() {
        const { products, currentProduct, currentIndex } = this.state;

        return (
            <div className="list row">
                <div className="col-md-8">
                    <h5>Listagem de produtos</h5>

                    <Link
                        to={"/Create"}
                        className="btn btn-sm btn-primary mr-2">
                        Incluir
                    </Link>

                    {currentProduct ? (
                        <span>
                            <Link
                                to={"/Edit/" + currentProduct.id}
                                className="btn btn-sm btn-warning mr-2">
                                Editar
                            </Link>

                            <Link
                                to={"/Delete/" + currentProduct.id}
                                className="btn btn-sm btn-danger">
                                Excluir
                            </Link>
                        </span>
                    ) : (<div />
                        )}
                    <ul className="list-group">
                        {products &&
                            products.map((product, id) => (
                                <li
                                    className={
                                        "list-group-item " +
                                        (id === currentIndex ? "active" : "")
                                    }
                                    onClick={() => this.setActiveProduct(product, id)}
                                    key={id}>
                                    {product.name}
                                </li>
                            ))}
                    </ul>
                </div>
                <div className="col-md-4 product-details">
                    {currentProduct ? (
                        <div>
                            <h5>Detalhes do produto</h5>
                            <div>
                                <label>
                                    <strong>Produto:</strong>
                                </label>{" "}
                                {currentProduct.name}
                            </div>
                            <div>
                                <label>
                                    <strong>Preço unitário:</strong>
                                </label>{" "}
                                {currentProduct.unitPrice}
                            </div>
                            <div>
                                <label>
                                    <strong>Quantidade:</strong>
                                </label>{" "}
                                {currentProduct.amount}
                            </div>
                        </div>
                    ) : (
                            <div>
                                <br />
                                <p>Clique em um produto...</p>
                            </div>
                        )}
                </div>
            </div>
        );
    }
}