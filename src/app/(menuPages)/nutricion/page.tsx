'use client'
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import OtherHeader from "@/components/OtherHeader";
import { useState, useEffect } from "react";

export default function Rehabilitacion() {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

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
          content="Nutrición & Fitness | Health First Wellness Center"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HF-MIN.png" />
      </Head>

      <OtherHeader />
      <div
        className="flex flex-col bg-brand-opakeppel items-start top-0 left-0 pb-4 pt-7 md:pb-4 md:pt-10 fade-in"
        style={{
          animation: "fade-in 0.5s ease-in",
        }}
      >
        <div>
          <p className="--font-montse text-base md:text-2xl text-brand-sand mx-8 md:mx-16 mb-4 border-b-2 border-brand-sand">
            Nutrición & Fitness
          </p>
        </div>
        <div>
          <p className="--font-montse text-base md:text-lg text-brand-sand mx-8 md:mx-16 mb-2">
            Health First Wellness Center ofrece servicios de nutrición y
            entrenamiento físico para ayudarte a alcanzar y mantener un estilo
            de vida saludable.
          </p>
          <p className="--font-montse text-base md:text-lg text-brand-sand mx-8 md:mx-16 mb-2">
            Nuestro equipo está dedicado a brindarte la orientación y el apoyo
            necesarios para lograr tus metas de bienestar y alcanzar una estado
            físico óptimo coadyuvante en la prevención de enfermedades
            relacionadas a pobres hábitos alimenticios y al sedentarismo.
          </p>
        </div>
      </div>
      <div className="bg-brand-seasalt pt-14 pb-10">
        <div className="container mx-auto flex items-center justify-center md:justify-between">
          <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-lg border-[0.25rem] border-brand-opakeppel overflow-hidden md:ml-4 lg:ml-14 xl:ml-16 mb-8 md:mb-0 fade-in">
              <Image
                src="/nutri.jpeg"
                width={1208}
                height={1600}
                alt="Lic. Tomás Salas"
                priority
                className="not-selectable object-cover w-[19rem] h-[22.43rem] md:w-[42rem] md:h-[22rem] lg:w-[42rem] lg:h-[22rem] xl:w-[43rem] xl:h-[22rem]"
                style={{
                  objectPosition: "center 50%",
                  animation: "fade-in 0.5s ease-in",
                }}
              />
            </div>
            <div className="lg:w-1 xl:w-1.5 h-[21rem] bg-brand-opakeppel rounded-full lg:ml-20 xl:ml-36 hidden lg:block"></div>
            <div className="flex flex-col md:ml-20 lg:ml-20 xl:ml-32 fade-in md:mr-2 lg:mr-8 xl:mr-20">
              <div>
                <p className="--font-montse text-center md:text-start text-base md:text-xl text-gray-800 mb-2">
                  LIC. TOMAS SALAS
                </p>
              </div>
              <div>
                <p className="--font-montse text-center md:text-start text-sm lg:text-lg text-gray-800 mb-2">
                  NUTRICION CLINICA U.A.N.L.
                </p>
              </div>
              <div className="mt-5 ml-8 md:ml-0">
                <p className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pr-9 md:pr-0 lg:pr-2">
                  Con una formidable formación académica y una pasión por la
                  nutrición, el Lic. Tomás Salas se ha convertido en un
                  profesional altamente capacitado en el campo de la salud y el
                  bienestar. Su enfoque se centra en ayudar a sus pacientes a
                  alcanzar sus objetivos nutricionales a través de cambios
                  positivos en su alimentación y estilo de vida.
                </p>
              </div>
              <div className="flex mt-6 ml-8 md:ml-0">
                <Link
                  href="https://www.facebook.com/tomassalas.nutri"
                  className="cursor-pointer mt-[0.125rem] md:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="#223874"
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMinYMin"
                    className="w-5 h-5 md:w-[1.75rem] md:h-[1.75rem]"
                    stroke="#223874"
                    strokeWidth={0.00024000000000000003}
                  >
                    <path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z" />
                    <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0-2h12a4 4 0 014 4v12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" />
                  </svg>
                </Link>
                <a
                  href="https://www.facebook.com/tomassalas.nutri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pl-2 pr-9 md:pr-0 lg:pr-2"
                >
                  Tomas Sálas Nutriólogo
                </a>
              </div>
              <div className="flex mt-2 ml-8 md:ml-0">
                <Link
                  href="https://www.instagram.com/tomassalas.nutri/"
                  className="cursor-pointer mt-[0.15rem] md:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="#000"
                    className="w-4 h-4 md:w-[1.45rem] md:h-[1.45rem] fill-brand-navy"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-271 273 256 256"
                    xmlSpace="preserve"
                  >
                    <path d="M-64.5 273h-157c-27.3 0-49.5 22.2-49.5 49.5v157.1c0 27.3 22.2 49.5 49.5 49.5h157c27.3 0 49.5-22.2 49.5-49.5V322.4c-.1-27.2-22.3-49.4-49.5-49.4zm14.2 29.5h5.7v43.4l-43.3.1-.1-43.4 37.7-.1zm-129.3 72.2c8.2-11.3 21.5-18.8 36.5-18.8s28.3 7.4 36.5 18.8c5.4 7.4 8.5 16.5 8.5 26.3 0 24.8-20.2 45.1-45.1 45.1s-44.9-20.3-44.9-45.1c0-9.8 3.2-18.9 8.5-26.3zM-40 479.5C-40 493-51 504-64.5 504h-157c-13.5 0-24.5-11-24.5-24.5V374.7h38.2c-3.3 8.1-5.2 17-5.2 26.3 0 38.6 31.4 70 70 70s70-31.4 70-70c0-9.3-1.9-18.2-5.2-26.3H-40v104.8z" />
                  </svg>
                </Link>
                <a
                  href="https://www.instagram.com/tomassalas.nutri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pl-3 pr-9 md:pr-0 lg:pr-2"
                >
                  @tomassalas.nutri
                </a>
              </div>
              <div className="flex mt-3 ml-8 md:ml-0">
                <Link
                  href="https://wa.me/8241055206"
                  className="cursor-pointer mt-[0.1rem] md:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    width="64px"
                    height="64px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-4 h-4 md:w-[1.45rem] md:h-[1.45rem]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.5 12a8.5 8.5 0 118.5 8.5 8.455 8.455 0 01-4.542-1.314 1 1 0 00-.821-.113l-2.88.859 1.085-2.537a1 1 0 00-.07-.92A8.456 8.456 0 013.5 12zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c0 1.838.473 3.568 1.305 5.073L1.08 21.107a1 1 0 001.206 1.351l4.5-1.342A10.456 10.456 0 0012 22.5c5.799 0 10.5-4.701 10.5-10.5S17.799 1.5 12 1.5zm2.293 12.682l-1.315.926A9.338 9.338 0 0111 13.585a10.202 10.202 0 01-1.624-2.114l.835-.709a1 1 0 00.236-1.232l-1.064-2a1 1 0 00-1.54-.283l-.316.275c-.759.662-1.208 1.75-.836 2.852A12.049 12.049 0 009.586 15c1.813 1.813 3.655 2.527 4.733 2.805.868.223 1.689-.076 2.268-.548l.591-.482a1 1 0 00-.12-1.634l-1.678-1a1 1 0 00-1.088.041z"
                      fill="#223874"
                    />
                  </svg>
                </Link>
                <a
                  href="https://wa.me/8241055206"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pl-3 pr-9 md:pr-0 lg:pr-2"
                >
                  824-105-5206
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-brand-seasalt pt-10 pb-14">
        <div className="container mx-auto flex items-center justify-center md:justify-between">
          <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-lg border-[0.25rem] border-brand-opakeppel overflow-hidden md:ml-4 lg:ml-14 xl:ml-16 mb-8 md:mb-0 fade-in">
              <Image
                src="/krystraining.jpeg"
                width={1366}
                height={2048}
                alt="Instructora Krystal Arrambide"
                priority
                className="not-selectable object-cover w-[19rem] h-[22.43rem] md:w-[42rem] md:h-[22rem] lg:w-[42rem] lg:h-[22rem] xl:w-[43rem] xl:h-[22rem]"
                style={{
                  objectPosition: "center 50%",
                  animation: "fade-in 0.5s ease-in",
                }}
              />
            </div>
            <div className="lg:w-1 xl:w-1.5 h-[21rem] bg-brand-opakeppel rounded-full lg:ml-20 xl:ml-36 hidden lg:block"></div>
            <div className="flex flex-col md:ml-20 lg:ml-20 xl:ml-32 fade-in md:mr-2 lg:mr-8 xl:mr-20">
              <div>
                <p className="--font-montse text-center md:text-start text-base md:text-xl text-gray-800 mr-4 md:mr-0 mb-2">
                  KRYSTAL ARRAMBIDE
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-center md:justify-start items-center md:space-x-3">
                <p className="--font-montse text-center md:text-start text-sm lg:text-lg text-gray-800 mr-4 md:mr-0 mb-3 md:mb-2">
                  INSTRUCTORA CERTIFICADA
                </p>
                <img
                  className="w-8 h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 mb-2 object-contain"
                  src="certif-min.png"
                />
              </div>
              <div className="mt-5 ml-8 md:ml-0">
                <p className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pr-9 md:pr-0 lg:pr-2">
                  Ya sea que tu objetivo sea perder peso, aumentar fuerza,
                  mejorar resistencia o potenciar tu estado físico en general,
                  estoy aquí para guiarte y apoyarte en cada paso del camino.
                  Mediante una combinación de entrenamientos efectivos y
                  motivación constante, trabajaremos juntos para transformar tu
                  estilo de vida y lograr resultados duraderos.
                </p>
              </div>
              <div className="flex mt-6 ml-8 md:ml-0">
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 stroke-brand-navy mt-[0.09rem] md:mt-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 6.5C3 14.508 9.492 21 17.5 21c.666 0 1.322-.045 1.964-.132.91-.123 1.536-.939 1.536-1.858v-2.569a2 2 0 00-1.367-1.897l-3.149-1.05a1.449 1.449 0 00-1.863 1.024 1.449 1.449 0 01-2.43.673l-3.382-3.382a1.449 1.449 0 01.673-2.43 1.449 1.449 0 001.023-1.863l-1.05-3.148A2 2 0 007.559 3H4.99c-.92 0-1.735.625-1.858 1.536A14.63 14.63 0 003 6.5z"
                    stroke="rgb(247, 244, 228);"
                    strokeWidth={2}
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="tel:+1 (210)-449-9803."
                  className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pl-2 pr-9 md:pr-0 lg:pr-2"
                >
                  +1 (210)-449-9803
                </a>
              </div>
              <div className="flex mt-2 ml-8 md:ml-0">
                <Link
                  href="https://krystraining.issacertifiedtrainer.com/"
                  className="cursor-pointer mt-[0.1rem] md:mt-0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 md:w-6 md:h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 10v8a2 2 0 002 2h14a2 2 0 002-2v-8M3 10V6a2 2 0 012-2h14a2 2 0 012 2v4M3 10h18"
                      stroke="#223874"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx={6} cy={7} r={1} fill="#223874" />
                    <circle cx={9} cy={7} r={1} fill="#223874" />
                  </svg>
                </Link>
                <a
                  href="https://krystraining.issacertifiedtrainer.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="container --font-montse text-sm lg:text-base text-justify text-gray-800 pt-[0.125rem] md:pt-0 pl-2 pr-9 md:pr-0 lg:pr-2"
                >
                  krystraining.issacertifiedtrainer.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hasScrolled && isButtonVisible && (
        <div className="fixed bottom-6 md:bottom-8 right-2 md:right-6 z-10">
          <Link
            href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
            target="_blank"
            className="bg-brand-opaleppel border-[0.225rem] border-brand-opaleppel --font-poppins text-brand-seasalt text-base md:text-lg px-4 py-2 rounded-full hover:bg-brand-sand hover:text-brand-opaleppel"
            style={{
              animation: "fade-in 0.2s ease-in",
            }}
          >
            Agenda tu consulta
          </Link>
        </div>
      )}
    </div>
  );
}
