import React from 'react';

interface ProductProps { 
  product: { 
    id: number
    image: string
    name: string
    oldPrice: number
    price: number
    description: string
    installments: { 
      count: number
      value: number
    }

  }
}

const Product: React.FC<ProductProps> = ({ product }) => { 
  return ( 
    <div className="bg-transparent mx-10 my-5 ">
      <img src={product.image} alt="" className="bg-transparent mb-2"/>
      <h5 className='mb-2 font-bold'>{product.name}</h5>
      <p className='mb-2'>{product.description}</p>
      <p className='text-sm mb-2'>De: R$ <span>{product.oldPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span></p>
      <p className='text-lg font-bold mb-2'>Por: R$ {product.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <p className='text-base mb-2'>ou 2x de: R$ {product.installments.value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
      <button className='w-full h-10 bg-violet-800 '>Comprar</button>
    </div>
  )

}

export default Product