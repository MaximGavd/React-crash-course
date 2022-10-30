import { IProduct } from '../models';
import React , {useState , useEffect} from 'react'
import axios , {AxiosError} from 'axios'

export function useProduct() {
  const [products , setProducts] = useState<IProduct[]>([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState('');

  function addProduct(product: IProduct) {
    setProducts(prev => {
      console.log(product)
     return [...prev , product]
    })
  }

  async function fetchProducts() {

    try {
      setError('');
      setLoading(true);
      const responce = await axios.get<IProduct[]>('https://fakestoreapi.com/products?limit=5');    
      setProducts(responce.data);
      console.log(responce.data);
      setLoading(false); 
    } catch(e: unknown) {
      const error = e as AxiosError;
      setLoading(false); 
      setError(error.message)
    }
 
  }

  useEffect(() => {
    fetchProducts()
  },[])

  return {products , error , loading , addProduct}

}   