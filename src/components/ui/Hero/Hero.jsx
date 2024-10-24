import Link from "next/link";

const Hero = () => (
  <section
    className="sm:mb-2 md:mb-24 lg:mb-24 flex items-center"
    style={{ height: "calc(100vh - 150px)", backgroundImage: "url('/img/banner03.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
  >
    <div className="flex w-full px-4 md:px-20 mx-auto h-full bg-gray-700 bg-opacity-0"> {/* Fondo oscuro para mejor legibilidad */}
      {/* Columna izquierda (60% en pantallas grandes) */}
      <div className="w-full md:w-1/2 text-left space-y-5 flex flex-col justify-center text-white">
        {/* <h1 className="text-4xl lg:text-8xl md:text-6xl sm:text-4xl xs:text-xl font-medium shadow-lg">
          Redacción experta
        </h1>
        <p className="max-w-xl shadow-lg">
        Estamos aquí para ayudarte a alcanzar tus metas universitarias y asegurarte el éxito en tu proyecto de investigación: Asesoría • Redacción • Metodología • Investigación
        </p> */}

<div className="relative bg-cover bg-center">
<div className="absolute inset-0 bg-black opacity-50  rounded-3xl"></div> {/* Fondo semitransparente */}
    <div className="relative z-10 text-white p-4">
        <h1 className="text-4xl lg:text-8xl md:text-6xl sm:text-4xl xs:text-xl font-medium">
            Redacción experta
        </h1>
        <p className="max-w-xl">
            Estamos aquí para ayudarte a alcanzar tus metas universitarias y asegurarte el éxito en tu proyecto de investigación: Asesoría • Redacción • Metodología • Investigación
        </p>
    </div>
</div>

        <div className="flex flex-col md:flex-row items-center justify-start gap-x-3 font-medium text-sm">
          <Link
            href="/contact"
            className="menu block w-full md:w-auto font-medium text-sm text-white bg-sky-800 hover:bg-sky-600 active:bg-sky-900 px-4 py-2 rounded-lg text-center"
          >
            Contáctanos Hoy
          </Link>
          <Link
            href="/servicesDet/appDev"
            className="menu block w-full md:w-auto font-medium text-gray-700 border bg-gray-200 hover:bg-gray-50 px-4 py-2 rounded-lg text-center mt-2 md:mt-0"
            scroll={false}
          >
            Leer Más
          </Link>
        </div>
      </div>
      {/* Imagen a la derecha en pantallas grandes */}
      <div className="hidden md:block md:w-1/2 h-full"></div>
    </div>
  </section>
);

export default Hero;
