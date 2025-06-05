import React from "react";

export default function Licenses() {
  return (
    <section className="py-8 px-4 w-full">
      {/* Герой-блок с блюром и заголовком */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl shadow-md mb-6">
        <img
          src="/background-2.jpg"
          alt="Лицензии стоматологической клиники"
          className="absolute w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white">
            <p className="text-sm mb-2 opacity-80"></p>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Лицензии | Стоматологическая<br className="hidden md:block" />
              клиника EstetikDent
            </h1>
          </div>
        </div>
      </div>

      {/* Блок с лицензиями */}
      <div className="max-w-6xl mx-auto">
        <p className="text-gray-700 mb-6 text-lg text-center">
          Здесь вы можете ознакомиться с нашими действующими лицензиями.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <img
            src="/licenses/license1.jpg"
            alt="Лицензия 1"
            className="rounded-xl shadow-lg object-cover w-full h-[350px]"
          />
          <img
            src="/licenses/license2.jpg"
            alt="Лицензия 2"
            className="rounded-xl shadow-lg object-cover w-full h-[350px]"
          />
          <img
            src="/licenses/license3.jpg"
            alt="Лицензия 3"
            className="rounded-xl shadow-lg object-cover w-full h-[350px]"
          />
        </div>
      </div>
    </section>
  );
}
