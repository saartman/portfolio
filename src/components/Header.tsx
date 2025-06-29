import Image from 'next/image';
import Link from 'next/link';
import Logo from '@/assets/logo/logo1.svg';

/**
 * Компонент Header — шапка сайта с навигацией и логотипом.
 * Содержит мобильное меню (иконка), навигацию по секциям и логотип.
 * Фиксируется в верхней части экрана.
 */
export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex flex-1 flex-grow items-center h-[100px] w-full max-w-screen bg-black mix-blend-exclusion px-[1.5vw]">
      <div className="flex w-full items-center justify-between h-full">
        {/* Мобильное меню (отображается только на мобильных) */}
        <button className="md:hidden p-2">
          {/* Иконка бургер-меню */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* Навигация по секциям сайта (отображается на десктопе) */}
        <nav className="hidden md:flex items-center">
          <a href="#about" className="text-white hover:text-gray-700 font-extrabold text-[35px]">ОБО МНЕ。</a>
          <a href="#projects" className="text-white hover:text-gray-700 font-extrabold text-[35px]">ПРОЕКТЫ。</a>
          <a href="#contact" className="text-white hover:text-gray-700 font-extrabold text-[35px]">КОНТАКТЫ。</a>
        </nav>
        {/* Логотип сайта (слева) */}
        <Link href="/" className="flex items-center h-full p-2">
          <Logo className="h-full text-white" />
        </Link>
      </div>
    </header>
  );
}; 