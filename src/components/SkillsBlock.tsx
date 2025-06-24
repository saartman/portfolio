// Секция навыков для главной страницы
export default function SkillsBlock() {
  return (
    // Основной контейнер секции
    <section id="skills" className="min-h-[80vh] flex flex-col justify-center w-full mb-24">
      {/* Заголовок секции */}
      <h2 className="text-3xl font-bold mb-4">Навыки</h2>
      {/* Место для списка или описания навыков */}
      <p className="text-lg text-gray-700 dark:text-gray-300">Здесь будут ваши навыки.</p>
    </section>
  );
} 