import React from 'react';
import { Product, formatCurrency } from './Product';

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
  const mobileProducts = products.slice(0, 4); // Obtém apenas os 4 primeiros produtos para dispositivos móveis

  return (
    <div className="flex flex-wrap">
      {/* Início do loop para exibir os produtos */}
      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-4">
          {products.map((product) => (
            <div key={product.id} className="w-full px-2">
              <Product product={product} />
            </div>
          ))}
        </div>
      ) : (
        <p className="w-full h-10 bg-violet-700 hover:bg-violet-900 active:bg-violet-700 m-10">
          Carregando produtos...
        </p>
      )}
      {/* Fim do loop para exibir os produtos */}
    </div>
  )
}