// src/components/steps/CategoryStep.jsx

import React from "react";
import { motion } from "framer-motion";
import { priceData } from "../priceData";

export default function CategoryStep({ onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        Выберите категорию услуг
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {priceData.map((category) => (
          <motion.button
            key={category.title}
            onClick={() => onSelect(category.title)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="py-4 px-3 bg-blue-50 hover:bg-blue-100 text-center rounded-lg shadow-sm border border-transparent transition"
          >
            <span className="text-base font-medium">{category.title}</span>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
}
