// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import FloatingContactForm from "./components/FloatingContactForm";
import ContactImageBlock from "./components/ContactImageBlock";
import MultiColumnCalculator from "./components/MultiColumnCalculator";
import About from "./components/About";
import FullScreenServices from "./components/FullScreenServices";
import Doctors from "./components/Doctors";
import Price from "./pages/Price";
import Licenses from "./pages/Licenses";
import ContactPage from "./pages/Contact";

// Блок «Контакты и запись»
function ContactSection() {
  return (
    <section className="py-16 bg-white px-4" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-800">Контакты и запись</h2>
        <p className="mb-4 text-gray-600">
          г. Псков, ул. Примерная, 7
          <br />
          Телефон:{" "}
          <a href="tel:+79001234567" className="text-blue-600">
            +7 (900) 123-45-67
          </a>
        </p>
        <form className="bg-sky-50 rounded-xl p-8 shadow space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full px-4 py-2 rounded-lg border focus:outline-blue-300"
          />
          <input
            type="tel"
            placeholder="Телефон"
            className="w-full px-4 py-2 rounded-lg border focus:outline-blue-300"
          />
          <textarea
            placeholder="Комментарий"
            className="w-full px-4 py-2 rounded-lg border focus:outline-blue-300"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition"
          >
            Записаться
          </button>
        </form>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.png" alt="ESTETIKDENT" className="h-12 mb-4" />
          <p className="text-sm">
            Клиника ESTETIKDENT — ваша уверенность в каждой улыбке.
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Контакты</h3>
          <p className="text-sm">+7 (911) 895-35-35</p>
          <p className="text-sm">ул. Льва Толстого 35, Санкт-Петербург</p>
          <p className="text-sm">clinic@estetikdent.ru</p>
        </div>
        <div>
          <h3 className="font-bold mb-2 text-lg">Навигация</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#about" className="hover:underline">
                О клинике
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Услуги
              </a>
            </li>
            <li>
              <a href="#doctors" className="hover:underline">
                Врачи
              </a>
            </li>
            <li>
              <a href="#price" className="hover:underline">
                Прайс
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs mt-8 border-t border-white/30 pt-4">
        © {new Date().getFullYear()} ESTETIKDENT | Все права защищены
      </div>
    </footer>
  );
}

function MainPage() {
  return (
    <>
      {/* Верхняя часть: слайдер, блочный контакт, плавающая форма */}
      <div className="pt-20">
        <HeroSlider />
        <ContactImageBlock />
        <FloatingContactForm />
      </div>

      {/* Секция калькулятора: добавили PT-32, чтобы опустить ниже */}
        <section className="relative z-0 bg-blue-50 pb-20" style={{ paddingTop: "320px" }}>
        <div className="max-w-6xl mx-auto px-4">
          <MultiColumnCalculator />
        </div>
      </section>

      {/* Остальные разделы */}
      <About />
      <FullScreenServices />
      <Doctors />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="font-sans bg-white min-h-screen relative">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/price" element={<Price />} />
          <Route path="/licenses" element={<Licenses />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
