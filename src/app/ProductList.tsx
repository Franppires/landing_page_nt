import React from 'react';
import { Product } from './Product';

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  installments: {
    count: number;
    value: number;
  };
}

interface ProductsListProps { 
  products: ProductData[];
  onLoadMore: () => void
}

export const ProductsList: React.FC<ProductsListProps> = ({ products, onLoadMore }) => { 
  return (
    <div className='flex flex-wrap '>
          {/* <!-- Início do loop para exibir os produtos --> */}
          {products.length > 0 ? (
            <div className='flex flex-wrap'>
              {products.map((product) => (
                <div key={product.id} className='w-1/4 px-2'>
                  <Product product={product} />
                </div>
              ))}
            </div>
          ) : (
            <p className='w-full h-10 bg-violet-700 hover:bg-violet-900 active:bg-violet-700  m-10'>
              Carregando produtos...
            </p>
          )}
          {/* <!-- Fim do loop para exibir os produtos -->
          <!-- Botão "Carregar Mais" --> */}
        </div>
  )
}