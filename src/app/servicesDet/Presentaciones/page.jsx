import React from "react";
import ServicesCTA from "../../../components/ui/ServicesCTA/ServicesCTA";

function Presentaciones() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* CTA */}
      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="En Tooltesis, creamos presentaciones profesionales para Tesis, TFG y TFM en diversas plataformas: PowerPoint, Google Slides, Canva y Prezi. Nuestro equipo diseña cada presentación para que impactes visualmente y transmitas tu contenido de manera clara y atractiva."
          strQ="¿Necesitas una presentación que cause impacto?"
          strBtn="Solicítala Ahora"
          bgColor="bg-gray-600"
        />
      </div>
      {/* Título principal */}
      <div className="text-left mb-12 pt-10">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          Presentaciones Profesionales
        </p>
        <p className="mt-4 text-gray-700">
          Nuestra especialidad es crear presentaciones visualmente atractivas y
          persuasivas en PowerPoint, Google Slides, Canva y Prezi, enfocadas en
          resaltar los puntos clave de tu trabajo y captar la atención del
          jurado. Con un diseño estratégico, ayudamos a que tu defensa se
          destaque y deje una impresión duradera.
        </p>

        <div className="p-4">
          <h2 className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Características de nuestras presentaciones:
          </h2>
          <ul className="list-disc pl-5">
            <li>
              Diseño personalizado alineado con la temática de tu proyecto
            </li>
            <li>
              Transiciones y animaciones sutiles que mejoran la comprensión
            </li>
            <li>
              Gráficos y diagramas personalizados que ilustran tus resultados y
              conclusiones
            </li>
            <li>
              Estructura lógica que guía al espectador de manera fluida
            </li>
            <li>
              Adaptación a las principales plataformas de presentación:
              PowerPoint, Google Slides, Canva y Prezi
            </li>
          </ul>
        </div>

        <div className="p-4">
          <p className="mt-4 text-gray-700 text-3xl font-medium pb-4">
            Ventajas de nuestro servicio
          </p>

          <ul className="list-disc pl-5">
            <li>
              <strong>Presentaciones Impactantes:</strong> Diseños visuales que
              captan la atención y facilitan la comprensión del contenido.
            </li>
            <li>
              <strong>Compatibilidad Multi-Plataforma:</strong> Trabajamos en
              PowerPoint, Google Slides, Canva y Prezi para adaptarnos a tus
              necesidades.
            </li>
            <li>
              <strong>Apoyo Visual:</strong> Incluimos gráficos, imágenes y
              otros elementos visuales que realzan tu mensaje.
            </li>
            <li>
              <strong>Organización Clara:</strong> Estructuramos la presentación
              para que tu mensaje se transmita con claridad y coherencia.
            </li>
            <li>
              <strong>Revisión de Calidad:</strong> Cada presentación es
              revisada para asegurar un diseño profesional y un mensaje
              efectivo.
            </li>
          </ul>
        </div>
      </div>
      {/* Sección de características */}
      {[
        {
          title: "Diseño Visual Atractivo",
          description:
            "Creamos presentaciones con un diseño estético y profesional, alineadas con el estilo de tu proyecto y con gráficos de alta calidad.",
          imgSrc: "/img/disenoVisual.webp",
          alt: "Diseño Visual Atractivo",
        },
        {
          title: "Compatibilidad en Varias Plataformas",
          description:
            "Ofrecemos opciones en PowerPoint, Google Slides, Canva y Prezi, para que presentes en la plataforma que mejor se adapte a tus necesidades.",
          imgSrc: "/img/plataformasCompatibles.webp",
          alt: "Compatibilidad en Varias Plataformas",
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

export default Presentaciones;