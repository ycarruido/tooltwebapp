import Head from "next/head";
import StyledWrapper from "../components/StyledWrapper";
import ButtonCTA from "../components/ui/ButtonCTA/ButtonCTA";
import Services from "../components/ui/Services/Services";
import FooterCTA from "../components/ui/ActionCall/ActionCall";
import Hero from "../components/ui/Hero/Hero";
import ListTools from "../components/ui/ListTools/ListTools";
import Testimonials from "../components/ui/Testimonials/Testimonials";
import OtherFeatures from "../components/ui/Features/Features";
import About from "../components/ui/About/About";
import StatsSection from "../components/ui/StatsSection/StatsSection";
import FeaturesApps from "../components/ui/FeaturesApps/FeaturesApps";

function HomePage() {
  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero />
      <Services />
      <ListTools />
      {/*<ButtonCTA />
      <StatsSection />*/}

      <OtherFeatures
        strTitle="Características destacadas"
        strsubtitle="Conoce lo que nos hace únicos en ToolTesis"
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

      {/* <div className="container mx-auto px-8 pb-12">
        <FeaturesApps />
      </div>  */}

    </>
  );
}

export default HomePage;
