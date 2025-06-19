import SectionWrapper from "../../SectionWrapper";
import Link from "next/link";

const ButtonCTA = () => {
  return (
    <SectionWrapper id="cta" className="bg-sky-600 w-full">
      <div className="custom-screen">
        <div className="flex flex-col-reverse items-center gap-x-6 lg:flex-row lg:gap-x-12 pb-4 lg:pb-4">
          <div className="flex-1 mt-6 lg:mt-0 lg:max-w-lg">
            <ul className="mt-6 space-y-4 text-white text-sm md:text-base lg:text-lg list-outside pl-6">
              <li className="flex items-start space-x-2">
                <span className="text-xl">→</span>
                <span>
                  Desde la redacción de Tesis y TFG/TFM hasta la asesoría personalizada y preparación de presentaciones, en Tooltesis ofrecemos el apoyo necesario para que alcances el éxito en tus proyectos académicos.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:max-w-2xl text-center lg:text-left">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
              Haz de tu tesis un proyecto exitoso
            </p>
            <p className="mt-3 text-white text-base sm:text-sm md:text-base lg:text-lg">
              Con el apoyo de nuestros asesores, asegura que tu tesis cumpla con altos estándares académicos y sobresalga
            </p>
            <Link
              href="/contact"
              className="inline-block mt-4 font-medium text-sm text-white bg-gray-900 hover:bg-gray-800 active:bg-gry-700 px-6 py-3 rounded-full"
            >
              Comienza Hoy
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ButtonCTA;
