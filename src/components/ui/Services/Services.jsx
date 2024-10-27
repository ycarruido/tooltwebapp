"use client";
import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";
import wapps01 from "../../../../public/img/wapps01.svg";
import wps01 from "../../../../public/img/wps01.svg";
import mkgs01 from "../../../../public/img/mkgs01.svg";
import movs01 from "../../../../public/img/movs01.svg";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      srcImage: wapps01,
      title: "TFG",
      subtitle: "Trabajo Final de Grado",
      desc: "Te ofrecemos apoyo completo para la elaboración de tu Trabajo Final de Grado, guiándote en cada etapa para que tu proyecto refleje tus objetivos y se ajuste a los estándares exigidos",
      url: '/servicesDet/Tfg'
    },
    {
      srcImage: movs01,
      title: "TFM",
      subtitle: "Trabajo Final de Máster",
      desc: "Nos encargamos de redactar tu Trabajo Final de Máster, creando un proyecto completo y bien estructurado que cumpla con todas las exigencias académicas",
      url: '/servicesDet/Tfm'
    },
    {
      srcImage: movs01,
      title: "Tesis",
      subtitle: "Redacción y defensa",
      desc: "Servicio integral de redacción de tesis, asegurando que tu trabajo cumpla con los estándares académicos y esté estructurado de manera clara y efectiva",
      url: '/servicesDet/Tesis'
    },
    {
      srcImage: wps01,
      title: "Asesorías",
      subtitle: "Orientación profesional",
      desc: "Nuestros expertos te guiarán para estructurar tus ideas y desarrollar una investigación que se ajuste a tus objetivos",
      url: '/servicesDet/Asesorias'
    },
    {
      srcImage: mkgs01,
      title: "Guión de estudio",
      subtitle: "Planificación estructurada",
      desc: "Creamos guiones de estudio que te ayudarán a organizar la información clave y a prepararte eficientemente para tus exámenes y proyectos",
      url: '/servicesDet/Guion'
    },
    {
      srcImage: mkgs01,
      title: "Presentaciones",
      subtitle: "PowerPoint | Slides | Canva | Prezi",
      desc: "Te apoyamos en la creación de presentaciones impactantes, ayudándote a diseñarlas y estructurarlas para captar la atención de tu audiencia",
      url: '/servicesDet/Presentaciones'
    },
    {
      srcImage: mkgs01,
      title: "Artículos Científicos",
      subtitle: "Redacción, revisión y publicación",
      desc: "Redacción y publicación de artículos científicos, asegurando que tu investigación se presente de forma clara y profesional",
      url: '/servicesDet/Articulos'
    },
    {
      srcImage: mkgs01,
      title: "Ciencias Matemáticas",
      subtitle: "Álgebra, cálculo, y estadística",
      desc: "Ofrecemos apoyo en ciencias matemáticas, desde la comprensión de conceptos hasta la resolución de problemas, para que adquieras confianza en el área",
      url: '/servicesDet/Matematicas'
    },
  ];

  return (
    <SectionWrapper id="services900" className="pt-24 pb-12">
      <div className="container mx-auto px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-6">
          Nuestros Servicios
        </p>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg border relative"
              
            >
              <Link href={service.url}>
              <div className="bg-sky-600 p-4 rounded-t-lg">
                <h3 className="text-white text-3xl font-semibold mb-1">{service.title}</h3>
                <h6 className="text-lg text-gray-100">{service.subtitle}</h6>
              </div>
              <div className="p-6">
                
                <ul className="list-disc pl-5">
                  <li >
                    <p className="text-gray-900">{service.desc}</p>
                  </li>
                </ul>
                
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;