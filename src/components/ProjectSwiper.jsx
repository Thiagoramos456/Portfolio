import React from 'react';

function ProjectSwiper({ thumb, text }) {
  return (
    <div className="flex flex-col items-center">
      <img className="object-fit h-44" src={thumb} alt={text} />
      <span className="text-xl mt-2 pt-2 pb-8 text-blue">{text}</span>
    </div>
  );
}

export default ProjectSwiper;
