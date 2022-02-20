import React from 'react';
import linkedinLogo from '../images/linkedin-logo.png';

export default function Header() {
  return (
    <header className='sm:flex py-7 hidden'>
      <nav className='flex w-full'>
        <ul className='flex ml-24 items-center'>
          <li className='mr-8'>
            <button className='text-xl'>Home</button>
          </li>
          <li className='mr-8'>
            <button className='text-xl'>Sobre</button>
          </li>
          <li className='mr-8'>
            <button className='text-xl'>Projetos</button>
          </li>
        </ul>
        <div className="flex">
          <img className="w-16" src={linkedinLogo} alt="Linkedin"></img>
          <img className="w-16" src={linkedinLogo} alt="Linkedin"></img>
        </div>
      </nav>
    </header>
  );
}
