import React, { useRef, useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";

const slides = [
  {
    img: "/slider1.jpg",
    heading: "Стоматологическая клиника",
    subheading: "ESTETIKDENT",
    desc: "Все виды протезирования зубов: Коронки, съемные и несъемные протезы и др.",
  },
  {
    img: "/slider2.jpg",
    heading: "",
    subheading: "",
    desc: "",
  },
  {
    img: "/slider3.jpg",
    heading: "Профессиональная гигиена",
    subheading: "",
    desc: "Чистка, отбеливание и профилактика для взрослых и детей",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    created(s) {
      intervalRef.current = setInterval(() => {
        s.next();
      }, 4000);
    },
    destroyed() {
      clearInterval(intervalRef.current);
    },
  });

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
<div ref={sliderRef} className="keen-slider w-full h-[80vh]">
        {slides.map((slide, idx) => (
          <div key={idx} className="keen-slider__slide relative w-full h-full">
            <img
              src={slide.img}
              alt={`Слайд ${idx + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />

            {idx === currentSlide && (
              <motion.div
                key={`slide-content-${idx}`}
                className="absolute inset-0 flex flex-col justify-between px-12 py-10 text-gray-100 drop-shadow-lg"
                variants={fadeIn}
                initial="initial"
                animate="animate"
              >
                {idx === 1 ? (
                  <>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
                      Лечение в комфортную рассрочку — без банков и переплат!
                    </h2>
                    <div className="space-y-3 text-lg font-bold max-w-3xl leading-relaxed">
                      <ul className="space-y-1 list-disc list-inside">
                        <li>Прозрачные условия — никаких переплат</li>
                        <li>Быстрое оформление — решение за 5 минут</li>
                        <li>Гибкий график — подберём удобный для вас</li>
                      </ul>
                      <p className="italic font-normal text-base">
                        Заботьтесь о здоровье зубов без лишних переживаний!
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    {slide.heading && (
                      <motion.h2
                        className="text-2xl md:text-4xl font-extrabold"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                      >
                        {slide.heading}
                      </motion.h2>
                    )}
                    {slide.subheading && (
                      <motion.h1
                        className="uppercase text-4xl md:text-6xl font-extrabold"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                      >
                        {slide.subheading}
                      </motion.h1>
                    )}
                    {slide.desc && (
                      <motion.p
                        className="text-base md:text-lg max-w-xl flex items-center mt-4 font-bold"
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                      >
                        {idx === 0 && (
                          <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            src="/prosthesis.png"
                            alt="Иконка протез"
                            className="w-12 h-12 mr-3 flex-shrink-0"
                          />
                        )}
                        {slide.desc}
                      </motion.p>
                    )}
                  </>
                )}

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <a
                    href="#contact"
                    className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-bold transition"
                  >
                    Записаться
                  </a>
                </motion.div>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 p-2 rounded-full z-10"
        onClick={() => instanceRef.current?.prev()}
        aria-label="Предыдущий слайд"
      >
        ←
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-blue-700 p-2 rounded-full z-10"
        onClick={() => instanceRef.current?.next()}
        aria-label="Следующий слайд"
      >
        →
      </button>
    </section>
  );
}
