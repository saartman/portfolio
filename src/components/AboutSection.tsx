import { BtnColored } from "@/components/elements/btn_colored";
import { Separator } from "@/components/ui/separator";

// Секция "Обо мне" для главной страницы по макету Figma
export default function AboutSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[80vh] bg-white">
      <div className="flex flex-col md:flex-row w-full gap-12 px-4 py-12 items-center justify-center">
        {/* Левая часть: Имя и специализация */}
        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col gap-6 items-start w-full">
            <span className="font-manrope font-extrabold text-[54px] uppercase text-black leading-[1.3] w-full">Путь креатива 2019-2025</span>
          </div>
          <h1 className="font-['Montserrat_Alternates'] font-bold text-[110px] leading-none tracking-[-0.05em] uppercase text-black w-full">
            ҐлҼҔ <br /> ФӚдҨрӨв
          </h1>
          <span className="font-manrope font-extrabold text-[54px] uppercase text-black leading-[1.3] w-full">Дизайн</span>
        </div>
        {/* Вертикальный separator */}
        {/*<div className="hidden md:flex w-full">
          <Separator orientation="vertical" className="w-full" />
        </div>*/}
        {/* Правая часть: Кто я? и кнопки */}
        <div className="flex flex-col gap-10 items-center md:items-start w-full">
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start w-full">
            <span className="font-manrope font-bold text-[35px] text-black uppercase w-full">Кто я? для</span>
            <div className="flex flex-row gap-2.5 w-full">
              <BtnColored color="roze" variant="active">Рекрутеров、</BtnColored>
              <BtnColored color="blue" variant="default">Руководителей、</BtnColored>
              <BtnColored color="green" variant="default">Разработчиков</BtnColored>
            </div>
          </div>
          <p className="font-manrope font-bold text-[38px] text-black text-center md:text-left leading-tight w-full">
            Я дизайнер интерфейсов, создающий удобные, эстетичные и эффективные цифровые продукты. Моя цель — находить баланс между бизнес-задачами и потребностями пользователей, превращая сложные процессы в интуитивно понятные интерфейсы.
          </p>
        </div>
      </div>
    </section>
  );
} 