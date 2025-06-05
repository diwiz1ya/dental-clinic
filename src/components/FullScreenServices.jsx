import { motion } from "framer-motion";

const services = [
  {
    title: "Лечение под микроскопом",
    image: "/images/microscope.jpg",
    description: "Точное и безболезненное лечение каналов с увеличением. Сохраняем даже сложные случаи.",
  },
  {
    title: "Имплантация",
    image: "/images/implant.jpg",
    description: "Современные импланты с высокой приживаемостью и эстетикой.",
  },
  {
    title: "Хирургическое лечение",
    image: "/images/surgery.jpg",
    description: "Удаление зубов и новообразований любой сложности.",
  },
  {
    title: "Протезирование",
    image: "/images/protez.jpg",
    description: "Коронки, мосты и съемные протезы по индивидуальным параметрам.",
  },
  {
    title: "Ортодонтия",
    image: "/images/ortodont.jpg",
    description: "Выравнивание зубов брекетами и элайнерами. Идеальная улыбка.",
  },
];

export default function FullScreenServices() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="space-y-16 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="relative rounded-xl overflow-hidden shadow-lg"
          >
            {/* Изображение с фиксированной высотой */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[500px] object-cover"
            />

            {/* Блок с текстом строго в правом верхнем углу */}
            <div className="absolute top-6 right-6 bg-white/80 p-4 rounded-lg shadow-md backdrop-blur-md max-w-sm">
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
