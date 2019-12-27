import React, { Component } from 'react';
import MyProvider from './Component/ContextAPI/MyProvider';
import ProductList from './Component/Product/ProductList'

export default class App extends Component {
    render() {
        return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">Welcome to my web store</h1>
                {/* <h2>Adding new line</h2> */}
                <MyProvider>
                    <ProductList/>
                </MyProvider>   
            </header>
        </div>
        )
    }
}
