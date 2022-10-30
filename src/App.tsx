import React , {useState} from 'react'
import {Product} from './components/Product/Product';
import { useProduct } from './hooks/ProductsHooks';
import { Erorr } from './components/Product/Error';
import { Loading } from './components/Product/Loading';
import { AllProducts } from './components/Product/AllProducts';
import { Modal } from './components/Modal/Modal';
import { CreateProduct } from './components/Product/CreateProduct';
import { IProduct } from './models';

function App() {
  const [modal , setModal] = useState(true);
  const { products , error , loading , addProduct } = useProduct()
  
  const createHandler = (product: IProduct) => {
    setModal(false);
    addProduct(product)
  }
  return (
    <div className='container mx-auto max-w-2xl pt-5'>
      <Erorr />
      <Loading  />
      <AllProducts />
      {modal && <Modal title='Create new product'>
        <CreateProduct onCreate={createHandler} />
      </Modal>}
    </div>
  )
}

export default App;
