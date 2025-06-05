// src/components/steps/ServiceStep.jsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { priceData } from "../priceData";

export default function ServiceStep({
  category,
  selected,
  setSelected,
  onBack,
  onNext,
}) {
  // Находим массив услуг для текущей категории
  const categoryObj = priceData.find((cat) => cat.title === category);
  const services = categoryObj ? categoryObj.items : [];

  // Состояние: показывать ли полный список на весь контейнер
  const [expanded, setExpanded] = useState(false);

  // Переключатель выбранной услуги
  const toggleService = (service) => {
    const exists = selected.includes(service);
    setSelected(
      exists
        ? selected.filter((s) => s !== service)
        : [...selected, service]
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {/* Заголовок */}
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Услуги: <span className="font-medium text-blue-700">{category}</span>
      </h3>

      {/* Кнопка для разворачивания полного списка */}
      {!expanded && (
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setExpanded(true)}
            className="flex items-center px-6 py-3 bg-blue-50 hover:bg-blue-100 border border-gray-300 rounded-lg shadow-sm transition"
          >
            <span className="mr-2 font-medium text-gray-800">
              {selected.length > 0
                ? `Выбрано: ${selected.length}`
                : "Выбрать услуги"}
            </span>
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Если expanded=true, показываем полный список на ширину контейнера */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.3 }}
        >
          {/* Список услуг */}
          <div className="grid gap-4 mb-6">
            {services.map((service) => {
              const isChecked = selected.includes(service);
              return (
                <label
                  key={service.code + service.name}
                  className={`
                    flex justify-between items-center p-4 border rounded-lg shadow-sm cursor-pointer transition
                    ${isChecked
                      ? "bg-blue-50 border-blue-400"
                      : "bg-white border-gray-200 hover:border-gray-300"}
                  `}
                >
                  {/* Левая часть: чекбокс и описание */}
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleService(service)}
                      className="mt-1 mr-3 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {service.name}
                      </p>
                      <p className="text-blue-700 font-semibold">
                        {service.price.toLocaleString()} ₽
                      </p>
                      {service.code && (
                        <p className="text-xs text-gray-500">
                          Код: {service.code}
                        </p>
                      )}
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          {/* Кнопки «Готово» и навигация */}
          <div className="flex justify-between items-center">
            {/* Кнопка «Свернуть» */}
            <button
              onClick={() => setExpanded(false)}
              className="text-blue-600 hover:underline flex items-center"
            >
              Свернуть список
              <svg
                className="w-5 h-5 ml-1 transform rotate-180 text-gray-600"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Навигационные кнопки */}
            <div className="ml-auto flex space-x-4">
              <button
                onClick={onBack}
                className="text-blue-600 hover:underline flex items-center"
              >
                ← Назад
              </button>
              <button
                onClick={onNext}
                disabled={selected.length === 0}
                className={`
                  px-6 py-2 rounded-lg text-white font-medium transition
                  ${selected.length === 0
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"}
                `}
              >
                Далее →
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Если список свернут, показываем только «Назад» и «Далее» */}
      {!expanded && (
        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="text-blue-600 hover:underline flex items-center"
          >
            ← Назад
          </button>
          <button
            onClick={onNext}
            disabled={selected.length === 0}
            className={`
              ml-auto px-6 py-2 rounded-lg text-white font-medium transition
              ${selected.length === 0
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"}
            `}
          >
            Далее →
          </button>
        </div>
      )}
    </motion.div>
  );
}
