import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaVk, FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      {/* Верхняя инфо-панель */}
      <div className="bg-white text-sm text-gray-700 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-semibold">+7 (911) 895-35-35</span>
              <span className="text-gray-500 text-sm">ул. Льва Толстого 35</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Режим работы:</span>
              <span className="text-gray-500 text-sm">
                Пн-Пт 09:00–20:00 | Сб 09:00–15:00
              </span>
            </div>
          </div>
          <div className="flex gap-4 text-gray-600 text-lg">
            <a href="https://vk.com" target="_blank" rel="noreferrer"><FaVk /></a>
            <a href="https://wa.me/79118953535" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Главный хедер */}
      <div className="bg-white/90 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Лого"
              className="w-14 h-14 rounded-full shadow"
            />
            <span className="font-extrabold text-xl text-blue-700 tracking-tight select-none">
              ESTETIKDENT
            </span>
          </Link>

          {/* Навигация десктоп */}
          <nav className="hidden md:flex gap-8 items-center">
            <Link to="/about" className="text-gray-700 hover:text-blue-700 font-medium">О клинике</Link>
            <a href="#services" className="text-gray-700 hover:text-blue-700 font-medium">Услуги</a>
            <a href="#doctors" className="text-gray-700 hover:text-blue-700 font-medium">Врачи</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-700 font-medium">Отзывы</a>
            <Link to="/price" className="text-gray-700 hover:text-blue-700 font-medium">Прайс</Link>
            <Link to="/licenses" className="text-gray-700 hover:text-blue-700 font-medium">Лицензии</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-700 font-medium">Контакты</Link>
          </nav>

          {/* Кнопка записи */}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold shadow hidden md:block"
          >
            Записаться
          </a>

          {/* Мобильное меню кнопка */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-blue-700"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-inner">
          <Link to="/about" className="block text-gray-700 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>О клинике</Link>
          <a href="#services" className="block text-gray-700 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Услуги</a>
          <a href="#doctors" className="block text-gray-700 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Врачи</a>
          <a href="#reviews" className="block text-gray-700 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Отзывы</a>
          <Link to="/price" className="block text-gray-700 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Прайс</Link>
          <Link to="/licenses" className="block text-gray-700 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Лицензии</Link>
          <Link to="/contact" className="block text-gray-700 hover:text-blue-700" onClick={() => setMobileMenuOpen(false)}>Контакты</Link>
          <a href="#contact" className="block text-center mt-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold" onClick={() => setMobileMenuOpen(false)}>Записаться</a>
        </div>
      )}
    </header>
  );
}
