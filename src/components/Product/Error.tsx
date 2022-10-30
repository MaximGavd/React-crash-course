import React from 'react'
import { useProduct } from '../../hooks/ProductsHooks'

export function Erorr() {
    const {error} = useProduct();
    return (
        <div className="error">
            { error && <p className='text-center text-red-600'>{error}</p> }
        </div>
    )
}