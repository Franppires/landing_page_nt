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

export const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
} 

export const Product: React.FC<ProductProps> = ({ product }) => { 
  return ( 
    <div key={product.id} className="bg-transparent mx-10 my-5">
      <img src={product.image} alt="" className="bg-transparent mb-2" />
      <h5 className="mb-2 font-bold">{product.name}</h5>
      <p className="hidden sm:block">{product.description}</p>
      <p className="text-lg font-bold mb-2">Por: {formatCurrency(product.price)}</p>
      <p className="text-sm mb-2">De: R$ {formatCurrency(product.oldPrice)}</p>
      <p className="text-base mb-2">ou {product.installments.count}x de: R$ {formatCurrency(product.installments.value)}</p>
      <button className="w-full h-10 bg-violet-700 hover:bg-violet-900 active:bg-violet-700 rounded-lg">Comprar</button>
    </div>
  )

}
