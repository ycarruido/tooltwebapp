import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Asesorias() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="En Tooltesis, ofrecemos asesorías académicas personalizadas para guiarte en cada etapa de tus proyectos universitarios o de posgrado. Nuestro equipo de expertos está aquí para ayudarte a resolver tus dudas y garantizar el éxito en tus estudios."
          strQ="¿Necesitas asesoría académica?"
          strBtn="Solicita Asesoría"
          bgColor="bg-gray-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12 pt-10">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          ¿En qué consisten nuestras Asesorías?
        </p>
        <p className="mt-4 text-gray-700">
          Las asesorías académicas de Tooltesis están diseñadas para ofrecerte
          un apoyo integral en cualquier etapa de tus estudios. Desde la
          planificación y organización de tus ideas hasta la corrección y revisión
          de tu trabajo, nuestro equipo de expertos en diversas disciplinas te
          acompaña en el proceso. Con nuestro servicio de asesoría, podrás
          avanzar con confianza y claridad en tus proyectos académicos.
        </p>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Nuestras asesorías incluyen:
          </h2>
          <ul className="list-disc pl-5">
            <li>Guía en el desarrollo y organización de tus ideas.</li>
            <li>Revisión y corrección de estilo y gramática.</li>
            <li>Apoyo en la aplicación de normativas de citación académica.</li>
            <li>Asesoría en la estructuración y metodología de proyectos.</li>
            <li>Consejos y orientación personalizada en temas específicos.</li>
          </ul>
        </div>

        <div className="p-4">
          <p className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Características del servicio
          </p>

          <ul className="list-disc pl-5">
            <li>
              <strong>Atención Personalizada:</strong> Nos adaptamos a tus
              necesidades específicas, brindándote un acompañamiento adecuado a
              tu ritmo de trabajo.
            </li>
            <li>
              <strong>Profesionales con Experiencia:</strong> Nuestro equipo está
              compuesto por expertos académicos especializados en múltiples
              áreas.
            </li>
            <li>
              <strong>Flexibilidad en el Proceso:</strong> Nos adaptamos a tu
              agenda y preferencias, ofreciéndote sesiones de asesoría cuando
              más las necesites.
            </li>
            <li>
              <strong>Confidencialidad:</strong> Tratamos cada proyecto de manera
              confidencial, asegurando la seguridad de tu información.
            </li>
          </ul>
        </div>
      </div>
      {/* Sección de características */}
      {[
        {
          title: "Asesoría Personalizada",
          description:
            "Te ofrecemos una asesoría ajustada a tus necesidades específicas, ayudándote a avanzar con seguridad en tu proyecto académico.",
          imgSrc: "/img/asesoriaPersonalizada.webp",
          alt: "Asesoría Personalizada",
        },
        {
          title: "Corrección y Revisión de Contenido",
          description:
            "Nuestro equipo revisa y corrige cada detalle de tu proyecto, asegurando claridad y coherencia en la redacción.",
          imgSrc: "/img/correccionRevision.webp",
          alt: "Corrección y Revisión de Contenido",
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

export default Asesorias;

