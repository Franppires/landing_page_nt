import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h2>uma seleção de produtos</h2>
      <h1>especial para você</h1>
      <h3>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </h3>
      <ul>
        <li>Conheça a Linx</li>
        <li>Ajude o algorítimo</li>
        <li>Seus produtos</li>
        <li>Compartilhe</li>
      </ul>

      <div>
        <div>
          <h4>Ajude o algorítimo a ser mais certeiro</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu
            urna. Mauris rhoncus erat sed interdum dignissim. Suspendisse semper
            pretium consectetur. Praesent bibendum arcu risus, sit amet iaculis
            ex tempus quis. Cras et erat ut tellus vulputate tincidunt. Aenean
            lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Vestibulum vel urna tortor. Vivamus et arcu non felis tristique
            eleifend. Morbi eu condimentum urna. Curabitur eu magna eget turpis
            condimentum ultrices. Suspendisse quis lorem ultricies, pulvinar
            purus sed, egestas erat. Etiam ultricies a ante vehicula pharetra.
            Quisque ut neque mattis, consequat velit ut, ultrices orci. Nulla
            varius elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi
            viverra, magna ac luctus commodo, odio ante suscipit libero, at
            mattis augue est vel metus.
          </p>
        </div>
        <div>
          <form action=''>
            <div>
              <label htmlFor=''>Seu nome:</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>E-mail:</label>
              <input type='text' />
            </div>
            <div>
              <label htmlFor=''>CPF:</label>
              <input type='number' />
            </div>
            <div>
              <input type="radio" value='Masculino'  />Masculino
              <input type="radio" value='Feminino' />Feminino
            </div>

            <button>Enviar</button>
          </form>
        </div>
      </div>
      <div>
        <h4>Sua seleção especial</h4>
        <div>
          <img src="" alt="" />
          <h5>Nome do produto</h5>
          <p>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
          <p>De: R$23,99</p>
          <p>De: R$23,99</p>
          <p>De: R$23,99</p>
          <button>Comprar</button>
        </div>
        <div>
          <h4>Compartilhe a novidade</h4>
          <h5>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</h5>
          <form action="">
            <div>
              <label htmlFor="">Nome do seu amigo:</label>
              <input type="text" />
            </div>
            <div>
              <label htmlFor="">E-mail:</label>
              <input type="text" />
            </div>
            <button>Enviar agora</button>
          </form>
        </div>
      </div>

      <footer>Testando suas habilidades em HTML, CSS e JS. Linx Impulse 2019</footer>
    </main>

  
  );
}
