import { useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import furniroLogo from '../assets/furniro_logo.svg';
import logo from '../assets/logo.svg';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='flex h-16 w-full items-center justify-center'>
      <header className='relative flex w-full min-w-min max-w-7xl items-center justify-between bg-white p-8'>
        <img
          className='hidden cursor-pointer lg:block'
          src={furniroLogo}
          alt='Funiro Logo'
        />
        <img
          className='z-10 cursor-pointer lg:hidden'
          src={logo}
          alt='Funiro Logo'
        />
        <nav className='hidden md:block'>
          <ul className='list-none'>
            <li className='inline-block px-6 text-xl font-medium transition-all hover:text-zinc-600'>
              <a href='#'>Home</a>
            </li>
            <li className='inline-block px-6 text-xl font-medium transition-all hover:text-zinc-600'>
              <a href='#'>Shop</a>
            </li>
            <li className='inline-block px-6 text-xl font-medium transition-all hover:text-zinc-600'>
              <a href='#'>About</a>
            </li>
            <li className='inline-block px-6 text-xl font-medium transition-all hover:text-zinc-600'>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='hidden gap-8 md:flex'>
          <AiOutlineUser
            size={22}
            className='cursor-pointer transition-all hover:text-zinc-600'
          />
          <AiOutlineSearch
            size={22}
            className='cursor-pointer transition-all hover:text-zinc-600'
          />
          <AiOutlineHeart
            size={22}
            className='cursor-pointer transition-all hover:text-zinc-600'
          />
          <AiOutlineShoppingCart
            size={22}
            className='cursor-pointer transition-all hover:text-zinc-600'
          />
        </div>
        <div className='z-10 md:hidden'>
          <Hamburger color='#000' toggled={isOpen} toggle={setIsOpen} />
        </div>
        {isOpen && (
          <div className='absolute right-0 top-0 h-auto w-full rounded-b-lg border border-zinc-200 bg-white p-4 shadow'>
            <nav className='mt-24 h-4/5'>
              <ul className='flex list-none flex-col gap-4'>
                <li className='flex h-16 items-center px-4 text-xl font-medium hover:bg-slate-100 hover:shadow'>
                  <a href='#'>Home</a>
                </li>
                <li className='flex h-16 items-center px-4 text-xl font-medium hover:bg-slate-100 hover:shadow'>
                  <a href='#'>Shop</a>
                </li>
                <li className='flex h-16 items-center px-4 text-xl font-medium hover:bg-slate-100 hover:shadow'>
                  <a href='#'>About</a>
                </li>
                <li className='flex h-16 items-center px-4 text-xl font-medium hover:bg-slate-100 hover:shadow'>
                  <a href='#'>Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
