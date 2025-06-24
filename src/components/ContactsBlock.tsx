// Секция контактов для главной страницы
export default function ContactsBlock() {
  return (
    // Основной контейнер секции
    <section id="contact" className="min-h-[80vh] flex flex-col justify-center w-full mb-24">
      {/* Заголовок секции */}
      <h2 className="text-3xl font-bold mb-4">Контакты</h2>
      {/* Место для контактной информации */}
      <p className="text-lg text-gray-700 dark:text-gray-300">Здесь будут ваши контакты.</p>
    </section>
  );
} 