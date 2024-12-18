"use client";
import { useState } from "react";
import Features from '../../components/ui/Features/Features'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


// Estructura de preguntas y respuestas
const faqs = [
  {
    section: "Sobre nosotros",
    items: [
      {
        question: "¿Qué es ToolTesis?",
        answer: "ToolTesis es una plataforma dedicada a brindar apoyo académico en proyectos como Trabajos Finales de Máster, Trabajos Finales de Grado, asesorías personalizadas y más. Nos enfocamos en ofrecer una experiencia de calidad que haga más sencillo y efectivo el proceso de desarrollo de cada proyecto académico.",
      },
      {
        question: "¿Cuál es el propósito de ToolTesis?",
        answer: "Guiar a los estudiantes en sus proyectos académicos con asesorías personalizadas, asegurando trabajos de investigación sólidos, claros y ajustados a los más altos estándares académicos.",
      },{
        question: "¿Qué valores guían a ToolTesis?",
        answer: "En ToolTesis valoramos la honestidad, la calidad y el compromiso con cada estudiante. Nos dedicamos a ofrecer servicios de asesoría que realmente impulsen el desarrollo académico, garantizando un acompañamiento integral y personalizado en cada proyecto.",
      },
      {
        question: "¿Qué nos diferencia de otras plataformas de apoyo académico?",
        answer: "En ToolTesis combinamos experiencia, profesionalismo y un enfoque personalizado. Nos esforzamos en cada detalle y en cada proyecto para garantizar la confidencialidad y seguridad de tu información, además de trabajar de manera cercana y accesible para que alcances tus objetivos académicos.",
      },
    ],
  },
  {
    section: "Equipo",
    items: [
      {
        question: "¿Quién forma parte del equipo de ToolTesis?",
        answer: "Nuestro equipo está compuesto por profesionales con amplia experiencia y profesores especializados en áreas clave. Esta combinación nos permite ofrecer asesorías efectivas y orientadas a la excelencia académica.",
      },
      {
        question: "¿Qué nivel de experiencia tiene el equipo de ToolTesis?",
        answer: "Contamos con expertos en redacción académica, metodología de la investigación, matemáticas y otras disciplinas. Cada miembro aporta su conocimiento y experiencia para apoyarte en alcanzar los objetivos de tu proyecto académico.",
      },
      {
        question: "¿Cómo se gestiona el trabajo en ToolTesis?",
        answer: "Trabajamos de manera ágil y adaptativa, asegurando una respuesta rápida y efectiva a las necesidades de cada estudiante. Nos enfocamos en cumplir con tus plazos y expectativas, manteniendo siempre una comunicación fluida.",
      },
    ],
  },
  {
    section: "Clientes",
    items: [
      {
        question: "¿Con qué tipo de estudiantes trabaja ToolTesis?",
        answer: "Apoyamos a estudiantes de diversos niveles y áreas de estudio, tanto en Trabajos Finales de Grado y Máster como en proyectos específicos como artículos científicos, guiones de estudio y presentaciones. Nos adaptamos a las necesidades de cada estudiante.",
      },
      {
        question: "¿Cómo entienden las necesidades de los estudiantes?",
        answer: "Nos tomamos el tiempo para entender los requisitos y objetivos de cada proyecto académico. Proporcionamos una asesoría personalizada que se adapta a las normas y estándares académicos específicos, como APA, Vancouver, Chicago, MLA, y Harvard.",
      },
      {
        question: "¿Ofrecen reuniones presenciales?",
        answer: "Todas nuestras asesorías se realizan a través de medios virtuales como nuestra página web, aplicación web y WhatsApp. Así aseguramos una comunicación eficiente y accesible sin importar la ubicación.",
      },
      {
        question: "¿En qué regiones ofrecen sus servicios?",
        answer: "Actualmente, ofrecemos nuestros servicios de asesoría académica a estudiantes de Chile y España, brindando un apoyo personalizado en cada proyecto académico.",
      },
    ],
  },
  {
    section: "Servicios",
    items: [
      {
        question: "¿Qué servicios ofrece ToolTesis?",
        answer: "Ofrecemos un amplio rango de servicios académicos, incluyendo Trabajos Finales de Máster y Grado, asesorías, redacción de artículos científicos, creación de guiones de estudio y presentaciones, entre otros. Nuestro objetivo es acompañarte en cada fase de tu proyecto académico.",
      },
      {
        question: "¿ToolTesis se especializa en algún tipo de proyectos académicos?",
        answer: "Nos especializamos en proyectos de diferentes áreas académicas y en la redacción de documentos formales como artículos científicos y guiones de estudio. Adaptamos nuestro apoyo según la disciplina y nivel de estudio del estudiante.",
      },
      {
        question: "¿También brindan asesorías en temas específicos como matemáticas o copywriting?",
        answer: "Sí, contamos con asesores especializados en áreas como matemáticas, copywriting y redacción científica. Este enfoque permite que cada proyecto reciba una atención especializada según el tema y los objetivos del estudiante.",
      },
    ],
  },
  {
    section: "Confidencialidad y seguridad",
    items: [
      {
        question: "¿Cómo maneja ToolTesis la confidencialidad de los datos personales de los estudiantes?",
        answer: "Para proteger tu privacidad, en ToolTesis evitamos el uso de datos personales directos. En lugar de eso, utilizamos alias, seudónimos y un identificador único asignado a cada estudiante para la comunicación y gestión del proyecto. Esto nos permite mantener un alto nivel de confidencialidad en todo momento.",
      },
      {
        question: "¿Qué sucede si tengo dudas sobre la seguridad de mi información?",
        answer: "Siempre estamos disponibles para resolver cualquier inquietud sobre la privacidad y seguridad de tu proyecto académico. Nuestro compromiso es que cada estudiante se sienta seguro al trabajar con nosotros.",
      },
    ],
  },
  {
    section: "Garantías",
    items: [
      {
        question: "¿Qué garantías ofrece ToolTesis en sus servicios?",
        answer: "Garantizamos que cada proyecto se desarrolla con la máxima calidad y precisión académica. Además, ofrecemos revisiones y asesorías continuas para asegurar que cumples con los requisitos y plazos necesarios. Además, en ToolTesis utilizamos software anti plagio para verificar la originalidad de cada proyecto académico antes de entregarlo. Esto te garantiza un trabajo único y alineado con los requisitos de calidad académica, evitando problemas de autenticidad y asegurando que puedas aprobar sin mayor dificultad.",
      },
      {
        question: "¿Qué normas académicas utilizan en ToolTesis?",
        answer: "Nos apegamos a las principales normas académicas, como APA, Vancouver, Chicago, MLA, y Harvard. Estas normas aseguran que cada documento cumpla con los estándares de presentación y referencias establecidos.",
      },
      {
        question: "¿Cómo aseguran la calidad en ToolTesis?",
        answer: "Cada proyecto pasa por un proceso detallado de revisión y asesoría. Además, contamos con un equipo diverso de profesionales y profesores especializados en diversas áreas, lo que asegura que recibas un acompañamiento de alta calidad y orientado a resultados.",
      },
      {
        question: "¿Cómo reflejan su compromiso con el estudiante?",
        answer: "Nuestro equipo mantiene una comunicación constante y accesible a través de medios virtuales como nuestra página web, aplicación web y WhatsApp. Nos aseguramos de entender tus necesidades y orientarte en cada paso de tu proyecto académico.",
      },
      {
        question: "¿Qué sucede si necesito modificaciones después de la entrega?",
        answer: "Estamos disponibles para realizar ajustes según tus indicaciones, asegurando que cada parte del proyecto cumpla con tus expectativas y las directrices académicas.",
      },
    ],
  },
];



const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (sectionIdx, itemIdx) => {
    const index = `${sectionIdx}-${itemIdx}`;
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-2 text-left">
          Preguntas Frecuentes
        </p>
        <p className="text-left text-gray-600 mb-8">
          Explora nuestras preguntas frecuentes sobre ToolTesis: qué nos motiva, nuestros valores, quién forma parte del equipo, los servicios que ofrecemos, las garantías de calidad, y cómo aseguramos la confidencialidad en cada proyecto académico que desarrollamos.
        </p>
        <div className="text-gray-700">
          {faqs.map((section, sectionIdx) => (
            <div
              key={sectionIdx}
              className="mb-8 p-6 bg-white rounded-2xl shadow-lg transition-transform transform hover:scale-10"
            >
              <h2 className="text-2xl font-semibold mb-4">{section.section}</h2>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="mb-4 hover:text-sky-600 transition duration-200">






                  <span className="cursor-pointer" onClick={() => toggleFAQ(sectionIdx, itemIdx)}>
                    <ArrowDropDownIcon/>
                  </span>
                  <span onClick={() => toggleFAQ(sectionIdx, itemIdx)}
                    className="w-full text-left p-4 hover:text-sky-600 transition duration-200 font-semibold cursor-pointer">
                      {item.question}
                  </span>







                  {activeIndex === `${sectionIdx}-${itemIdx}` && (
                    <div className="px-10">
                      <div className="mt-2 text-gray-800 p-4 bg-sky-100 rounded-lg transition-all duration-300 ease-in-out">
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Features
        strTitle="Características destacadas"
        strsubtitle="Conoce lo que nos hace únicos en ToolTesis."
        strText={[
          "Asesoría Personalizada",
          "Confidencialidad Asegurada",
          "Uso de Normas Reconocidas",
          "Control de Plagio",
          "Equipo Multidisciplinario",
        ]}
        strBtn="Leer más"
        path="/features"
      />
    </section>
  );
};

export default FAQ;