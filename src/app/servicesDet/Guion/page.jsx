import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Guion() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="En Tooltesis, creamos guiones de estudio enfocados en ayudarte a preparar una defensa destacada. Nuestro equipo diseña cada guion con la estructura y contenido necesarios para que domines tu tema y proyectes confianza en tu presentación."
          strQ="¿Necesitas un guion?"
          strBtn="Solicítalo Ahora"
          bgColor="bg-gray-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12 pt-10">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          ¿Qué es un Guion de Estudio?
        </p>
        <p className="mt-4 text-gray-700">
          Un guion de estudio es un recurso
          detallado que organiza los puntos más importantes de tu proyecto,
          permitiéndote estructurar y memorizar el contenido clave. Este guion
          te ayuda a preparar una defensa sólida y coherente, maximizando tu
          confianza y dominio del tema frente al jurado.
        </p>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Un Guion de Estudio efectivo incluye:
          </h2>
          <ul className="list-disc pl-5">
            <li>Resumen de los objetivos y metodología del proyecto</li>
            <li>
              Explicación clara de los resultados obtenidos y su importancia
            </li>
            <li>
              Análisis crítico de la literatura utilizada y su relevancia en el
              tema
            </li>
            <li>
              Preguntas potenciales que el jurado podría hacer y respuestas
              preparadas
            </li>
            <li>
              Conclusiones clave y recomendaciones que fortalecen tu posición
            </li>
          </ul>
        </div>

        <div className="p-4">
          <p className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Características del servicio
          </p>

          <ul className="list-disc pl-5">
            <li>
              <strong>Guiones Personalizados:</strong> Cada guion se adapta a tu
              proyecto y su enfoque específico, facilitando la preparación de tu
              defensa.
            </li>
            <li>
              <strong>Estructura Clara y Precisa:</strong> Organizamos la
              información de forma lógica para que puedas presentar tu proyecto
              con confianza.
            </li>
            <li>
              <strong>Asesoría para Preguntas del Jurado:</strong> Te ayudamos a
              anticipar y preparar respuestas a posibles preguntas.
            </li>
            <li>
              <strong>Recursos Visuales:</strong> Incluimos gráficos y tablas
              que te permiten comunicar tus resultados de manera efectiva.
            </li>
            <li>
              <strong>Revisión de Expertos:</strong> Cada guion es revisado por
              especialistas para asegurar que el contenido sea preciso y de alta
              calidad.
            </li>
          </ul>
        </div>
      </div>
      {/* Sección de características */}
      {[
        {
          title: "Estructuración para la Defensa",
          description:
            "Nuestros guiones están diseñados para resaltar los puntos críticos de tu Tesis, TFG o TFM, brindándote una guía clara para tu exposición.",
          imgSrc: "/img/estructuraDefensa.webp",
          alt: "Estructuración para la Defensa",
        },
        {
          title: "Preparación para Preguntas",
          description:
            "Incluimos posibles preguntas del jurado y sus respuestas, asegurándote de estar listo para cualquier consulta durante la defensa.",
          imgSrc: "/img/preguntasJurado.webp",
          alt: "Preparación para Preguntas",
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

export default Guion;



