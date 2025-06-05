import React from "react";

export default function ContactImageBlock() {
  return (
    <div className="absolute top-[90vh] left-20 z-20 hidden md:block">
      <div className="relative w-[450px] h-[290px] rounded-xl shadow-xl overflow-hidden">
        
        {/* Картинка */}
        <img
          src="bg-contact.jpeg"
          alt="Контактная информация"
          className="w-full h-full object-cover"
        />

        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Текст */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-white text-center px-6">
          <h3 className="text-2xl md:text-3xl font-bold mb-2">+7 (911) 895-35-35</h3>
          <p className="text-lg md:text-xl mb-1">ул. Льва Толстого 35</p>
          <p className="text-lg md:text-xl mb-3">Рабочее время</p>
          <div className="text-base md:text-lg leading-relaxed font-medium space-y-1">
            <p><span className="font-bold">Пн–Пт:</span> 09:00–20:00</p>
            <p><span className="font-bold">Сб:</span> 09:00–15:00</p>
            <p><span className="font-bold">Вс:</span> Выходной</p>
          </div>
        </div>
      </div>
    </div>
  );
}
