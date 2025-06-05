import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function About() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const features = [
    {
      icon: "📅",
      value: 4,
      label: "Года опыта",
      tooltip: "Мы работаем с 2021 года",
    },
    {
      icon: "😊",
      value: 900,
      label: "Довольных пациентов",
      tooltip: "Благодарные пациенты нас рекомендуют",
    },
    {
      icon: "🧑‍⚕️",
      value: 10,
      label: "Специалистов в команде",
      tooltip: "Терапевты, ортопеды, хирурги, гигиенисты",
    },
    {
      icon: "🛡️",
      value: 100,
      label: "Стерильность",
      tooltip: "Стерилизация на уровне операционной",
      suffix: "%",
    },
    {
      icon: "🏆",
      value: 5,
      label: "Средняя оценка",
      tooltip: "По реальным отзывам наших клиентов",
      suffix: "+",
      decimals: 1,
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative py-24 px-4 bg-gradient-to-b from-white to-sky-50 overflow-hidden"
      id="about"
    >
      {/* Декоративный фон */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-100 opacity-20 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Левый — зубной протез */}
      <motion.img
        src="/images/about-protez.png"
        alt="tooth-protez"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-28 left-10 w-36 opacity-90 pointer-events-none select-none z-10"
      />

      {/* Правый — зуб */}
      <motion.img
        src="/images/about-decor.png"
        alt="tooth"
        animate={{ rotate: [-3, 3, -3] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-28 right-10 w-36 opacity-90 pointer-events-none select-none z-10"
      />

      {/* Текст */}
      <div className="relative z-20 max-w-3xl mx-auto text-center">
        <motion.h2
          variants={fadeInUp}
          className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6"
        >
          О нашей клинике
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          custom={2}
          className="text-lg text-gray-600 leading-relaxed mb-12"
        >
          Мы работаем с <strong>2021 года</strong>, помогая людям обрести уверенность
          в своей улыбке. Используем передовые технологии, лучшие материалы и
          тёплый подход к каждому пациенту.
        </motion.p>
      </div>

      {/* Карточки */}
      <div className="relative z-20 flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            custom={i + 3}
            className="group bg-white rounded-2xl px-6 py-6 shadow-xl hover:scale-105 transition duration-300 flex flex-col items-center w-40 sm:w-44 md:w-48 lg:w-52 relative hover:ring-2 hover:ring-blue-300"
          >
            <span className="text-4xl mb-1">{item.icon}</span>
            <span className="text-3xl font-bold text-blue-700">
              <CountUp
                start={0}
                end={item.value}
                duration={1.5}
                decimals={item.decimals || 0}
                suffix={item.suffix || "+"}
              />
            </span>
            <div className="text-gray-500 text-sm text-center">{item.label}</div>
            <div className="absolute bottom-[-2rem] opacity-0 group-hover:opacity-100 text-xs text-gray-500 bg-white px-2 py-1 rounded shadow transition-all pointer-events-none text-center w-40">
              {item.tooltip}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
