import React from "react";

const doctors = [
  {
    name: "Руденко Денис Владимирович",
    position: "Главный врач",
    image: "/images/doctors/doctor1.jpg",
    bio: "Главный врач. Стоматолог общей практики, хирург и ортопед. Окончил Новгородский государственный университет им. Ярослава Мудрого. Регулярно проходит аккредитации и профессиональное обучение.",
  },
  {
    name: "Чернышова Наталья Владимировна",
    position: "Врач стоматолог-хирург-ортопед-имплантолог",
    image: "/images/doctors/doctor2.jpg",
    bio: "Выпускница Новгородского государственного университета им. Ярослава Мудрого, 2015 год, специальность «Стоматология».",
  },
  {
    name: "Бевзюк Григорий Игоревич",
    position: "Врач-стоматолог-ортодонт",
    image: "/images/doctors/doctor3.jpg",
    bio: "Окончил Санкт-Петербургский медико-социальный институт в 2020 году по специальности «Стоматология». Ординатура по ортодонтии, СПбГПМУ, 2024. Имеет аккредитации по стоматологии общей практики и ортодонтии.",
  },
  {
    name: "Тутынина Любовь Андреевна",
    position: "Врач стоматолог-ортопед",
    image: "/images/doctors/doctor4.jpg",
    bio: "Окончила Санкт-Петербургский медико-социальный институт в 2020 году. Ординатура по стоматологии ортопедической, СЗГМУ им. И.И. Мечникова (2023). Имеет аккредитации по общей практике и ортопедической стоматологии.",
  },
  {
    name: "Поспелова Лариса Александровна",
    position: "Зубной врач",
    image: "/images/doctors/doctor5.jpg",
    bio: "Окончила Псковское медицинское училище в 1993 году. Регулярно проходит повышение квалификации и аккредитацию по специальности «Стоматология».",
  },
  {
    name: "Целиш Андрей Олегович",
    position: "Врач-стоматолог общей практики",
    image: "/images/doctors/doctor6.jpg",
    bio: "Окончил Днепропетровскую медицинскую академию в 2016 году. Интернатура по стоматологии (Винницкий национальный медицинский университет им. Н.И. Пирогова, 2020). Повышение квалификации по общей стоматологии (СЗГМУ им. И.И. Мечникова, 2020).",
  },
];

export default function Doctors() {
  return (
    <section className="py-16 bg-white" id="doctors">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Наши врачи</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {doctors.map((doctor, idx) => (
            <div
              key={idx}
              className="bg-sky-50 rounded-2xl shadow-lg p-6 flex flex-col items-center h-full hover:scale-105 transition-transform"
            >
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-32 h-32 rounded-full object-cover mb-4 shadow-md border-4 border-white"
              />
              <div className="text-xl font-semibold text-blue-900 text-center">{doctor.name}</div>
              <div className="text-blue-600 font-medium mb-2 text-center">{doctor.position}</div>
              <div className="text-gray-600 text-center mt-auto">{doctor.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
