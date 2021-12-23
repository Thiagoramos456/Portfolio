import React from 'react';

function ProjectCard({ projectImg, projectName, reversed, children }) {
  return (
    <div
      className={`flex ${
        reversed ? 'flex-row-reverse' : ''
      } w-11/12 bg-dark-card my-10 px-6 py-8 rounded-lg`}
    >
      <img
        className='w-6/12 h-6/12 rounded-md border-2 border-gray'
        src={projectImg}
        alt={projectName}
      />
      <div className='w-full'>
        <h3 className='text-white text-center text-4xl mt-5'>
          Paleta de Pixel Art
        </h3>
        <p className='text-paragraph text-xl px-6 text-center mt-10 italic'>
          {children}
        </p>
      </div>
    </div>
  );
}

export default ProjectCard;
