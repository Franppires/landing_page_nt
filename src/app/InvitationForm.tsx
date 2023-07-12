import React from 'react';

export const InvitationForm: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center ">
        <div className="flex-grow border-t-2 border-gray-300 ml-10"></div>
        <h4 className="text-lg font-bold mx-4" id="compartilhe">
          Compartilhe a novidade
        </h4>
        <div className="flex-grow border-t-2 border-gray-300 mr-10"></div>
      </div>
      <h5 className="flex items-center justify-center text-lg my-10 mx-10">
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!
      </h5>

      <div className="flex flex-col gap-10 w-full">
        <div className="max-w-xs mx-auto">
          <label htmlFor="friend-name">Nome do seu amigo:</label>
          <input
            type="text"
            id="friend-name"
            name="friend-name"
            className="w-full mt-4 text-black"
            required
          />
        </div>
        <div className="max-w-xs mx-auto">
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full mt-4 text-black"
            placeholder="exemplo@gmail.com"
            required
          />
        </div>
      </div>

      <div className="flex justify-center my-4">
        <button className="mt-4 px-6 py-3 bg-violet-700 hover:bg-violet-900 active:bg-violet-700  text-white rounded-lg cursor-pointer">
          Enviar agora
        </button>
      </div>
    </>
  );
};
