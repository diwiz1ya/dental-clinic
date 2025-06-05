import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { priceData } from "./priceData";

const extraCategory = {
  title: "Циркониевые коронки на имплантатах",
  groups: [
    {
      title: "Под ключ",
      items: [
        {
          code: "--",
          name: "Циркониевые коронки на имплантатах (под ключ)",
          price: 110000,
        },
      ],
    },
    {
      title: "Виниры",
      items: [
        {
          code: "--",
          name: "Виниры керамические",
          price: 25000,
        },
      ],
    },
  ],
};

const extendedPriceData = [...priceData, extraCategory];

export default function MultiColumnCalculator() {
  const [currentCategory, setCurrentCategory] = useState(extendedPriceData[0]?.title || "");
  const [selected, setSelected] = useState([]);
  const [expandedGroup, setExpandedGroup] = useState(null);
  const [isInstallment, setIsInstallment] = useState(false);

  const toggleService = (service) => {
    setSelected((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleGroup = (groupTitle) => {
    setExpandedGroup((prev) => (prev === groupTitle ? null : groupTitle));
  };

  const total = selected.reduce((sum, s) => sum + s.price, 0);
  const monthlyPayment = Math.ceil(total / 12);

  const categoryObj = extendedPriceData.find((cat) => cat.title === currentCategory);
  const groups = categoryObj?.groups || [];

  return (
    <motion.section
      className="relative bg-gradient-to-br from-blue-50 to-white py-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-10">
          🦷 Калькулятор стоматологических услуг
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="space-y-3 relative pb-48"> {/* ВАЖНО: pb-48 создаёт место под PNG */}
  {/* PNG центр под кнопками */}
  <img
    src="/proze.png"
    alt="Протез"
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-52 opacity-95 drop-shadow-xl pointer-events-none"
  />

  {extendedPriceData.map((cat) => (
    <motion.button
      key={cat.title}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`w-full text-left px-4 py-3 rounded-xl transition font-medium shadow-sm ${
        currentCategory === cat.title
          ? "bg-blue-600 text-white shadow-md"
          : "bg-white text-gray-800 hover:bg-blue-100"
      }`}
      onClick={() => setCurrentCategory(cat.title)}
    >
      {cat.title}
    </motion.button>
  ))}
</div>


          <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl p-6 space-y-6">
            <h3 className="text-2xl font-semibold text-blue-700">
              {categoryObj?.title}
            </h3>

            {groups.map((group) => (
              <div key={group.title} className="space-y-2">
                <button
                  onClick={() => toggleGroup(group.title)}
                  className={`w-full px-4 py-3 text-left rounded-xl font-medium transition shadow-sm border ${
                    expandedGroup === group.title
                      ? "bg-blue-100 border-blue-400"
                      : "bg-gray-100 hover:bg-blue-50 border-gray-200"
                  }`}
                >
                  {group.title}
                </button>

                <AnimatePresence>
                  {expandedGroup === group.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4 pl-2"
                    >
                      {group.items.map((service) => {
                        const isSelected = selected.includes(service);
                        return (
                          <motion.div
                            key={service.code + service.name}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => toggleService(service)}
                            className={`p-4 rounded-xl cursor-pointer border transition ${
                              isSelected
                                ? "bg-blue-100 border-blue-500"
                                : "bg-white border-gray-200 hover:bg-gray-50"
                            }`}
                          >
                            <p className="font-semibold text-gray-800">{service.name}</p>
                            <p className="text-blue-600 font-bold">{service.price.toLocaleString()} ₽</p>
                            <p className="text-xs text-gray-400">Код: {service.code}</p>
                          </motion.div>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-10 bg-white border-t border-gray-200 py-6 px-6 rounded-xl shadow-lg sticky bottom-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="space-y-1 text-lg font-semibold text-gray-800">
              <div>
                Итого: <span className="text-blue-800">{total.toLocaleString()} ₽</span>
              </div>
              <label className="inline-flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={isInstallment}
                  onChange={() => setIsInstallment(!isInstallment)}
                  className="form-checkbox rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">Рассчитать рассрочку на 12 месяцев</span>
              </label>
              {isInstallment && (
                <div className="text-sm text-gray-500">
                  ≈ <span className="font-medium text-blue-700">{monthlyPayment.toLocaleString()} ₽</span> в месяц
                </div>
              )}
            </div>
            <button
              disabled={selected.length === 0}
              onClick={() =>
                alert(
                  `Вы выбрали ${selected.length} услуг на ${total.toLocaleString()} ₽`
                )
              }
              className={`px-6 py-3 rounded-lg font-medium transition text-white ${
                selected.length === 0
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700"
              }`}
            >
              Отправить заявку
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
