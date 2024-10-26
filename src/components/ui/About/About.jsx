import NavLink from "../../ui/NavLink/NavLink";
import SectionWrapper from "../../SectionWrapper";

function About() {
  return (
    <SectionWrapper id="about901" className="bg-gray-600 w-full">
      <div className="custom-screen">
        <div className="flex flex-col lg:flex-row py-6">
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            {" "}
            {/* 40% de ancho en pantallas grandes */}
            <p className="text-white text-3xl font-medium sm:text-4xl md:text-5xl lg:text-6xl">
              Acerca de la empresa
            </p>
          </div>

          <div className="flex-1 mt-6 lg:mt-0 lg:w-3/5">
            {" "}
            {/* 60% de ancho en pantallas grandes */}
            <p className="text-white pb-4">
              Tooltesis es una empresa dedicada a brindar servicios integrales de asesoría académica, especializada en el desarrollo de proyectos de TFG y TFM. Nuestro equipo de profesionales se enfoca en ofrecer soluciones prácticas y efectivas para las necesidades académicas de cada estudiante.
            </p>
            <p className="text-white pb-10">
              Operamos de forma completamente remota, lo que nos permite adaptarnos a las agendas de nuestros clientes sin importar su ubicación. Coordinamos cada etapa del proceso con eficiencia y un alto nivel de organización. La comunicación con nuestros asesores es constante, utilizando diversos canales virtuales para asegurar que cada proyecto cumpla con los estándares de calidad y satisfacción que nuestros clientes esperan.
            </p>

              <NavLink
                href="/about"
                style={{ borderRadius: "9999px" }}
                className="inline-block mt-4 font-medium text-sm text-white bg-gray-900 hover:bg-gray-800 active:bg-gray-700 px-6 py-3"
              >
                Leer Más
              </NavLink>


          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;
