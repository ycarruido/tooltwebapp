"use client";
import React from "react";
import Image from "next/image";
import ServicesCTA from "../../components/ui/ServicesCTA/ServicesCTA";
import MovingIcon from "@mui/icons-material/Moving";
import SwipeUpIcon from "@mui/icons-material/SwipeUp";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";

function About() {
  return (
    <div className="container mx-auto py-2 px-8">
      {/* Background header section */}

      <div className="relative w-screen left-1/2 -translate-x-1/2 pb-5">
        <ServicesCTA
          strText="Apoyamos a estudiantes, investigadores y profesionales en el desarrollo de proyectos académicos sobresalientes que cumplen con los más altos estándares."
          strQ="Sobre Tooltesis"
          strBtn=""
          bgColor="bg-gray-600"
        />
      </div>

      {/* Content section */}
      <div className="p-4 space-y-8">

      <p className="pb-2">
        Tooltesis es una empresa dedicada a brindar asesoría académica integral en proyectos de TFG y TFM. Nuestro equipo de profesionales se enfoca en ofrecer soluciones
        prácticas y efectivas para las necesidades académicas de cada
        estudiante.
      </p>

      <p className="pb-2">
        Operamos de forma completamente remota, lo que nos permite adaptarnos a
        las necesidades de nuestros clientes sin importar su ubicación. Coordinamos
        cada etapa del proceso con eficiencia y un alto nivel de organización.
        La comunicación con nuestros asesores es constante, utilizando diversos
        canales virtuales para asegurar que cada proyecto cumpla con los
        estándares de calidad y satisfacción que nuestros clientes esperan.
      </p>


        {/* Section for "Sobre la Empresa" */}
        <ul className="space-y-2 pb-2">
          <li className="items-left justify-between">
            <LabelImportantIcon className="text-sky-600" />
            10+ años de experiencia en asesoría académica
          </li>
          <li className="items-left justify-between">
            <LabelImportantIcon className="text-sky-600" />
            300+ proyectos académicos completados exitosamente
          </li>
          <li className="items-left justify-between">
            <LabelImportantIcon className="text-sky-600" />
            20,000+ horas dedicadas a la investigación y desarrollo académico
          </li>
          <li className="items-left justify-between">
            <LabelImportantIcon className="text-sky-600" />
            50+ especialidades
          </li>
        </ul>

        <p>
          Desde 2013, Tooltesis se ha ganado la confianza de estudiantes y
          académicos. Nuestra misión es ayudar a cada cliente a alcanzar sus
          metas académicas mediante una asesoría de calidad, apoyo continuo y
          soluciones personalizadas. Nos dedicamos a ofrecer el acompañamiento
          necesario para que cada proyecto logre el éxito y supere las
          expectativas.
        </p>
        {/* Purpose section */}
        <div className="flex items-center">
          <div className="mr-6">
            <MovingIcon fontSize="large" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Propósito</h2>
            <p className="mt-2 text-gray-700">
              Guiar a los estudiantes en sus proyectos académicos con asesorías
              personalizadas, asegurando trabajos de investigación sólidos,
              claros y ajustados a los más altos estándares académicos.
            </p>
          </div>
        </div>

        {/* Mission section */}
        <div className="flex items-center">
          <div className="mr-6">
            <SwipeUpIcon fontSize="large" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Misión</h2>
            <p className="mt-2 text-gray-700">
              Acompañarte en cada etapa de tu desarrollo académico mediante
              asesoría personalizada, logrando así que te
              sientas seguro y respaldado en cada paso.
            </p>
          </div>
        </div>

        {/* Vision section */}
        <div className="flex items-center">
          <div className="mr-6">
            <QueryStatsIcon fontSize="large" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Visión</h2>
            <p className="mt-2 text-gray-700">
              Ser el referente de confianza en asesoría académica en los ámbitos
              de TFG, TFM y otros proyectos universitarios, ofreciendo
              soluciones de calidad que impulsen el crecimiento académico.
            </p>
          </div>
        </div>

        {/* Values section */}
        <div className="flex items-center pb-10">
          <div className="mr-6">
            <VolunteerActivismIcon fontSize="large" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Valores</h2>
            <p className="mt-2 text-gray-700">
              En Tooltesis, nuestros valores incluyen la integridad, el
              compromiso, la excelencia, la confidencialidad y el respeto hacia
              cada estudiante, asegurando un trato y una asistencia de calidad
              en cada proyecto.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
