import React from 'react';
import ProjectCard from '../components/ProjectCard';
import imgProfile from '../images/foto-perfil.jpeg';
import imgPxArtProject from '../images/pixel-art-project.jpeg';

export default function Home() {
  return (
    <main>
      <section className='py-28 w-4/5 mx-auto'>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-white text-5xl leading-normal'>
              Sou o Thiago.
            </h1>
            <h1 className='text-white text-5xl leading-normal'>
              Desenvolvo aplicações FullStack.
            </h1>
            <div className='ml-4 mt-4'>
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
      </section>
      <section className='bg-gray py-24 px-32'>
        <h2 className='text-white text-4xl'>
          Alguns exemplos do meu trabalho:
        </h2>
        <div>
          <ProjectCard projectName='Pixel Art' projectImg={imgPxArtProject}>
            Uma simples aplicação que permite a criação de
            desenhos em pixel art.
          </ProjectCard>
		  <ProjectCard projectName='Pixel Art' projectImg={imgPxArtProject} reversed>
            Uma simples aplicação que permite a criação de
            desenhos em pixel art.
          </ProjectCard>
		  <ProjectCard projectName='Pixel Art' projectImg={imgPxArtProject}>
            Uma simples aplicação que permite a criação de
            desenhos em pixel art.
          </ProjectCard>
        </div>
      </section>
    </main>
  );
}
