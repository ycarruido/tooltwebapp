"use client";
import Image from "next/image";
import SectionWrapper from "../../SectionWrapper";
import wapps01 from "../../../../public/img/wapps01.svg";
import wps01 from "../../../../public/img/wps01.svg";
import mkgs01 from "../../../../public/img/mkgs01.svg";
import movs01 from "../../../../public/img/movs01.svg";
import Link from "next/link";
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import WifiIcon from '@mui/icons-material/Wifi';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';

const Services = () => {
  const services = [
    {
      srcImage: wapps01,
      title: "TFG",
      subtitle: "Trabajo Final de Grado",
      desc: "Te ofrecemos apoyo completo para la elaboración de tu Trabajo Final de Grado, guiándote en cada etapa para que tu proyecto refleje tus objetivos y se ajuste a los estándares exigidos",
    },
    {
      srcImage: movs01,
      title: "TFM",
      subtitle: "Trabajo Final de Máster",
      desc: "Nos encargamos de redactar tu Trabajo Final de Máster, creando un proyecto completo y bien estructurado que cumpla con todas las exigencias académicas",
    },
    {
      srcImage: mkgs01,
      title: "Tesis",
      subtitle: "Redacción y defensa",
      desc: "Servicio integral de redacción de tesis, asegurando que tu trabajo cumpla con los estándares académicos y esté estructurado de manera clara y efectiva",
    },
    {
      srcImage: wps01,
      title: "Asesorías",
      subtitle: "Orientación profesional",
      desc: "Nuestros expertos te guiarán para estructurar tus ideas y desarrollar una investigación que se ajuste a tus objetivos",
    },
    {
      srcImage: mkgs01,
      title: "Guión de estudio",
      subtitle: "Planificación estructurada",
      desc: "Creamos guiones de estudio que te ayudarán a organizar la información clave y a prepararte eficientemente para tus exámenes y proyectos",
    },
    {
      srcImage: mkgs01,
      title: "Presentaciones",
      subtitle: "PowerPoint | Slides | Canva | Prezi",
      desc: "Te apoyamos en la creación de presentaciones impactantes, ayudándote a diseñarlas y estructurarlas para captar la atención de tu audiencia",
    },
    {
      srcImage: mkgs01,
      title: "Artículos Científicos",
      subtitle: "Redacción, revisión y publicación",
      desc: "Redacción y publicación de artículos científicos, asegurando que tu investigación se presente de forma clara y profesional",
    },
    {
      srcImage: mkgs01,
      title: "Ciencias Matemáticas",
      subtitle: "Álgebra, cálculo, y estadística",
      desc: "Ofrecemos apoyo en ciencias matemáticas, desde la comprensión de conceptos hasta la resolución de problemas, para que adquieras confianza en el área",
    },
  ];

  return (
    <SectionWrapper id="services900" className="pt-20 pb-12 bg-gray-100">
      <div className="container mx-auto px-8">
        <p className="text-black text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl pb-10">
          Nuestros Servicios
        </p>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center rounded-3xl bg-white p-[3rem] text-gray-700 border-2 border-[#009fe3] relative shadow-lg">
              {/* Parte superior que simula la pantalla del teléfono */}
              <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-2 bg-gray-100 rounded-t-3xl">
                <span className="text-sm">12:4{index}</span>
                <div className="flex items-center space-x-2">
                  <BatteryFullIcon fontSize="small" />
                  <WifiIcon fontSize="small" />
                  <SignalCellularAltIcon fontSize="small" />
                </div>
              </div>
              <div className="absolute top-9 left-0 right-0 flex justify-between items-center p-2 bg-sky-100">
                <span className="text-sm"><ForwardToInboxIcon /></span>
              </div>
              <h1 className="text-3xl font-semibold pt-10">{service.title}</h1>
              {/* <div className="w-20 h-20 mb-4">
                <Image src={service.srcImage} alt={service.title} width={80} height={80} />
              </div> */}
              <h6 className="text-lg mb-2 text-gray-600 pb-10">{service.subtitle}</h6>
              <p className="text-gray-900">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Services;