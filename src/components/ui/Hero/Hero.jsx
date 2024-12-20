"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Hero = () => {
  const texts = [
    "La verdadera red de profesores",
    "Redacción experta",
    "Apostando por tu futuro",
    "Asesoría académica",
  ];
  const [currentText, setCurrentText] = useState(texts[0]);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentText((prev) => {
          const nextIndex = (texts.indexOf(prev) + 1) % texts.length;
          return texts[nextIndex];
        });
        setFade(false);
      }, 500); // Duración del desvanecimiento
    }, 5000); // Cambiar cada 5 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="flex items-center"
      style={{
        height: "calc(100vh - 60px)",
        backgroundImage: "url('/img/banner04.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full md:px-20 mx-auto h-full bg-gray-950 bg-opacity-20">
        <div className="w-full text-left space-y-5 flex flex-col justify-end text-white mb-10">
          <div className="relative bg-cover bg-center">
            <div className="absolute inset-0 bg-blue-950 opacity-0 rounded-3xl"></div>
            <div className="relative z-10 text-white p-0">
              <h1
                className={`text-4xl lg:text-[7rem] md:text-6xl sm:text-4xl xs:text-xl font-medium transition-opacity duration-500 ${
                  fade ? "opacity-0" : "opacity-100"
                }`}
              >
                {currentText}
              </h1>
            </div>
          </div>
        </div>
        {/* Imagen a la derecha en pantallas grandes */}
        <div className="hidden md:block md:w-[20%] lg:w-[20%] h-full"></div>
      </div>
    </section>
  );
};

export default Hero;