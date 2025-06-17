import { BtnColored } from "@/components/elements/btn_colored";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-[80vh] flex flex-col justify-center w-full mb-24">
      <h2 className="text-3xl font-bold mb-4">Обо мне</h2>
      <BtnColored>
        Подробнее
      </BtnColored>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-6">Здесь будет информация о вас.</p>
    </section>
  );
} 