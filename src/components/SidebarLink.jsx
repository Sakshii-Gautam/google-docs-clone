const SidebarLink = ({ href, src, alt }) => {
  return (
    <a href={href} target='_blank' rel='noopener noreferrer'>
      <img
        className='hidden md:flex cursor-pointer p-2 hover:rounded-lg hover:bg-[#edf2fa]'
        width={38}
        height={38}
        src={src}
        alt={alt}
      />
    </a>
  );
};

export default SidebarLink;
