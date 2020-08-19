import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Index } from './components/product/Index';
import { Edit } from './components/product/Edit';
import { Create } from './components/product/Create';
import { Delete } from './components/product/Delete';
import './custom.css';


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Index} />
                <Route exact path='/Edit/:id' component={Edit} />
                <Route exact path='/Create/' component={Create} />
                <Route exact path='/Delete/:id' component={Delete} />
            </Layout>
        );
    }
}