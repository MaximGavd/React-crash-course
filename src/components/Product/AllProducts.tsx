import React from 'react'
import { Product } from './Product';
import { useProduct } from '../../hooks/ProductsHooks';

export function AllProducts() {
    const {products} = useProduct();
    return (
        <div className="products">
            { products.map(product => <Product key={`${product.title + '_' + product.id}`} product={product} />) }
        </div>
    )
}