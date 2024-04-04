'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import OtherHeader from "@/components/OtherHeader";
import { useState, useEffect } from "react";

export default function Estetica() {
  const [isLoading, setIsLoading] = useState(true);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const footerElement = document.getElementById("footer");
      const scrollThreshold = 840; // Adjust this value to your desired scroll level

      if (!hasScrolled) {
        setHasScrolled(true);
      }

      const scrollPosition = window.pageYOffset + window.innerHeight;

      if (
        scrollPosition >= scrollThreshold &&
        (!footerElement || scrollPosition < footerElement.offsetTop)
      ) {
        setIsButtonVisible(true);
      } else {
        setIsButtonVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled]);

  return (
    <div>
      <Head>
        <title>Health First</title>
        <meta charSet="UTF-8" />
        <meta property="og:image" content="/HF-FULL.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="675" />
        <meta
          name="keywords"
          content="clinica, consulta, , laboratorio, ,enfermeria, medicina, estetica, rehabilitacion, nutricion, fitness, sabinas"
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Dr. Marcelo González, servicios de rehabilitación física, terapía física, masaje relajante, ejercicios, etc."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HF-MIN.png" />
      </Head>

      <OtherHeader />
      <div>
        <div
          className="flex justify-center md:justify-between mx-auto space-x-6 xl:space-x-36 items-center top-0 left-0 pb-4 pt-7 md:pb-4 md:pt-10 bg-brand-deep fade-in"
          style={{
            animation: "fade-in 0.5s ease-in",
          }}
        >
          <div className="md:w-1/4 md:ml-20 lg:ml-32">
            <Image
              src="/DRMG-full.png"
              width={"1200"}
              height={"538"}
              alt="pic"
              priority
              className="not-selectable w-[15rem] h-[6.725rem] md:w-auto md:h-auto mx-auto fade-in hidden md:block"
              style={{
                animation: "fade-in 1s ease-in",
                objectPosition: "center 50%",
              }}
              onLoad={handleImageLoad}
            />
            <Image
              src="/DRMG-txt.png"
              width={"1200"}
              height={"568"}
              alt="pic"
              priority
              className="not-selectable w-[15rem] h-[6.725rem] md:w-auto md:h-auto mx-auto fade-in md:hidden"
              style={{
                animation: "fade-in 1s ease-in",
                objectPosition: "center 50%",
              }}
              onLoad={handleImageLoad}
            />
          </div>
          <div className="md:flex md:space-x-6 lg:space-x-12 xl:space-x-24 pr-6 md:pr-20 lg:pr-32 hidden">
            <Image
              src="/em4.png"
              width={"900"}
              height={"900"}
              alt="svg by Freepik"
              className="not-selectable w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 hidden md:block"
              style={{
                animation: "fade-in 1s ease-in",
                objectPosition: "center 50%",
              }}
              onLoad={handleImageLoad}
            />
            <Image
              src="/em5.png"
              width={"900"}
              height={"900"}
              alt="svg by Freepik"
              className="not-selectable w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 hidden md:block"
              style={{
                animation: "fade-in 1s ease-in",
                objectPosition: "center 50%",
              }}
              onLoad={handleImageLoad}
            />
            <Image
              src="/em6.png"
              width={"900"}
              height={"900"}
              alt="svg by Freepik"
              className="not-selectable w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 hidden md:block"
              style={{
                animation: "fade-in 1s ease-in",
                objectPosition: "center 50%",
              }}
              onLoad={handleImageLoad}
            />
          </div>
        </div>
        <div
          className="flex-col justify-between text-justify text-brand-gold text-base md:text-lg lg:text-xl mx-auto items-center top-0 left-0 px-12 pb-6 md:px-20 lg:px-32 md:py-8 lg:pb-12 lg:pt-8 bg-brand-deep fade-in"
          style={{
            animation: "fade-in 0.5s ease-in",
          }}
          onLoad={handleImageLoad}
        >
          <p>
            "La fisioterapia y la rehabilitación física son herramientas
            indispensables para cuidar y mantener nuestro cuerpo en óptimas
            condiciones, brindando una base sólida para una vida saludable y
            activa."
          </p>
        </div>
      </div>
      <div className="bg-brand-seasalt border-t-[0.0625rem] border-brand-gold pt-12 pb-10">
        <div className="container mx-auto flex items-center justify-center md:justify-between">
          {isLoading ? (
            <div className="items-center justicy-center mx-auto h-full">
              <div className="mx-auto">
                <svg
                  width="100px"
                  height="100px"
                  viewBox="0 0 16.00 16.00"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="animate-spin hds-flight-icon--animation-loading"
                  stroke="#000"
                  strokeWidth={0.00016}
                >
                  <g fill="#545B77" fillRule="evenodd" clipRule="evenodd">
                    <path
                      d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                      opacity={0.2}
                    />
                    <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
                  </g>
                </svg>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center">
              <div className="rounded-lg border-[0.25rem] border-brand-gold overflow-hidden md:ml-4 lg:ml-14 xl:ml-16 mb-8 md:mb-0 fade-in">
                <Image
                  src="/mjgq.jpeg"
                  width={584}
                  height={655}
                  alt="Dr. Marcelo González"
                  priority
                  className="not-selectable object-cover object-top w-[20rem] h-[22.43rem] md:w-[45rem] md:h-[22rem] lg:w-[45rem] lg:h-[22rem] xl:w-[48rem] xl:h-[22rem]"
                  style={{
                    animation: "fade-in 1s ease-in",
                  }}
                />
              </div>
              <div className="lg:w-1 xl:w-1.5 h-[21rem] bg-brand-gold rounded-full lg:ml-20 xl:ml-36 hidden lg:block"></div>
              <div className="flex flex-col ml-8 md:ml-20 lg:ml-20 xl:ml-32 fade-in md:mr-2 lg:mr-8 xl:mr-20">
                <div className="flex items-center">
                  <Image
                    src="/certificado-1.png"
                    width={"90"}
                    height={"90"}
                    alt="svg by Freepik"
                    className="not-selectable w-12 h-12 xl:w-12 xl:h-12"
                    style={{
                      animation: "fade-in 1s ease-in",
                    }}
                  />
                  <div className="flex flex-col pt-2">
                    <p className="--font-montse text-sm lg:text-lg text-gray-800 ml-4 mb-0">
                      MEDICO CIRUJANO Y PARTERO U.A.N.L.
                    </p>
                    <p className="--font-montse text-sm lg:text-lg text-gray-800 ml-4 mb-2">
                      CED. PROF: 12644113
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pr-9 md:pr-0 lg:pr-2">
                    Gracias a su pasión por ayudar a sus pacientes a recuperar
                    su funcionalidad y mejorar su calidad de vida de la mano de
                    técnicas y tratamientos de vanguardia, el Dr. Marcelo
                    González logra brindar una atención y manejo de alta calidad
                    ante diversos padecimientos físicos. Con una amplia
                    experiencia clínica y un enfoque centrado en el paciente, el
                    Dr. Dr. Marcelo González se esfuerza por brindar atención
                    médica de calidad y personalizada, adaptando sus
                    tratamientos a las necesidades individuales de cada
                    paciente.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {hasScrolled && isButtonVisible && (
        <div className="fixed bottom-6 md:bottom-8 right-2 md:right-6 z-10">
          <Link
            href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
            target="_blank"
            className="bg-brand-gold border-[0.225rem] border-brand-gold --font-poppins text-brand-deep text-base md:text-lg px-4 py-2 rounded-full hover:bg-brand-sand hover:text-brand-deep"
            style={{
              animation: "fade-in 0.2s ease-in",
            }}
          >
            Agenda tu consulta
          </Link>
        </div>
      )}
      <div className="grid grid-rows-1 lg:grid-cols-2">
        <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:ml-16 md:my-12 lg:mt-12 lg:mb-4 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
          <div className="relative flex items-center space-x-3 md:space-x-4">
            <p className="--font-rale text-brand-ultra-violet border-b-2 border-brand-deep">
              Terapía Fisica
            </p>
            <Image
              src="/physte-min.png"
              width={100}
              height={100}
              alt="png by surang"
              className="w-9 h-9 md:w-10 md:h-10"
            />
          </div>
          <p className="text-sm md:text-lg --font-montse mt-4 md:mt-7 text-brand-ultra-violet">
            La terapia física desempeña un papel fundamental en el cuidado de la
            salud y la prevención de lesiones
          </p>
          <ul className="text-sm md:text-lg text-brand-ultra-violet ml-1 mt-4">
            <li className="mb-3">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              >
                <Image
                  src="/HF-MIN.png"
                  alt="bullet"
                  width={20}
                  height={20}
                  className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
                />
              </div>
              Ayuda a restaurar la funcionalidad, mejorar la movilidad y aliviar
              el dolor en personas que han sufrido lesiones, enfermedades o
              cirugías
            </li>
            <li className="mb-3">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              >
                <Image
                  src="/HF-MIN.png"
                  width={20}
                  height={20}
                  alt="bullet"
                  className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
                />
              </div>
              No solo trata los síntomas, sino que también aborda las causas
              subyacentes de los problemas físicos, lo que ayuda a prevenir
              futuras lesiones y a mejorar la calidad de vida
            </li>
            <li className="mb-3">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              >
                <Image
                  src="/HF-MIN.png"
                  width={20}
                  height={20}
                  alt="bullet"
                  className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
                />
              </div>
              Los programas de terapia física se adaptan a las necesidades
              individuales de cada paciente, teniendo en cuenta su edad,
              condición y objetivos de rehabilitación
            </li>
          </ul>
        </div>
        <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:mr-16 md:my-12 lg:mt-12 lg:mb-4 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
          <div className="relative flex items-center space-x-3 md:space-x-4">
            <p className="--font-rale text-brand-ultra-violet border-b-2 border-brand-deep">
              Masaje Relajante
            </p>
            <Image
              src="/massa-min.png"
              width={100}
              height={100}
              alt="png by Freepik"
              className="w-8 h-8 md:w-9 md:h-9"
            />
          </div>
          <p className="text-sm md:text-lg --font-montse mt-4 md:mt-7 text-brand-ultra-violet">
            Los masajes relajantes de grado médico juegan un papel importante en
            el bienestar general de personas que padecen del estrés cotidiano y
            sus repercusiones en la salud
          </p>
          <ul className="text-sm md:text-lg text-brand-ultra-violet ml-1 mt-4">
            <li className="mb-3">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              >
                <Image
                  src="/HF-MIN.png"
                  width={20}
                  height={20}
                  alt="bullet"
                  className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
                />
              </div>
              Ayudan a reducir el estrés, aliviar la tensión muscular y promover
              la relajación profunda del cuerpo y la mente
            </li>
            <li className="mb-3">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              >
                <Image
                  src="/HF-MIN.png"
                  width={20}
                  height={20}
                  alt="bullet"
                  className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
                />
              </div>
              Son realizados por terapeutas especializados que aplican técnicas
              de masaje suaves y tranquilizadoras para liberar la tensión
              acumulada y mejorar la circulación sanguínea
            </li>
            <li className="mb-3">
              <div
                style={{
                  display: "inline-block",
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              >
                <Image
                  src="/HF-MIN.png"
                  width={20}
                  height={20}
                  alt="bullet"
                  className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
                />
              </div>
              Pueden ayudar a aliviar dolores musculares, reducir la ansiedad,
              mejorar la calidad del sueño y promover una sensación general de
              calma y bienestar
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:ml-16 lg:mr-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
        <div className="relative flex items-center space-x-2 md:space-x-3">
          <p className="--font-rale text-brand-ultra-violet border-b-2 border-brand-deep">
            Ejercicios
          </p>
          <Image
            src="/exerc-min.png"
            width={100}
            height={100}
            alt="png by Freepik"
            className="w-9 h-9 md:w-10 md:h-10"
          />
        </div>
        <p className="text-sm md:text-lg --font-montse mt-4 md:mt-7 text-brand-ultra-violet">
          Realizar ejercicios específicos para un padecimiento físico particular
          es fundamental en el proceso de rehabilitación
        </p>
        <ul className="text-sm md:text-lg text-brand-ultra-violet ml-1 mt-4">
          <li className="mb-3">
            <div
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            >
              <Image
                src="/HF-MIN.png"
                width={20}
                height={20}
                alt="bullet"
                className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
              />
            </div>
            Ayudan a fortalecer los músculos debilitados, mejorar la
            flexibilidad y aumentar la movilidad en áreas afectadas por lesiones
            o afecciones médicas
          </li>
          <li className="mb-3">
            <div
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            >
              <Image
                src="/HF-MIN.png"
                width={20}
                height={20}
                alt="bullet"
                className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
              />
            </div>
            Son diseñados y supervisados por profesionales de la salud, quienes
            adaptan el programa de ejercicios a las necesidades individuales de
            cada paciente
          </li>
          <li className="mb-3">
            <div
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            >
              <Image
                src="/HF-MIN.png"
                width={20}
                height={20}
                alt="bullet"
                className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
              />
            </div>
            Pueden incluir estiramientos, ejercicios de fortalecimiento
            muscular, ejercicios de equilibrio y coordinación, y técnicas de
            movilización y estabilización
          </li>
          <li className="">
            <div
              style={{
                display: "inline-block",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            >
              <Image
                src="/HF-MIN.png"
                width={20}
                height={20}
                alt="bullet"
                className="not-selectable w-3 h-3 md:w-4 md:h-4 mb-1"
              />
            </div>
            Es importante seguir las indicaciones y pautas de los profesionales
            de la salud para garantizar una ejecución correcta de los ejercicios
            y evitar posibles complicaciones
          </li>
        </ul>
      </div>
    </div>
  );
}
