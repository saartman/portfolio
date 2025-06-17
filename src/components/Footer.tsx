import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="/logo/logo1.svg"
              alt="Portfolio Logo"
              width={40}
              height={40}
              className="h-full w-auto object-contain"
            />
            <p className="text-gray-600">
              Создаю современные веб-приложения с использованием передовых технологий.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  Обо мне
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                  Проекты
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:your@email.com" className="text-gray-600 hover:text-gray-900">
                  your@email.com
                </a>
              </li>
              <li>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Все права защищены</p>
        </div>
      </div>
    </footer>
  );
}; 