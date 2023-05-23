import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { calendar, contacts, keep, location, tasks } from '../assets';
import SidebarLink from './SidebarLink';

const sidebarLinks = [
  {
    href: 'https://calendar.google.com/',
    src: calendar,
    alt: 'calendar',
  },
  {
    href: 'https://keep.google.com/',
    src: keep,
    alt: 'keep',
  },
  {
    href: 'https://workspace.google.com/marketplace/app/tasksboard_for_google_tasks/938219596206',
    src: tasks,
    alt: 'tasks',
  },
  {
    href: 'https://contacts.google.com/',
    src: contacts,
    alt: 'contacts',
  },
  {
    href: 'https://maps.google.com/',
    src: location,
    alt: 'location',
  },
];

const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <>
      {isSidebarVisible && (
        <div className='fixed right-0 ml-4 bg-[#F8F9FA] flex flex-col p-2 gap-8'>
          {sidebarLinks.map((link, index) => (
            <SidebarLink
              key={index}
              href={link.href}
              src={link.src}
              alt={link.alt}
            />
          ))}
          <hr />
          <p className='text-4xl text-center text-gray-600 cursor-pointer px-2 hover:rounded-lg hover:bg-[#edf2fa]'>
            +
          </p>
        </div>
      )}
      <button
        className='fixed right-0 bottom-10 ml-4 mt-4 bg-[#F8F9FA] p-2 rounded-full shadow'
        onClick={toggleSidebar}
      >
        {!isSidebarVisible ? (
          <ChevronLeft size={24} />
        ) : (
          <ChevronRight size={24} />
        )}
      </button>
    </>
  );
};

export default Sidebar;
