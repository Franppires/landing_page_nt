'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from './components/product';

interface ProductData {
  id: number;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  image: string;
  installments: { 
    count: number
    value: number
  }
}

export default function Home() {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get<ProductData[]>(
        'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1'
      );
      setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className=''>
      <div className='bg-custom-gradient w-full text-center pt-6'>
        <h2 className='text-xl '>Uma seleção de produtos</h2>
        <h1 className='text-4xl'>Especial para você</h1>
        <h3 className='text-lg mt-4'>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite!
        </h3>
        <ul className='flex space-x-4 justify-center items-center'>
          <li className='text-base bg-violet-800 p-2 my-8'>Conheça a Linx</li>
          <li className='text-base bg-violet-800 p-2 my-8'>
            Ajude o algorítimo
          </li>
          <li className='text-base bg-violet-800 p-2 my-8'>Seus produtos</li>
          <li className='text-base bg-violet-800 p-2 my-8'>Compartilhe</li>
        </ul>
      </div>

      <div className='flex flex-col md:flex-row justify-center gap-20 mx-10'>
        <div className='w-full md:w-1/2 '>
          <h4 className='text-xl  mb-4'>
            Ajude o algorítimo a ser mais certeiro
          </h4>
          <p className='mb-4'>
            Aproveite esta oportunidade para nos ajudar a aprimorar nosso
            algoritmo. Queremos torná-lo cada vez mais certeiro em suas buscas e
            recomendações. Compartilhe suas preferências, suas opiniões e sua
            experiência. Quanto mais informações você nos fornecer, melhor
            poderemos atender às suas necessidades.
          </p>
          <p className='mb-4'>
            Nosso objetivo é fornecer a você uma experiência personalizada e
            eficiente. Junte-se a nós nessa jornada de aprimoramento contínuo e
            ajude-nos a oferecer resultados mais precisos e relevantes para
            você.
          </p>
        </div>
        <div className='w-full md:w-1/2 mt-2'>
          <form action=''>
            <div className='flex flex-col mb-4'>
              <label htmlFor='name'>Seu nome:</label>
              <input type='text' id='name' />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='email'>E-mail:</label>
              <input type='text' id='email' />
            </div>
            <div className='flex flex-col mb-4'>
              <label htmlFor='cpf'>CPF:</label>
              <input type='number' id='cpf' />
            </div>
            <div className='flex mb-4'>
              <div className='ml-2'>
                <input type='radio' value='Masculino' name='gender' />
                <label htmlFor='gender-male'>Masculino</label>
              </div>
              <div className='ml-2 '>
                <input type='radio' value='Feminino' name='gender' />
                <label htmlFor='gender-female'>Feminino</label>
              </div>
            </div>
            <button className='w-full h-10 bg-violet-800 ' type='submit'>
              Enviar
            </button>
            {/* <p className='mb-4'>Obrigado por fazer parte desta comunidade e por contribuir para o nosso sucesso!</p> */}
          </form>
        </div>
      </div>
      <div className='my-8'>
        <div className='flex items-center justify-center'>
          <div className='flex-grow border-t-2 border-gray-300 ml-10'></div>
          <h4 className='text-lg font-bold mx-4'>Sua seleção especial</h4>
          <div className='flex-grow border-t-2 border-gray-300 mr-10'></div>
        </div>
        <div className='flex flex-wrap -mx-2'>
          {/* <!-- Início do loop para exibir os produtos --> */}
          {products.length > 0 ? (
          <div className='flex flex-wrap -mx-2'>
            {products.map((product) => (
              <div key={product.id} className='w-1/4 px-2'>
                <Product product={product} />
              </div>
            ))}
          </div>
          ) : (
            <p className='w-full h-10 bg-violet-800 m-10'>Carregando produtos...</p>
          )} 
          {/* <!-- Fim do loop para exibir os produtos -->

  <!-- Botão "Carregar Mais" --> */}
          <button className='w-full h-10 bg-violet-800  m-10'>
            Carregar Mais
          </button>
        </div>



        <div>
          <div className='flex items-center justify-center'>
            <div className='flex-grow border-t-2 border-gray-300 ml-10'></div>
            <h4 className='text-lg font-bold mx-4'>Compartilhe a novidade</h4>
            <div className='flex-grow border-t-2 border-gray-300 mr-10'></div>
          </div>
          <h5>
            Quer que seus amigos também ganhem a lista personalizada deles?
            Preencha agora!
          </h5>
          <form action=''>
            <div>
              <label htmlFor=''>Nome do seu amigo:</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>E-mail:</label>
              <input type='text' />
            </div>
            <button>Enviar agora</button>
          </form>
        </div>
      </div>

      <footer>
        Testando suas habilidades em HTML, CSS e JS. Linx Impulse 2019
      </footer>
    </main>
  );
}
