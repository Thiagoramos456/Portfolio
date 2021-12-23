import React from 'react';
import ProjectCard from '../components/ProjectCard';
import imgProfile from '../images/foto-perfil.jpeg';
import imgPxArtProject from '../images/pixel-art-project.jpeg';
import imgTriviaProject from '../images/trivia-project.png';
import imgTrunfoProject from '../images/trunfo-project.png';

export default function Home() {
  return (
    <main>
      <section className='py-24 w-4/5 mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-white text-5xl leading-normal'>
              Sou o <span className='text-6xl text-orange'>Thiago</span>.
            </h1>
            <h1 className='text-white text-5xl leading-normal'>
              Desenvolvo aplicações FullStack.
            </h1>
            <div className='ml-4 mt-4'>
              <button className='bg-grey px-8 py-4 mx-5 my-4 text-white text-2xl rounded-full transition-all hover:px-12'>
                Sobre mim
              </button>
              <button className='bg-purple px-10 py-4 mx-5 my-4 text-white text-2xl rounded-full transition-all hover:px-12'>
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
      </section>
      <section className='bg-gray px-32 pb-8'>
        <p className='text-center text-white text-8xl tracking-widest select-none'>
          •••
        </p>
        <h2 className='text-white text-4xl mt-14'>
          Alguns exemplos do meu trabalho:
        </h2>
        <div>
          <ProjectCard
            projectName='Pixel Art'
            projectImg={imgPxArtProject}
            reversed
          >
            Uma simples aplicação que permite a criação de desenhos em pixel
            art.
          </ProjectCard>
          <ProjectCard
            projectName='Jogo de Trivia'
            projectImg={imgTriviaProject}
          >
            Um jogo de perguntas e resposta com pontuação e ranking.
          </ProjectCard>
          <ProjectCard
            projectName='Super Trunfo'
            projectImg={imgTrunfoProject}
            reversed
          >
            Preencha um formulário para criar um baralho do famoso jogo dos anos
            90 "Super Trunfo".
          </ProjectCard>
        </div>
      </section>
    </main>
  );
}
