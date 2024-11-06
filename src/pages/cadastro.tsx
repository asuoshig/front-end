import React from 'react';
import imagemLanchonete from '../assets/lanchonete.jpg';

const Cadastro = () => {
  return (
    <div className="flex h-screen w-screen">
      {/* Metade esquerda da página com a imagem e opacidade.*/}
      <div className="flex-1 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imagemLanchonete})` }}
        />
        
        {/* opacidade 60*/}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        {/* TÍTULO OU LOGO DA LANCHONETE DENTRO DA IMAGEM */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl font-bold">SNACK-HUB</h1>
        </div>
      </div>

      {/* lado direito da tela, login e dados requeridos.*/}
      <div className="flex-1 flex items-center justify-center">
        <form className="w-full max-w-md bg-white p-8 rounded-lg ">
          <h2 className="text-2xl font-semibold text-center text-VermelhoPrincipal mb-10">CADASTRAR</h2>
          
          <label className="block text-VermelhoPrincipal" htmlFor="username">Usuário</label>
          <input
            type="text"
            placeholder="Usuário"
            className="w-full px-4 py-2 mb-1 border border-VermelhoPrincipal rounded-lg focus:outline-none"
            required/>
          <span className="text-black text-sm"> Campo obrigatório* </span>

          <label className="block text-VermelhoPrincipal " htmlFor="username">Senha</label>
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 mb-1 border border-VermelhoPrincipal rounded-lg focus:outline-none"
            required />
          <span className="text-black text-sm"> Campo obrigatório* </span>

          {/* botoes de login e resgistro*/}
          <button
            type="submit"
            className="w-full mt-7 bg-VermelhoPrincipal text-white py-2 rounded-md hover:bg-VermelhoClaro focus:outline-none"
          > ENTRAR
          </button>
          
          <button
            type="submit"
            className="w-full mt-7 bg-white text-VermelhoPrincipal py-2 rounded-md hover:bg-red-100 focus:outline-none border border-VermelhoPrincipal"
          >REGISTRAR</button>

        </form>
      </div>
    </div>
  );
};

export default Cadastro;
