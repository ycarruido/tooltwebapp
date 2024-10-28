import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Matematicas() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="¿Tienes problemas con disertaciones, cálculos o análisis de datos en matemáticas o ciencias? En Tooltesis estamos aquí para hacer que estos retos sean mucho más llevaderos."
          strQ="¿Necesitas apoyo con tareas de matemáticas o ciencias?"
          strBtn="Contacta con nosotros"
          bgColor="bg-blue-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12 pt-10">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          Asesoría en Matemáticas y Ciencias
        </p>
        <p className="mt-4 text-gray-700">
          Comprendemos lo complejo que puede ser enfrentarse a informes
          científicos, cálculos avanzados y teorías matemáticas. Es por eso que
          te ofrecemos un apoyo personalizado para hacer tus tareas de ciencias
          y matemáticas de manera efectiva y sin estrés. Nos encargamos de los
          cálculos, análisis estadísticos, investigaciones y mucho más.
        </p>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Servicios de Ciencias
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Investigación de Problemas:</strong> Te ayudamos a
              identificar y plantear los problemas fundamentales antes de
              generar hipótesis claras.
            </li>
            <li>
              <strong>Recopilación de Evidencia:</strong> Ya sea que tengas
              una hipótesis o te ayudemos a formularla, investigamos y
              recopilamos datos para comprobar o refutar tus ideas.
            </li>
          </ul>
        </div>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Servicios de Matemáticas
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Resolución de Ecuaciones:</strong> Nos encargamos de las
              ecuaciones más complejas, explicándote cada paso para que comprendas el proceso.
            </li>
            <li>
              <strong>Preguntas de Opción Múltiple:</strong> Te aseguramos de
              elegir siempre la opción correcta en ejercicios matemáticos.
            </li>
            <li>
              <strong>Optimización y Modelos:</strong> Diseñamos modelos
              matemáticos, estudios de casos y análisis de optimización para tus
              proyectos.
            </li>
          </ul>
        </div>

        <p className="mt-6 text-gray-700">
          Ya sea que necesites ayuda en cálculos estadísticos, análisis de datos o en la redacción de
          disertaciones, estamos aquí para ayudarte. ¡Relájate y deja que nos ocupemos de los detalles complejos!
        </p>
      </div>

      {/* Sección de características */}
      {[
        {
          title: "Asesoría Científica",
          description:
            "Desde investigaciones hasta recopilación de evidencia, nuestro equipo está listo para ayudarte a superar cualquier desafío en tus proyectos científicos.",
          imgSrc: "/img/asesoriaCientifica.webp",
          alt: "Asesoría Científica",
        },
        {
          title: "Soluciones Matemáticas",
          description:
            "Resolvemos ecuaciones complejas, optimizamos modelos y proporcionamos explicaciones claras para asegurar tu comprensión en todo momento.",
          imgSrc: "/img/solucionesMatematicas.webp",
          alt: "Soluciones Matemáticas",
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

