import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className='bg-custom-gradient w-full text-center pt-6'>
      <h2 className='text-xl' id='conheca-linx'>
        Uma seleção de produtos
      </h2>
      <h1 className='text-4xl'>Especial para você</h1>
      <h3 className='text-lg mt-4 mx-10'>
        Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!
      </h3>
      <ul className='flex flex-wrap justify-center items-center mx-10 sm:gap-8 gap-0 '>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700 p-2 my-2 sm:my-8 cursor-pointer rounded-lg w-1/2 sm:w-auto'>
          <Link href='#conheca-linx'>Conheça a Linx</Link>
        </li>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700 p-2 my-2 sm:my-8 cursor-pointer rounded-lg w-1/2 sm:w-auto'>
          <Link href='#ajude-algoritmo'>Ajude o algoritmo</Link>
        </li>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700 p-2 my-2 sm:my-8 cursor-pointer rounded-lg w-1/2 sm:w-auto'>
          <Link href='#seus-produtos'>Seus produtos</Link>
        </li>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700 p-2 my-2 sm:my-8 cursor-pointer rounded-lg w-1/2 sm:w-auto'>
          <Link href='#compartilhe'>Compartilhe</Link>
        </li>
      </ul>
    </div>
  );
};
