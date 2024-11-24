import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const socialNetworks = [
  { Icon: XIcon, href: "https://x.com/tooltesis", fontSize: 20 },
  {
    Icon: InstagramIcon,
    href: "https://www.instagram.com/toolstesis",
    fontSize: 24,
  },
  {
    Icon: FacebookIcon,
    href: "https://www.facebook.com/tooltesis",
    fontSize: 24,
  },
];

const Footer = () => (
  <footer className="w-full bg-gray-700 text-white">
    <div className="custom-screen pt-16 m-0 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="py-4 rounded">
          <h2 className="text-md font-medium">ENCUÉNTRANOS</h2>
          <p className="text-sm font-light">
            En ToolTesis, te acompañamos en la asesoría y redacción de tus
            tesis, TFG, TFM y proyectos de investigación. Nos especializamos en
            normas APA, Vancouver, y más, asegurando que tu trabajo cumpla con
            los estándares académicos y esté bien estructurado.
          </p>
          <ul className="text-md pt-2 font-light list-none space-y-2">
            <li className="flex items-center">
              <span className="mr-2 text-sky-100">→</span>
              <a
                target="_blank"
                href="https://wa.me/56967387656"
                className="hover:underline text-sky-200"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2 text-sky-100">→</span>
              <a
                target="_blank"
                href="mailto:proyectos@tooltesis.com"
                className="hover:underline text-sky-200"
              >
                proyectos@tooltesis.com
              </a>
            </li>
          </ul>
        </div>

        <div className="p-4 rounded">
          <h2 className="text-md font-medium">SERVICIOS</h2>
          <ul className="text-sm font-light list-disc pl-5">
            <li>Trabajo Final de Máster</li>
            <li>Trabajo Final de Grado</li>
            <li>Asesorías </li>
            <li>Guión de estudio</li>
            <li>Presentaciones </li>
            <li>Artículos Científicos </li>
            <li>CopyWriting </li>
            <li>Matemáticas </li>
          </ul>
        </div>

        <div className="p-4 rounded">
          <h2 className="text-md font-medium">CONTACTO</h2>
          <ul className="text-sm font-light list-disc pl-5">
            <li>
              WhatsApp
              <a
                target="_blank"
                href="https://wa.me/56972429560"
                className="m-2 text-gray-850 hover:text-sky-800 font-medium duration-150"
              >
                +56 9 7242 9560
              </a>
            </li>
            <li>Chile</li>
          </ul>
        </div>

        <div className="p-4 rounded">
          <h2 className="text-md font-medium">PROPÓSITO</h2>
          <ul className="text-sm font-light">
            <li>
              Guiar a los estudiantes en sus proyectos académicos con asesorías
              personalizadas, asegurando trabajos de investigación sólidos,
              claros y ajustados a los más altos estándares académicos.
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 py-10 border-t items-center justify-between sm:flex w-full text-sm font-light">
        <p>© 2024 Tooltesis. Todos los derechos reservados.</p>

        <div className="flex items-center gap-x-6 mt-6">
          {socialNetworks.map((network, idx) => (
            <a
              key={idx}
              href={network.href}
              aria-label="social media"
              target="_blank"
              rel="noreferrer"
              className="rounded-md hover:bg-sky-700 transition-colors"
            >
              <network.Icon style={{ fontSize: network.fontSize }} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
