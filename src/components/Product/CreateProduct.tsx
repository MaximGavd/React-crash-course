import React , {useState} from 'react'
import { IProduct } from '../../models';
import axios from 'axios'

const productData: IProduct = {    
    title: 'test product',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 42,
        count: 10
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps) {

    const [value, setValue] = useState('')
    const [error, setErorr] = useState('')

    const sumbitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        setErorr('');
        if (value.trim().length === 0) {
            setErorr('Please enter valid title');
            return
        }

        productData.title = value

        const response = await axios.post<IProduct>('https://fakestoreapi.com/products' , productData)

        onCreate(response.data);

    }


    const changeHanler = (e: any) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={sumbitHandler} >
            <input 
                type="text" 
                className='border py-2 px-4 mb-2 w-full outline-none mt-2'
                placeholder='Enter product title'
                value={value}
                onChange={changeHanler}
            />

            {error && <p className='text-red-600'>{error}</p>}

            <button type='submit' className='py-2 px-4 border bg-yellow-400 hover:text-white duration-300'>Create</button>
        </form>
    )
}