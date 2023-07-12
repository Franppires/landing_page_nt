'use client';

import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Form } from './Form';
import { Footer } from './components/Footer';
import { fetchProducts } from './api/api';
import { Product } from './Product';
import { InvitationForm } from './InvitationForm';

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

export default function Home() {
  const [products, setProducts] = useState<ProductData[]>([]);
  const [nextPage, setNextPage] = useState<number>(1);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetchProducts(nextPage);
      setProducts(response.products);
      setNextPage(response.nextPage);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoadMore = async () => {
    try {
      const response = await fetchProducts(nextPage);
      setProducts((prevProducts) => [...prevProducts, ...response.products]);
      setNextPage(response.nextPage);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Form />
      <div className='my-8'>
        <div className='flex items-center justify-center'>
          <div className='flex-grow border-t-2 border-gray-300 ml-10'></div>
          <h4 className='text-lg font-bold mx-4' id='seus-produtos'>
            Sua seleção especial
          </h4>
          <div className='flex-grow border-t-2 border-gray-300 mr-10'></div>
        </div>
        <div className='flex flex-wrap '>
          {/* <!-- Início do loop para exibir os produtos -->  */}
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
          {nextPage && (
            <button
              className='w-full text-center mt-4 m-10 px-6 py-3 bg-violet-700 hover:bg-violet-900 active:bg-violet-700 text-white rounded-lg cursor-pointer	'
              onClick={handleLoadMore}
            >
              Carregar Mais
            </button>
          )}
        </div>
      </div>
      <InvitationForm />
      <Footer />
    </>
  );
}
