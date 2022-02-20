import React from 'react';
import linkedinLogo from '../images/linkedin-logo.png';
import githubLogo from '../images/githubLogo.png';
import reactLogo from '../images/reactLogo.svg';
import reduxLogo from '../images/reduxLogo.svg';
import javascriptLogo from '../images/javascriptLogo.svg';
import nodeLogo from '../images/nodeLogo.svg';
import mysqlLogo from '../images/mysqlLogo.svg';
import tailwindLogo from '../images/tailwindLogo.svg';
import expressLogo from '../images/expressLogo.svg';
import bootstrapLogo from '../images/bootstrapLogo.svg';
import ProjetsCarousel from '../components/ProjetsCarousel';

function Home() {
  return (
    <div className='py-8 text-white'>
      <div className='my-4'>
        <h2 className='text-center text-3xl'>
          Olá! Eu sou o <span className='text-orange text-4xl'>Thiago,</span>
        </h2>
        <h3 className='text-center text-xl my-1'>
          um desenvolvedor web{' '}
          <span className='text-blue text-2xl'>FullStack</span>
        </h3>
        <div className='flex justify-center mt-8 '>
          <button className='px-4 py-1 bg-green text-black rounded-full mx-2 text-xl'>
            Contato
          </button>
          <button className='px-6 py-1 bg-blue rounded-full mx-2 text-xl'>
            Currículo
          </button>
        </div>
        <div className='flex justify-center mt-6 py-2'>
          <img className='w-20' src={linkedinLogo} alt='Linkedin'></img>
          <img className='w-28' src={githubLogo} alt='Github'></img>
        </div>
        <hr className='w-2/4 text-grey mx-auto' />
      </div>
      <div className='px-6 py-4'>
        <h3 className='text-xl my-4 mt-4 text-paragraph'>
          Exemplos do meu trabalho:
        </h3>
        <ProjetsCarousel />
      </div>
      <div className='flex justify-center'>
        <button className='px-6 py-1 text-xl my-4 text-black bg-orange rounded-full'>
          Mais projetos
        </button>
      </div>
      <div className='px-6'>
        <h3 className='text-xl my-4 mt-4 text-paragraph'>
          Minhas principais tecnologias:
        </h3>
        <div className='grid grid-cols-2 gap-2'>
          <img className='h-8 rounded-full border border-grey' src={reactLogo} alt='React'></img>
          <img className='h-8 rounded-full border border-grey' src={reduxLogo} alt='Redux'></img>
          <img className='h-8 rounded-full border border-grey' src={javascriptLogo} alt='Javascript'></img>
          <img className='h-8 rounded-full border border-grey' src={nodeLogo} alt='Node'></img>
          <img className='h-8 rounded-full border border-grey' src={mysqlLogo} alt='MySQL'></img>
          <img className='h-8 rounded-full border border-grey' src={tailwindLogo} alt='Tailwind'></img>
          <img className='h-8 rounded-full border border-grey' src={expressLogo} alt='Express.js'></img>
          <img
            className='h-8 rounded-full border border-grey'
            src={bootstrapLogo}
            alt='Express.js'
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Home;
