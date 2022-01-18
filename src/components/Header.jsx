import React from 'react';

export default function Header() {
  return (
    <header className='flex py-7'>
      <nav className='flex w-full justify-between'>
        <ul className='flex ml-24'>
          <li className='mr-8'>
            <button className='text-white text-xl'>Home</button>
          </li>
          <li className='mr-8'>
            <button className='text-white text-xl'>Sobre</button>
          </li>
          <li className='mr-8'>
            <button className='text-white text-xl'>Projetos</button>
          </li>
        </ul>
        <button className='mr-20 text-white bg-grey px-6 rounded-full'>
          Contato
        </button>
      </nav>
    </header>
  );
}
