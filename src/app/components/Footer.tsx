import Link from 'next/link';
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='bg-custom-gradient-reverse w-full text-center px-6 py-3'>
      <p>Linx Impulse © {new Date().getFullYear()}</p>
      <p>
        {' '}
        Developed by{' '}
        <Link
          href='https://www.linkedin.com/in/franciane-pires/'
          target='_blank'
          className='hover:violet hover:bg-violet-700 hover:bg-violet-900 active:bg-violet-700 hover:rounded-lg hover:p-1'
        >
          Franciane Pires
        </Link>
      </p>
    </footer>
  );
};
