import React from 'react';
import {
  time,
  comment,
  meet,
  user,
  userLogo,
  lock,
  star,
  move,
  cloud,
  logo,
} from '../assets';

const Header = () => {
  const iconButtons = [
    { src: star, alt: 'star', width: 30, height: 30 },
    { src: move, alt: 'move', width: 30, height: 30 },
    { src: cloud, alt: 'cloud', width: 30, height: 30 },
  ];

  const menuItems = [
    { href: '#', label: 'File' },
    { href: '#', label: 'Edit' },
    { href: '#', label: 'View' },
    { href: '#', label: 'Insert' },
    { href: '#', label: 'Format' },
    { href: '#', label: 'Tools' },
    { href: '#', label: 'Extensions' },
    { href: '#', label: 'Help' },
  ];

  const handleShareClick = async () => {
    try {
      const url = window.location.href;
      await navigator.clipboard.writeText(url);
      alert('URL copied to clipboard. You can now share the link with anyone.');
    } catch (error) {
      console.error('Failed to copy URL to clipboard:', error);
    }
  };

  return (
    <div className='header-container  p-4 bg-[#F8F9FA]'>
      <header className='header flex flex-end items-center'>
        <div className=' hidden md:flex  docs-branding-container'>
          <a href='#'>
            <img width={40} height={40} src={logo} alt='logo' />
          </a>
        </div>

        <div className='titlebar-containe w-full flex items-center justify-between'>
          <div className='title-bar-left '>
            <div className='title-bar-top flex'>
              <div className='title max-w-[389px] px-3'>
                <span className='text-[#444746] text-xl'>
                  Untitled document
                </span>
              </div>

              <div className='title-bar-left-icons'>
                {iconButtons.map((button, index) => (
                  <img
                    key={index}
                    className='inline cursor-pointer m-1 -mt-1 p-1 rounded-full hover:bg-[#edf2fa] '
                    height={button.height}
                    width={button.width}
                    src={button.src}
                    alt={button.alt}
                  />
                ))}
              </div>
            </div>

            <div className='menu-items px-3 pl-0'>
              <ul className='flex text-sm lg:text-md'>
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className='px-3 py-[0.1rem] rounded-md hover:bg-[#edf2fa]'
                  >
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='title-bar-right flex justify-end flex-1'>
            <div className='flex gap-6 items-center'>
              <img
                className='p-1 hidden md:flex cursor-pointer rounded-full hover:bg-[#edf2fa]'
                width={30}
                height={30}
                src={time}
                alt='edit-time'
              />
              <img
                className='p-1 hidden md:flex cursor-pointer rounded-full hover:bg-[#edf2fa]'
                width={34}
                height={34}
                src={comment}
                alt='comment'
              />
              <img
                className='p-1 hidden md:flex cursor-pointer rounded-full hover:bg-[#edf2fa]'
                width={34}
                height={34}
                src={meet}
                alt='meet'
              />
              <button
                onClick={handleShareClick}
                className=' hidden share-btn lg:flex px-4 h-10 items-center gap-2 rounded-full bg-[#c2e7ff] text-[#001d35] '
              >
                <img src={lock} alt='lock' width={18} height={18} />
                Share
              </button>
              <img
                className='flex lg:hidden p-1 md:flex cursor-pointer rounded-full hover:bg-[#edf2fa]'
                width={34}
                height={34}
                src={user}
                alt='user'
              />
              <img
                className=' p-1 hidden md:flex  cursor-pointer rounded-full hover:bg-[#edf2fa]'
                width={50}
                height={50}
                src={userLogo}
                alt='userLogo'
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
