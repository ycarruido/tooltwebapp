import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Tfg() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="En Tooltesis, ofrecemos un servicio integral para el desarrollo de tu Trabajo Final de Máster. Nuestro equipo de expertos se encarga de estructurar, investigar y redactar un TFM que cumpla con los requerimientos académicos de tu institución y te permita destacar en tu área de estudio."
          strQ="¿Necesitas hacer un TFM?"
          strBtn="Pídelo Ahora"
          bgColor="bg-gray-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12 pt-10">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          ¿Qué es un TFM?
        </p>
        <p className="mt-4 text-gray-700">
          Un Trabajo Final de Máster (TFM) es un proyecto académico que los
          estudiantes deben realizar para finalizar sus estudios de máster. Este
          trabajo tiene como objetivo principal demostrar que el estudiante ha
          adquirido los conocimientos, habilidades y competencias necesarios en
          su campo de estudio. A través del TFM, el estudiante aplica de forma
          práctica la teoría aprendida, abordando un tema específico con un
          enfoque crítico y metodológico.
        </p>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            El TFM suele incluir:
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Investigación original o un análisis profundo de un tema relevante
            </li>
            <li>
              Revisión de literatura académica para fundamentar el trabajo
            </li>
            <li>
              Aplicación de métodos de investigación adecuados a la disciplina
            </li>
            <li>
              Conclusiones y recomendaciones que aporten valor académico o
              profesional
            </li>
          </ul>
        </div>

        <div className="p-4">
          <p className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Características del servicio
          </p>

          <ul className="list-disc pl-5">
            <li>
              <strong>Trabajos 100% Originales:</strong> Garantizamos contenido
              único y exclusivo para cada proyecto
            </li>
            <li>
              <strong>Calidad Asegurada:</strong> Cada trabajo se revisa
              exhaustivamente para cumplir con los más altos estándares
              académicos
            </li>
            <li>
              <strong>Equipo de Profesores Expertos:</strong> Nuestros
              profesores están altamente capacitados en distintas áreas del
              conocimiento
            </li>
            <li>
              <strong>Normativas de Citación Adaptadas:</strong> Aplicación
              precisa de los estilos de citación más reconocidos (APA,
              Vancouver, Chicago, etc.)
            </li>
            <li>
              <strong>Flexibilidad en los Plazos:</strong> Nos adaptamos a tus
              tiempos y fechas límite, asegurando que tu proyecto esté listo a
              tiempo
            </li>
            <li>
              <strong>Verificación Anti-plagio:</strong> Utilizamos herramientas
              avanzadas de detección de plagio para asegurar la originalidad de
              cada trabajo
            </li>
            <li>
              <strong>Soporte Continuo:</strong> Comunicación constante y
              directa con nuestros asesores, para resolver cualquier duda
            </li>
            <li>
              <strong>Confidencialidad Total:</strong> Manejamos cada proyecto
              de manera confidencial, asegurando que toda tu información y
              contenido permanezcan seguros y protegidos
            </li>
          </ul>
        </div>
      </div>
      {/* Sección de características */}
      {[
        {
          title: "Asesoría Personalizada",
          description:
            "En Tooltesis, ofrecemos asesoría especializada para guiarte en cada etapa de tu TFG, ayudándote a que este proyecto cumpla con los más altos estándares académicos y sea un reflejo del esfuerzo y dedicación que has puesto en tus estudios.",
          imgSrc: "/img/análisisRequerimientos.webp",
          alt: "Asesoría Personalizada",
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

export default Tfg;
