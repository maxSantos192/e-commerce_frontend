import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fade as Hamburger } from 'hamburger-react';
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import furniroLogo from '../assets/furniro_logo.svg';
import logo from '../assets/logo.svg';

interface MenuItemProps {
  url: string;
  label: string;
}

function NavItem({
  item,
  className,
}: {
  item: MenuItemProps;
  className?: string;
}) {
  return (
    <li className={className}>
      <Link
        to={item.url}
        className='hover:text-zinc-600 text-base font-medium transition-all'
      >
        {item.label}
      </Link>
    </li>
  );
}

function IconNav() {
  return (
    <div className='hidden gap-8 md:flex'>
      {[
        AiOutlineUser,
        AiOutlineSearch,
        AiOutlineHeart,
        AiOutlineShoppingCart,
      ].map((Icon, index) => (
        <Icon
          key={`icon-${index}`}
          size={22}
          className='hover:text-zinc-600 cursor-pointer transition-all'
        />
      ))}
    </div>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menuItems: MenuItemProps[] = [
    { label: 'Home', url: '/' },
    { label: 'Shop', url: '/shop' },
    { label: 'About', url: '/about' },
    { label: 'Contact', url: '/contact' },
  ];

  return (
    <div className='flex h-16 w-full items-center justify-center'>
      <header className='relative flex w-full max-w-7xl items-center justify-between bg-mwhite px-8'>
        <Link to='/' className='hidden cursor-pointer lg:block'>
          <img src={furniroLogo} alt='Funiro Logo' />
        </Link>
        <Link to='/' className='z-30 cursor-pointer lg:hidden'>
          <img src={logo} alt='Funiro Logo' />
        </Link>

        <nav className='hidden md:block'>
          <ul className='list-none'>
            {menuItems.map((item, index) => (
              <NavItem
                key={`menu-item-${index}`}
                item={item}
                className='inline-block px-6 transition-all hover:text-mgold'
              />
            ))}
          </ul>
        </nav>

        <IconNav />

        <div className='z-30 md:hidden'>
          <Hamburger color='#000' toggled={isOpen} toggle={setIsOpen} />
        </div>

        {isOpen && (
          <div className='absolute right-0 top-0 z-20 h-auto w-full rounded-b-lg bg-mwhite p-4 shadow'>
            <nav className='mt-20 h-4/5'>
              <ul className='flex flex-col gap-4'>
                {menuItems.map((item, index) => (
                  <NavItem
                    key={`mobile-menu-item-${index}`}
                    item={item}
                    className='hover:bg-slate-100 flex h-16 items-center px-4 text-base font-medium hover:shadow'
                  />
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}

export default Header;
