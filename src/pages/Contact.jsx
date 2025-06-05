import React from "react";

export default function ContactPage() {
  return (
    <section className="py-10 px-4 w-full bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Фон и заголовок */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-2xl shadow-xl mb-10">
        <img
          src="/background-2.jpg"
          alt="Контакты стоматологии"
          className="absolute w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow animate-fade-in">
            Контакты | Стоматология EstetikDent
          </h1>
        </div>
      </div>

      {/* Контент */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 animate-slide-in-up">
        {/* График + Контакты */}
        <div className="bg-blue-700 text-white rounded-2xl shadow-lg p-8 space-y-6">
          <h2 className="text-2xl font-bold mb-4">📅 Рабочее время</h2>
          <table className="w-full text-left text-white font-medium">
            <tbody>
              {[
                ["Понедельник", "09:00–20:00"],
                ["Вторник", "09:00–20:00"],
                ["Среда", "09:00–20:00"],
                ["Четверг", "09:00–20:00"],
                ["Пятница", "09:00–20:00"],
                ["Суббота", "09:00–15:00"],
                ["Воскресенье", "Выходной"],
              ].map(([day, time], index) => (
                <tr key={index} className="border-b border-white/20">
                  <td className="py-2 pr-6">{day}</td>
                  <td className="py-2 font-semibold">
                    {time === "Выходной" ? (
                      <span className="bg-white text-blue-700 px-2 py-1 rounded font-bold">
                        {time}
                      </span>
                    ) : (
                      time
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="pt-6 space-y-3">
            <h3 className="text-2xl font-extrabold">📍 Псков, ул. Льва Толстого 35</h3>
            <a
              href="tel:+79118953535"
              className="inline-block px-6 py-3 bg-white text-blue-700 rounded-xl font-bold shadow hover:bg-blue-50 transition"
            >
              📞 +7 (911) 895-35-35
            </a>
          </div>
        </div>

        {/* Яндекс.Карта */}
        <div className="w-full h-[450px] overflow-hidden rounded-2xl shadow-xl">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=28.340307%2C57.819336&z=16&pt=28.340307,57.819336,pm2rdl"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Карта Псков ул. Льва Толстого"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
