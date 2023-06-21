import React from 'react';

export const Form: React.FC = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center gap-20 mx-10'>
      <div className='w-full md:w-1/2 '>
        <h4 className='text-xl  mb-4' id='ajude-algoritmo'>
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
          ajude-nos a oferecer resultados mais precisos e relevantes para você.
        </p>
      </div>

      <div className='w-full md:w-1/2 mt-2'>
        <form action='https://formspree.io/f/mayzrgja' method='POST'>
          <div className='flex flex-col mb-4'>
            <label htmlFor='name'>Seu nome:</label>
            <input
              type='text'
              id='name'
              name='fullName'
              required
              className='text-black'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='email'>E-mail:</label>
            <input
              type='email'
              id='email'
              name='email'
              required
              className='text-black'
              placeholder='exemplo@gmail.com'
            />
          </div>
          <div className='flex flex-col mb-4'>
            <label htmlFor='cpf'>CPF:</label>
            <input
              type='number'
              id='cpf'
              name='cpf'
              required
              className='text-black'
              placeholder='000.000.000-00'
            />
          </div>
          <div className='flex mb-4'>
            <div className='ml-2'>
              <input type='radio' value='Masculino' name='gender' required />
              <label htmlFor='gender-male'>Masculino</label>
            </div>
            <div className='ml-2 '>
              <input type='radio' value='Feminino' name='gender' />
              <label htmlFor='gender-female'>Feminino</label>
            </div>
          </div>
          <button
            className='w-full h-10 bg-violet-700 hover:bg-violet-900 active:bg-violet-700 cursor-pointer rounded-lg'
            type='submit'
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};
