import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => {
  return (
    <div className='bg-custom-gradient w-full text-center pt-6'>
      <h2 className='text-xl' id='conheca-linx'>
        Uma seleção de produtos
      </h2>
      <h1 className='text-4xl'>Especial para você</h1>
      <h3 className='text-lg mt-4'>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </h3>
      <ul className='flex space-x-4 justify-center items-center'>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700 p-2 my-8 cursor-pointer rounded-lg'>
          <Link href='#conheca-linx'>Conheça a Linx</Link>
        </li>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700 p-2 my-8 cursor-pointer rounded-lg'>
          <Link href='#ajude-algoritmo'>Ajude o algorítimo</Link>
        </li>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700  p-2 my-8 cursor-pointer rounded-lg'>
          <Link href='#seus-produtos'>Seus produtos</Link>
        </li>
        <li className='text-base bg-violet-700 hover:bg-violet-900 active:bg-violet-700  p-2 my-8 cursor-pointer rounded-lg'>
          <Link href='#compartilhe'>Compartilhe</Link>
        </li>
      </ul>
    </div>
  );
};
