import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg backdrop-blur-sm50 bg-[#03001417 backdrop-blur-md z-[50]">
      <div className="h-full w-full flex flex-row items-center justify-center m-auto gap-14">
        <Link href="/" className="cursor-pointer hover:text-blue-100">
          Home
        </Link>

        <Link href="/#skills" className="cursor-pointer hover:text-blue-100">
          About Me
        </Link>
        <Link href="/projects" className="cursor-pointer hover:text-blue-100">
          Projects
        </Link>
        <Link href="/#experiences" className="cursor-pointer hover:text-blue-100">
          Experience
        </Link>
        <Link href="/#contact" className="cursor-pointer hover:text-blue-100">
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
