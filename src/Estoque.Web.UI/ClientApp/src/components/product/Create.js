import React, { Component } from "react";
import NumberFormat from 'react-number-format';
import Service from "../../../src/services/product.service";

export class Create extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeUnitPrice = this.onChangeUnitPrice.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.save = this.save.bind(this);
        this.new = this.new.bind(this);

        this.state = {
            id: null,
            name: "",
            unitPrice: null,
            amount: null
        };
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeUnitPrice(e) {
        const unitPrice = e.target.value.replace("R$", "");

        this.setState({
            unitPrice: +unitPrice
        });
    }

    onChangeAmount(e) {
        const amount = e.target.value

        this.setState({
            amount: +amount
        });
    }

    save() {
        var data = {
            name: this.state.name,
            unitPrice: +this.state.unitPrice,
            amount: +this.state.amount
        };

        Service.insert(data)
            .then(response => {
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    unitPrice: response.data.unitPrice,
                    amount: response.data.amount,
                    submitted: true
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    new() {
        this.setState({
            id: null,
            name: "",
            unitPrice: null,
            amount: null,
            submitted: false
        });
    }

    render() {
        return (
            <div className="submit-form">
                {this.state.submitted ? (
                    <div>
                        <h4>Produto adicionado!</h4>
                        <button className="btn btn-success" onClick={this.new}>
                            Novo
                        </button>
                    </div>
                ) : (
                        <div>
                            <div className="form-group">
                                <label htmlFor="name">Produto</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    required
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="unitPrice">Preço unitário</label>
                                <NumberFormat 
                                    type="text"
                                    thousandSeparator={false} 
                                    allowNegative={false}
                                    decimalSeparator={"."}
                                    prefix={'R$'}
                                    className="form-control"
                                    id="unitPrice"
                                    value={this.state.unitPrice}
                                    onChange={this.onChangeUnitPrice}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="amount">Quantidade</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="amount"
                                    required
                                    value={this.state.amount}
                                    onChange={this.onChangeAmount}
                                    name="amount"
                                />
                            </div>

                            <button onClick={this.save} className="btn btn-success">
                                Salvar
                            </button>
                        </div>
                    )}
            </div>
        );
    }
}