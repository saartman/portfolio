// Блок с описанием проекта Union
export default function UnionBlock() {
  return (
    // Карточка проекта с кастомными угловыми квадратами
    <div className="relative mb-8 p-6 bg-white border-3">
      {/* Квадраты по углам */}
      <span className="absolute w-5 h-5 bg-gray-400 -top-3 -left-3"></span>
      <span className="absolute w-5 h-5 bg-gray-400 -top-3 -right-3"></span>
      <span className="absolute w-5 h-5 bg-gray-400 -bottom-3 -left-3"></span>
      <span className="absolute w-5 h-5 bg-gray-400 -bottom-3 -right-3"></span>
      {/* Название проекта */}
      <h3 className="text-2xl font-bold mb-2">Union</h3>
      {/* Краткое описание проекта */}
      <p className="text-gray-700 dark:text-gray-300">Описание проекта Union. Здесь можно добавить детали, ссылки, изображения и т.д.</p>
    </div>
  );
} 