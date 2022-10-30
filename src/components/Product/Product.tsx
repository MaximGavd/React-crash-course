import React , {useState} from 'react'
import { IProduct } from '../../models';

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps) {    

    const [details , setDetails] = useState(true);
    return (
        <div className='border py-2 px-4 flex rounded flex-col items-center mb-2'>            
            <img src={product.image} alt={product.title} className="w-1/6" />
            <p>{product.title}</p>
            <span className='font-bold mb-2'>{product.price} $</span>
            {/* <p className={'text-center' + details ? 'd-none' : 'd-block'}>{product.description}</p> */}
            <p className={`${details ? 'hidden' : 'flex'} ${'text-center duration-300'}`}>{product.description + 'text-center'}</p>
            <p>Current rating: <span className={`${'font-bold '} ${product.rating.rate >= 4 && 'text-green-600'} ${product?.rating?.rate < 4 && 'text-yellow-600'} ${product.rating.rate < 3 && 'text-green-600'}`}>{product.rating.rate}</span></p>
            <button 
                onClick={() => setDetails(details => !details)}  
                className='mt-2 py-2 px-4 border bg-yellow-400'>
                {details ? 'Show details' : 'Hide details'}
            </button>
        </div>
    )
}