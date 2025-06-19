"use client";
import { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';

const Stat = ({ IconComponent, number, label }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("stats-section");
      if (element) {
        const rect = element.getBoundingClientRect();
        // Verificar si el elemento está visible en la ventana
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Ejecutar la verificación una vez al cargar el componente
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const increment = Math.ceil(number / 100); // Velocidad del contador
      const interval = setInterval(() => {
        start += increment;
        if (start >= number) {
          setCount(number);
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 20);
    }
  }, [isVisible, number]);

  return (
    <div className="text-center">
      <div className="text-[3rem] text-sky-600 font-medium mx-auto sm:text-[3rem] mb-2">
        <span className="text-black"><IconComponent className="mb-2" /></span>
        {count}
      </div>
      <p className="text-lg text-gray-700">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { IconComponent: AddIcon, number: 10, label: "Años de experiencia" },
    { IconComponent: AddIcon, number: 300, label: "Proyectos académicos" },
    { IconComponent: AddIcon, number: 20000, label: "Horas dedicadas" },
    { IconComponent: AddIcon, number: 50, label: "Especialidades" },
  ];


  return (
    <section id="stats-section" className="py-16 bg-gray-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat, idx) => (
          <Stat key={idx} IconComponent={stat.IconComponent} number={stat.number} label={stat.label} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
