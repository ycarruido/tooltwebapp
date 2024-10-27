import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Matematicas() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="En Tooltesis, nos enfocamos en acompañar de cerca a cada estudiante y mantener una comunicación constante. Esto nos permite crear proyectos académicos, TFG y TFM a la medida, logrando resultados de alta calidad que cumplen con las expectativas de cada cliente."
          strQ="¿Necesitas hacer un TFG o un TFM?"
          strBtn="Obtén asesoramiento"
          bgColor="bg-gray-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2">
          Características Destacadas
        </p>
        <p className="mt-4 text-gray-700">
          Descubre cómo cada aspecto de nuestro servicio está diseñado para brindarte un apoyo completo y de calidad en tus proyectos académicos, desde la asesoría inicial hasta la entrega final.
        </p>
      </div>
      {/* Sección de características */}
      {[
        {
          title: "1. Asesoría Personalizada",
          description:
            "Cada proyecto académico es un reto diferente, y en Tooltesis entendemos lo importante que es adaptarse a tus necesidades específicas. Por eso, ofrecemos un enfoque individualizado que se ajusta a tus objetivos y temáticas.",
          imgSrc: "/img/análisisRequerimientos.webp",
          alt: "Análisis de Requerimientos",
        },
        {
          title: "2. Confidencialidad Asegurada",
          description:
            "Sabemos que la privacidad es fundamental. Por eso, implementamos un sistema de confidencialidad total, garantizando que tu información personal esté siempre segura.",
          imgSrc: "/img/disenodeprototipos.webp",
          alt: "Diseño de Prototipos",
        },
        {
          title: "3. Uso de Normas Reconocidas",
          description:
            "Nos especializamos en los estándares de citación y estilo académico más reconocidos, asegurando la credibilidad y profesionalismo de cada trabajo.",
          imgSrc: "/img/agile_development.webp",
          alt: "Desarrollo Ágil",
        },
        {
          title: "4. Control de Plagio",
          description:
            "La originalidad es clave en el éxito académico. Utilizamos software avanzado de detección de plagio, garantizando que cada trabajo sea 100% original.",
          imgSrc: "/img/pruebas_exhaustivas.webp",
          alt: "Integración y Pruebas Exhaustivas",
        },
        {
          title: "5. Equipo Multidisciplinario",
          description:
            "Contamos con un equipo de profesionales especializados en distintas áreas del conocimiento, asegurando que tu trabajo cuente con la calidad que esperas.",
          imgSrc: "/img/diseñodeprototipos.webp",
          alt: "Implementación y Soporte Continuo",
        },
      ].map((feature, index) => (
        <div
          key={index}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 p-6"
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4">{feature.title}</h2>
            <p className="mb-4">{feature.description}</p>
          </div>
          <div className="flex flex-col items-center text-center relative">
            <img
              src={feature.imgSrc}
              alt={feature.alt}
              className="w-4/5 mx-auto rounded-2xl transition-transform duration-300 transform hover:scale-105 z-10 relative bg-white shadow-lg"
              style={{
                position: "relative",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Matematicas;

