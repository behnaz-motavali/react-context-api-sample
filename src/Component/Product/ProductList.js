import React from 'react'
import Digitals from '../Digital/Digitals.js';
import Cars from '../Car/Cars.js';

const ProductList = () => (
    <div className="product-list">
        <h2>Product list:</h2>
        <Cars/>
        <Digitals/>
        {/* Other potential product categories which we will skip for this demo: */}
        {/* <Electronics /> */}
        {/* <Clothes /> */}
        {/* <Shoes /> */}
    </div>
);
export default ProductList;