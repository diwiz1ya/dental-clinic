// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 text-white pt-0">
      {/* 1) SVG-волна сверху */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180" style={{ height: "80px" }}>
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1200 0L0 0 892.25 114.72 1200 0z"
            fill="#1e3a8a" /* цвет совпадает с from-blue-900 */
          />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Если у вас есть силуэт Пскова — можно раскомментировать блок ниже и подставить путь.
            Текст станет поверх силуэта. */}
        {/*
        <div
          className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-10"
          style={{
            backgroundImage: "url('/images/pskov-silhouette.png')",
          }}
        />
        */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 2.1 Логотип + описание */}
          <div
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg flex flex-col items-start"
          >
            <img
              src="/path/to/estetikdent-logo.png"
              alt="ESTETIKDENT Logo"
              className="h-20 w-auto mb-4"
            />
            <p className="text-gray-100 text-lg leading-relaxed">
              клиника{" "}
              <span className="text-indigo-300 font-semibold uppercase">
                ESTETIKDENT
              </span>
              <br />
              — ваша уверенность в каждой улыбке
              <br />
              <span className="text-indigo-400 font-semibold">Псков</span>
            </p>
          </div>

          {/* 2.2 Контакты */}
          <div
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl uppercase font-bold tracking-wide text-gray-100 mb-6">
              Контакты
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-300 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5h2l3 7-1 3 4 4 3-1 7 3v2a2 2 0 01-2 2h-1C7.82 22 2 16.18 2 9V8a2 2 0 012-2z"
                  />
                </svg>
                <a
                  href="tel:+79118953535"
                  className="text-gray-100 hover:text-indigo-300 transition-colors duration-200 text-lg"
                >
                  +7 (911) 895-35-35
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-300 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 11c0 1.657-1.343 3-3 3S6 12.657 6 11s1.343-3 3-3 3 1.343 3 3zm0 0c0 4.42 4 8 4 8s4-3.58 4-8a4 4 0 10-8 0z"
                  />
                </svg>
                <div className="text-gray-100 text-lg">
                  ул. Льва Толстого, д. 35
                  <br />
                  <span className="text-indigo-300 font-semibold">Псков</span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-300 flex-shrink-0 mt-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12h2a2 2 0 002-2V6a2 2 0 00-2-2h-4l-2-2h-4l-2 2H4a2 2 0 00-2 2v4a2 2 0 002 2h2m4 4v2m0 4h.01"
                  />
                </svg>
                <a
                  href="mailto:clinic@estetikdent.ru"
                  className="text-gray-100 hover:text-indigo-300 transition-colors duration-200 text-lg"
                >
                  clinic@estetikdent.ru
                </a>
              </li>
            </ul>
          </div>

          {/* 2.3 Навигация */}
          <div
            className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-2xl uppercase font-bold tracking-wide text-gray-100 mb-6">
              Навигация
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#about"
                  className="text-gray-100 hover:text-indigo-300 transition-colors duration-200 text-lg"
                >
                  О клинике
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-100 hover:text-indigo-300 transition-colors duration-200 text-lg"
                >
                  Услуги
                </a>
              </li>
              <li>
                <a
                  href="#doctors"
                  className="text-gray-100 hover:text-indigo-300 transition-colors duration-200 text-lg"
                >
                  Врачи
                </a>
              </li>
              <li>
                <a
                  href="#price"
                  className="text-gray-100 hover:text-indigo-300 transition-colors duration-200 text-lg"
                >
                  Прайс
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className="text-gray-100 hover:text-indigo-300 transition-colors duration-200 text-lg"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 3) Нижний раздел: разделитель + копирайт */}
        <div className="mt-12 border-t border-blue-700 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2025{" "}
            <span className="text-indigo-300 font-semibold">ESTETIKDENT</span>{" "}
            | Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
}
