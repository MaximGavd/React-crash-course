import React from 'react'
import { useProduct } from '../../hooks/ProductsHooks'

export function Loading() {
    const {loading} = useProduct();
    return (
        <div className="loading">
            { loading && <p className='text-center text-cyan-600'>Loading...</p> }
        </div>
    )
}