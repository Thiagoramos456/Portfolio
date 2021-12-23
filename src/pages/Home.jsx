import React from 'react';
import imgProfile from '../images/foto-perfil.jpeg';

export default function Home() {
  return (
    <section>
      <div>
        <div className='flex justify-evenly items-center'>
          <div>
            <h1 className='text-white text-5xl leading-normal'>
              Sou o Thiago.
            </h1>
            <h1 className='text-white text-5xl leading-normal'>
              Desenvolvo aplicações FullStack.
            </h1>
            <div className="ml-4 mt-4">
              <button className='bg-grey px-8 py-4 mx-5 my-4 text-white rounded-full'>
                Sobre mim
              </button>
              <button className='bg-purple px-10 py-4 mx-5 my-4 text-white rounded-full'>
                Meus Projetos
              </button>
            </div>
          </div>
          <img
            className='rounded-full w-60 mb-14 border-4 border-black'
            src={imgProfile}
            alt='Minha foto de perfil.'
          />
        </div>
      </div>
    </section>
  );
}
