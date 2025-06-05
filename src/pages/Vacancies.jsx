import React from "react";

const vacancyList = [
  {
    title: "Врач-стоматолог-терапевт",
    desc: "Опыт работы от 3 лет, действующий сертификат, доброжелательность и ответственность.",
  },
  {
    title: "Врач-стоматолог-ортодонт",
    desc: "Работа с современными методиками лечения, наличие портфолио приветствуется.",
  },
  {
    title: "Ассистент стоматолога",
    desc: "Среднее медицинское образование, готовность обучаться и помогать врачам в работе.",
  },
  {
    title: "Администратор клиники",
    desc: "Грамотная речь, опыт работы с клиентами, уверенный пользователь ПК.",
  },
];

export default function Vacancies() {
  return (
    <section className="py-8 px-4 w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Заголовок с фоновым изображением */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-md mb-10">
        <img
          src="/background-2.jpg"
          alt="Вакансии клиники"
          className="absolute w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white">Вакансии</h1>
        </div>
      </div>

      {/* Список вакансий */}
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-700 mb-8 text-lg text-center">
          Мы активно развиваемся и будем рады видеть в команде новых профессионалов.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {vacancyList.map((vacancy, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-6 flex flex-col">
              <h2 className="text-xl font-bold text-blue-800 mb-2">{vacancy.title}</h2>
              <p className="text-gray-600 flex-1">{vacancy.desc}</p>
              <a
                href="mailto:clinic@estetikdent.ru"
                className="mt-4 inline-block text-blue-700 font-semibold hover:underline"
              >
                Отправить резюме
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}