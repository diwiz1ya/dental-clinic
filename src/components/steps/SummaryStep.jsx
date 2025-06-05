// src/components/steps/SummaryStep.jsx

import React from "react";
import { motion } from "framer-motion";

export default function SummaryStep({ services, onBack, onSubmit }) {
  const total = services.reduce((sum, s) => sum + s.price, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Подтвердите выбор
      </h3>

      <ul className="space-y-3 mb-6">
        {services.map((service, idx) => (
          <li
            key={service.code + service.name + idx}
            className="flex justify-between border-b pb-2"
          >
            <span className="text-gray-700">{service.name}</span>
            <span className="text-gray-900 font-semibold">
              {service.price.toLocaleString()} ₽
            </span>
          </li>
        ))}
      </ul>

      <div className="text-lg font-semibold text-center mb-6">
        Итого: <span className="text-blue-800">{total.toLocaleString()} ₽</span>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="text-blue-600 hover:underline flex items-center"
        >
          ← Назад
        </button>
        <button
          onClick={onSubmit}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Отправить заявку
        </button>
      </div>
    </motion.div>
  );
}
