
import Footer from '../components/ui/Footer/Footer';
import '../styles/globals.css';
import Navbar from '../components/ui/Navbar/Navbar';
import BackToTopButton from '../components/ui/BackToTopButton/BackToTopButton';

import {
  Montserrat
} from 'next/font/google'

const montserrat = Montserrat({
  weight:["300","400","500","700"],
  style: ["italic","normal"],
  subsets:["latin"]
})

export const metadata = {
  title: "Tooltesis - Asesoría Académica para Tesis, TFG y TFM Personalizados - ¡Contáctanos!",
description: "Tooltesis ofrece asesoría profesional para Tesis, Trabajos Finales de Grado y de Máster (TFG y TFM), guías de estudio, presentaciones, y artículos científicos. Nuestro equipo experto garantiza confidencialidad y soporte integral para ayudarte a alcanzar el éxito académico. ¡Contáctanos hoy para iniciar tu proyecto!",
  icons: {
    icon:[
      {
        media: '(prefers-color-scheme: light)',
        url: '/img/favicon-all.png',
        href: '/img/favicon-all.png'
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/img/favicon-all.png',
        href: '/img/favicon-all.png'
      },
    ],
  },
};



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={montserrat.className} >

        {/* Google reCAPTCHA V3*/}
        {/* <Script 
          strategy='beforeInteractive'
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_DACS_GCAPTCHA_SITEKEY}`}
        /> */}

        <Navbar/>
          <main style={{ paddingTop: '60px' }}>
            {children}
          </main>
        <Footer />
        <BackToTopButton />
      </body>
    </html>
  )
}