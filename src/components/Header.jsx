import React from 'react';

export default function Header() {
  return (
    <header className='flex justify-around py-7'>
      <nav>
        <ul className='flex'>
          <li className='mr-6'>
            <button className='text-white text-xl'>Home</button>
          </li>
          <li className='mr-6'>
            <button className='text-white text-xl'>Sobre</button>
          </li>
          <li className='mr-6'>
            <button className='text-white text-xl'>Projetos</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
