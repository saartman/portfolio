import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo/logo1.svg';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[100px] bg-black mix-blend-exclusion content-center">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between" >
        
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-white  hover:text-gray-700 font-bold text-[35px]">
            ОБО МНЕ。
          </a>
          <a href="#projects" className="text-white hover:text-gray-700 font-bold text-[35px]">
            ПРОЕКТЫ。
          </a>
          <a href="#contact" className="text-white hover:text-gray-700 font-bold text-[35px]">
            КОНТАКТЫ。
          </a>
        </nav>
        
        <Link href="/" className="flex items-center h-full">
          <div className="h-full p-[10px]">
            <Logo className="h-full w-auto text-white" />
          </div>
        </Link>

        {/* <Link href="/" className="flex items-center h-full">
          <div className="h-full p-[10px]">
            <Logo
              src="/logo/logo1.svg"
              alt="Portfolio Logo"
              width={80}
              height={40}
              className="h-full w-auto object-contain fill-white"
              priority
            />
          </div>
        </Link> */}

      </div>
    </header>
  );
}; 