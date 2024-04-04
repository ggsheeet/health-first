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
          content="Dr. Marcelo González, servicios de medicina estética, bótox, rellenos, mesoterapía, etc."
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
              src="/em1.png"
              width={"900"}
              height={"900"}
              alt="svg by Vitaliy Gorbachev"
              className="not-selectable w-16 h-16 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 hidden md:block"
              style={{
                animation: "fade-in 1s ease-in",
                objectPosition: "center 50%",
              }}
              onLoad={handleImageLoad}
            />
            <Image
              src="/em2.png"
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
              src="/em3.png"
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
            "La medicina estética es una disciplina que se enfoca en mejorar la
            apariencia física y el bienestar emocional de las personas. Su
            propósito principal es realzar la belleza natural, retrasar los
            signos del envejecimiento y brindar un aspecto más rejuvenecido y
            saludable."
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
                  className="not-selectable object-cover w-[20rem] h-[22.43rem] md:w-[45rem] md:h-[22rem] lg:w-[45rem] lg:h-[22rem] xl:w-[48rem] xl:h-[22rem] object-top"
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
                      MEDICINA ESTETICA ISAE UNIVERSIDAD
                    </p>
                    <p className="--font-montse text-sm lg:text-lg text-gray-800 ml-4 mb-2">
                      CED. MAESTRIA: 117135
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pr-9 md:pr-0 lg:pr-2">
                    Con su sólida formación médica completada en la Universidad
                    Autónoma de Nuevo León y su especialización en medicina
                    estética, el Dr. Marcelo González ha adquirido un profundo
                    conocimiento en el cuidado y embellecimiento del cuerpo
                    humano. Su enfoque se basa en combinar los principios
                    médicos con las últimas técnicas y avances en medicina
                    estética, brindando a sus pacientes resultados
                    excepcionales.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="--font-montse text-sm lg:text-base text-center justify-center text-gray-800 mx-auto w-5/6">
        *Todo tratamiento o procedimiento estético debe ser valorado por el
        médico en una consulta inicial previa
      </div>
      {hasScrolled && isButtonVisible && (
        <div className="fixed bottom-6 md:bottom-8 right-2 md:right-6 z-10">
          <Link
            href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
            target="_blank"
            className="bg-brand-gold border-[0.225rem] border-brand-gold --font-poppins text-brand-deep text-base md:text-lg px-4 py-2 rounded-full hover:bg-brand-seasalt hover:text-brand-deep"
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
              Botóx
            </p>
            <Image
              src="/botox-min.png"
              width={100}
              height={100}
              alt="png by Freepik"
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </div>
          <p className="text-sm md:text-lg --font-montse mt-4 md:mt-7 text-brand-ultra-violet">
            El botóx es un tratamiento estético que se utiliza para reducir las
            arrugas y líneas de expresión. Consiste en la aplicación de una
            toxina botulínica de forma segura y precisa
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
              Se aplica mediante inyecciones en áreas específicas del rostro
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
              El procedimiento es rápido y generalmente no requiere anestesia
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
              Los resultados suelen ser visibles en unos días y pueden durar
              varios meses
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
              Es recomendable repetir el tratamiento cada 3-6 meses para
              mantener los efectos deseados
            </li>
          </ul>
        </div>
        <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:mr-16 md:my-12 lg:mt-12 lg:mb-4 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
          <div className="relative flex items-center space-x-3 md:space-x-4">
            <p className="--font-rale text-brand-ultra-violet border-b-2 border-brand-deep">
              Relleno con AH
            </p>
            <Image
              src="/labios-min.png"
              width={100}
              height={100}
              alt="png by Freepik"
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </div>
          <p className="text-sm md:text-lg --font-montse mt-4 md:mt-7 text-brand-ultra-violet">
            La técnica de relleno con ácido hialurónico o "fillers" es utilizada
            principalmente para realzar los labios, la barbilla y los pómulos
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
              Es una sustancia aprobada, altamente segura y compatible con el
              cuerpo
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
              El procedimiento implica la inyección precisa del relleno con el
              objetivo de dar un aspecto facial armónico y estético
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
              Los resultados son inmediatos y pueden durar de 6 a 12 meses,
              dependiendo de cada paciente
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
              Es importante que el tratamiento sea realizado por un profesional
              médico experimentado en estética facial
            </li>
          </ul>
        </div>
        <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:ml-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
          <div className="relative flex items-center space-x-3 md:space-x-4">
            <p className="--font-rale text-brand-ultra-violet border-b-2 border-brand-deep">
              Mesoterapia
            </p>
            <Image
              src="/meso-min.png"
              width={100}
              height={100}
              alt="png by Freepik"
              className="w-8 h-8 md:w-9 md:h-9"
            />
          </div>
          <p className="text-sm md:text-lg --font-montse mt-4 md:mt-7 text-brand-ultra-violet">
            La mesoterapia es un tratamiento estético no invasivo que consiste
            en la aplicación de pequeñas inyecciones en la capa media de la piel
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
              Las inyecciones se administran directamente en las áreas
              problemáticas, como la cara, el cuello o el cuerpo, para estimular
              la regeneración celular y mejorar la apariencia de la piel
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
              Ayuda a reducir la celulitis, estimular la producción de colágeno,
              mejorar la hidratación de la piel y disminuir la apariencia de
              arrugas y líneas finas
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
              El número de sesiones requeridas puede variar según las
              necesidades individuales, pero generalmente se recomienda un curso
              inicial de varias sesiones seguidas de sesiones de mantenimiento
            </li>
          </ul>
        </div>
        <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:mr-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
          <div className="relative flex items-center space-x-2 md:space-x-3">
            <p className="--font-rale text-brand-ultra-violet border-b-2 border-brand-deep">
              Prevención
            </p>
            <Image
              src="/rejuv-min.png"
              width={100}
              height={100}
              alt="png by Freepik"
              className="w-9 h-9 md:w-10 md:h-10"
            />
          </div>
          <p className="text-sm md:text-lg --font-montse mt-4 md:mt-7 text-brand-ultra-violet">
            Todas las técnicas ya mencionadas fungen un papel fundamental en la
            prevención de los signos del envejecimiento relacionados a la edad o
            por agentes ambientales externos
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
              Estos tratamientos no invasivos ofrecen resultados inmediatos y
              naturales, sin requerir cirugía ni tiempos de recuperación
              prolongados
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
              La combinación de estos tratamientos puede ayudar a mantener una
              apariencia rejuvenecida y prevenir la aparición temprana de
              arrugas y otros signos de envejecimiento
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
              Es importante recordar que cada persona tiene necesidades y
              objetivos individuales y que la base del tratamiento empieza por
              la valoración guiada por el médico profesional
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
