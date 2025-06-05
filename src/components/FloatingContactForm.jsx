// src/components/FloatingContactForm.jsx

import React from "react";
import chairIcons from "/295386a8-a503-4452-bcba-10977fc207ff.png";

export default function FloatingContactForm() {
  return (
    // Уменьшили z-index с z-30 до z-10, чтобы не перекрывать калькулятор
    <div className="absolute top-[80vh] left-0 right-0 z-10 flex justify-end pr-8">
      <div className="bg-white px-6 py-8 rounded-xl shadow-xl w-full max-w-3xl flex flex-col md:flex-row items-start gap-6 border-t border-gray-300">
        {/* Левая часть - картинка */}
        <div className="w-full md:w-[50%] flex justify-center items-start">
          <img
            src={chairIcons}
            alt="Стоматологическое кресло"
            className="w-[260px] md:w-[300px] max-w-full object-contain"
          />
        </div>

        {/* Правая часть - форма */}
        <form className="ml-auto w-[320px] space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              № телефона <span className="text-red-600">*</span>
            </label>
            <input
              type="tel"
              placeholder="Введите номер"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Выберите услугу <span className="text-red-600">*</span>
            </label>
            <select
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
            >
              <option>Консультация</option>
              <option>Лечение</option>
              <option>Удаление</option>
              <option>Отбеливание</option>
              <option>Протезирование</option>
              <option>Имплантация</option>
              <option>Другое</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Желаемая дата <span className="text-red-600">*</span>
            </label>
            <input
              type="date"
              required
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              Введите дату, например: 12.05.2025
            </p>
          </div>
          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" required className="mt-1" />
            <label className="text-gray-800">
              Я согласен с обработкой персональных данных
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-md transition"
          >
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}
