import { BtnColored } from "@/components/elements/btn_colored";

// Секция "Обо мне" для главной страницы
export default function AboutSection() {
  return (
    // Основной контейнер секции
    <section id="about" className="min-h-[80vh] flex flex-col justify-center w-full mb-24">
      {/* Заголовок секции */}
      <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
      {/* Кнопка для перехода к подробной информации */}
      <BtnColored>
        Подробнее
      </BtnColored>
      {/* Описание или информация о себе */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">Здесь будет информация о вас.</p>
    </section>
  );
} 