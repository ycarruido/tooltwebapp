import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Articulos() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="¿Necesitas ayuda para redactar artículos científicos y académicos de alta calidad? En Tooltesis te ofrecemos apoyo experto."
          strQ="¿Te solicitaron un artículo científico?"
          strBtn="Contacta con nosotros"
          bgColor="bg-blue-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12 pt-10">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          Artículos Científicos y Académicos
        </p>
        <p className="mt-4 text-gray-700">
          Sabemos lo complejo que puede ser la redacción de artículos científicos, desde
          presentar argumentos sólidos hasta realizar un análisis riguroso de datos.
          Nuestro equipo está aquí para ayudarte a desarrollar un artículo con el rigor
          y la claridad que la investigación académica exige.
        </p>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            ¿Qué Incluye Nuestro Servicio?
          </h2>
          <ul className="list-disc pl-5">
            <li>
              <strong>Investigación a Fondo:</strong> Realizamos una investigación completa y te ayudamos a
              estructurar los fundamentos y antecedentes necesarios para tu artículo.
            </li>
            <li>
              <strong>Análisis de Datos:</strong> Procesamos y analizamos tus datos utilizando
              métodos estadísticos confiables y presentamos los resultados de forma clara y precisa.
            </li>
            <li>
              <strong>Redacción Académica:</strong> Nos enfocamos en la claridad, precisión y rigor
              científico para que el mensaje y los resultados de tu investigación se comuniquen de manera efectiva.
            </li>
            <li>
              <strong>Normas de Citación:</strong> Adaptamos tu artículo a las normas de citación que prefieras,
              como APA, Vancouver o IEEE, para asegurar que cumpla con los estándares académicos.
            </li>
          </ul>
        </div>

        <p className="mt-6 text-gray-700">
          Nos encargamos de cada etapa de tu artículo para garantizar que cumpla con los requisitos
          académicos, facilitando tu proceso de publicación y mejorando tus posibilidades de éxito.
        </p>
      </div>

      {/* Sección de características */}
      {[
        {
          title: "Investigación de Calidad",
          description:
            "Nos aseguramos de que cada artículo cuente con una base de investigación sólida, construyendo sobre información actual y relevante para respaldar tus argumentos.",
          imgSrc: "/img/investigacionCalidad.webp",
          alt: "Investigación de Calidad",
        },
        {
          title: "Redacción Científica",
          description:
            "Nuestro equipo redacta artículos con el rigor y claridad que requiere la academia, asegurando que tus ideas se comuniquen efectivamente.",
          imgSrc: "/img/redaccionCientifica.webp",
          alt: "Redacción Científica",
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

export default Articulos;

