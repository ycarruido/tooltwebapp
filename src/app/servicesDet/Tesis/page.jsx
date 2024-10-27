import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Tesis() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="En Tooltesis, ofrecemos un servicio completo para la redacción de tu Tesis. Nos encargamos de estructurar, investigar y redactar un trabajo que cumpla con los requerimientos de tu universidad, asegurando calidad y originalidad en cada paso."
          strQ="¿Necesitas hacer tu Tesis?"
          strBtn="Empieza Hoy"
          bgColor="bg-gray-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12 pt-10">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          ¿Qué es una Tesis?
        </p>
        <p className="mt-4 text-gray-700">
          Una Tesis es un proyecto de investigación exhaustivo y original, realizado por estudiantes de nivel universitario o de posgrado para demostrar su competencia en un área específica de estudio. Este trabajo es una pieza fundamental en la obtención de un título académico y requiere rigor metodológico, investigación en profundidad y análisis crítico.
        </p>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Características del servicio
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Trabajos 100% Originales:</strong> Garantizamos contenido único y exclusivo para cada proyecto de tesis.
            </li>
            <li>
              <strong>Calidad en el Trabajo:</strong> Revisamos cada detalle para asegurar los más altos estándares académicos.
            </li>
            <li>
              <strong>Equipo de Expertos Académicos:</strong> Profesionales con experiencia en investigación y redacción académica.
            </li>
            <li>
              <strong>Normativas de Citación Adaptadas:</strong> Aplicación precisa de los estilos de citación más usados, como APA, Vancouver, y otros.
            </li>
            <li>
              <strong>Flexibilidad en los Plazos:</strong> Nos adaptamos a tus tiempos para una entrega puntual.
            </li>
            <li>
              <strong>Verificación Anti-plagio:</strong> Uso de herramientas avanzadas para asegurar la originalidad de tu tesis.
            </li>
            <li>
              <strong>Soporte Continuo:</strong> Comunicación constante para resolver cualquier duda y asegurar el progreso sin interrupciones.
            </li>
            <li>
              <strong>Confidencialidad Garantizada:</strong> Mantenemos cada proyecto seguro y tratamos tu información con total confidencialidad.
            </li>
          </ul>
        </div>
      </div>
      {/* Sección de características */}
      {[
        {
          title: "Asesoría Completa",
          description:
            "En Tooltesis, te brindamos acompañamiento especializado en cada fase de tu tesis, asegurando que el proyecto cumpla con los estándares académicos",
          imgSrc: "/img/asesoriaCompleta.webp",
          alt: "Asesoría Completa",
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

export default Tesis;