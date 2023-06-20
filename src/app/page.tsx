import Image from 'next/image';

export default function Home() {
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
          <h4 className='text-xl  mb-4'>Ajude o algorítimo a ser mais certeiro</h4>
          <p className='mb-4'>Aproveite esta oportunidade para nos ajudar a aprimorar nosso algoritmo. Queremos torná-lo cada vez mais certeiro em suas buscas e recomendações. Compartilhe suas preferências, suas opiniões e sua experiência. Quanto mais informações você nos fornecer, melhor poderemos atender às suas necessidades.</p>
          <p className='mb-4'>Nosso objetivo é fornecer a você uma experiência personalizada e eficiente. Junte-se a nós nessa jornada de aprimoramento contínuo e ajude-nos a oferecer resultados mais precisos e relevantes para você.</p>
          {/* penso que poderia ser uma msg após cadastrar  */}
          {/* <p className='mb-4'>Obrigado por fazer parte desta comunidade e por contribuir para o nosso sucesso!</p> */}
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
            <button className='w-full h-10 bg-violet-800 ' type='submit'>Enviar</button>
          </form>
        </div>
      </div>
      <div>
        <h4>Sua seleção especial</h4>
        <div>
          <img src='' alt='' />
          <h5>Nome do produto</h5>
          <p>
            Descrição do produto um pouco maior, com duas linhas ou três que
            explica melhor do que se trata.
          </p>
          <p>De: R$23,99</p>
          <p>De: R$23,99</p>
          <p>De: R$23,99</p>
          <button>Comprar</button>
        </div>
        <div>
          <h4>Compartilhe a novidade</h4>
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
