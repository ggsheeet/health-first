import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ScrollHeader from "@/components/ScrollHeader";
import { useState, useEffect } from "react";
import FooterComp from "@/components/FooterComp";
import React, { useRef } from "react";

export default function Home() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const targetRef = useRef(null);

  const scrollToSection = () => {
    console.log("Scrolling to section...");

    if (window.location.pathname !== "/") {
      console.log("Redirecting to the main page...");
      window.location.href = "/"; // Redirect to the main page
    } else {
      console.log("Scrolling to target section...");
      // Scroll to the target section on the current page
      if (targetRef.current) {
        targetRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
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
          name="description"
          content="Clínica médica de atención médica general así como tratamientos específicos de medicina estética y fisioterapia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/HF-MIN.png" />
      </Head>

      <ScrollHeader onScrollToSection={scrollToSection} />

      <div className="h-[32rem] md:h-[40rem] height-full z-0 mx-0 pt-4 relative overflow-hidden bg-brand-seasalt">
        {!isImageLoaded && (
          <div className="flex items-center justify-center h-full">
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
        )}
        <Image
          src="/wrhf2.png"
          width={"1450"}
          height={"2088"}
          alt="bg"
          priority
          className="not-selectable absolute top-0 left-0 w-full h-full object-cover z-0 fade-in"
          style={{
            animation: "fade-in 1s ease-in",
            objectPosition: "center 50%",
            display: isImageLoaded ? "block" : "none",
          }}
          onLoad={handleImageLoad}
        />
        {isImageLoaded && (
          <div
            className="fade-in"
            style={{
              animation: "fade-in 0.5s ease-in",
            }}
          >
            <div className="h-[40rem] md:h-[50rem] absolute top-0 left-0 right-0 bottom-0 z-10 bg-black opacity-40"></div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-brand-creamy z-20 overflow-auto">
              <div className="md:flex-row md:space-x-16 space-y-10 mt-8 md:mt-6 w-full">
                <div className="font-notosans text-center text-brand-seasalt px-2 md:px-28 py-10 mt-1">
                  <p className="text-2xl md:text-3xl mx-auto mb-10 mt-4 md:mt-8 whitespace-pre-wrap text-center items-center">
                    <span className="font-medium text-base sm:text-xl md:text-2xl">
                      {" "}
                      {"HEALTH FIRST | WELLNESS CENTER"}
                    </span>
                  </p>
                  <p className="font-montserrat mt-6 md:mt-12 mb-11 md:mb-20 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                    {"Donde tu salud es y siempre será primero"}
                  </p>
                  <div className="flex items-center">
                    <a
                      href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
                      target="_blank"
                      noreferrer="true"
                      className="cursor-pointer p-1 md:p-2 mx-auto bg-transparent rounded-full border-[0.15rem] md:border-2 border-brand-seasalt hover:bg-slate-200 hover:border-slate-200 hover:text-brand-navy"
                    >
                      <div className="font-montserrat my-1 py-0 mx-2 px-1 text-base md:text-lg justify-center">
                        {"Agenda tu consulta"}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col bg-slate-100 items-center justify-center font-montserrat text-justify text-brand-ultra-violet mx-auto px-10 md:px-24 xl:px-32 pt-12 pb-6 md:pb-16">
        <p className="text-lg md:text-2xl mb-3">Acerca de Nosotros</p>
        <div className="w-1/4 lg:w-1/6 xl:w-1/12 h-0.5 bg-brand-ultra-violet rounded-full mb-6"></div>
        <p className="text-sm md:text-lg pb-6">
          <span className="font-montserrat font-semibold">
            Health First Wellness Center
          </span>{" "}
          es una clínica dedicada a brindar servicios de consulta general y
          atención a urgencias menores. Nuestro objetivo es proporcionar un
          enfoque integral y personalizado para el cuidado de la salud de
          nuestros pacientes.
        </p>
        <p className="text-sm md:text-lg pb-6">
          En <span className="font-montserrat font-semibold">Health First</span>
          , valoramos la atención médica de calidad y nos esforzamos por ofrecer
          un ambiente cálido y acogedor donde los pacientes se sientan cómodos y
          seguros. Ya sea que necesite una consulta médica de rutina,
          tratamiento para una dolencia menor o atención urgente, en{" "}
          <span className="font-montserrat font-semibold">Health First</span>{" "}
          estamos aquí para cuidar de usted y su familia.
        </p>
      </div>
      <div ref={targetRef}></div>
      {hasScrolled && isButtonVisible && (
        <div className="fixed bottom-6 md:bottom-8 right-2 md:right-6 z-10">
          <Link
            href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
            target="_blank"
            className="bg-brand-seasalt border-[0.175rem] border-brand-keppel font-poppins text-brand-keppel text-lg md:text-xl text-extrabold px-4 py-2 rounded-full hover:bg-brand-keppel hover:text-brand-seasalt"
            style={{
              animation: "fade-in 0.2s ease-in",
            }}
          >
            Agenda tu consulta
          </Link>
        </div>
      )}
      <div
        className="fixed inset-10 z-[-1] bg-contain bg-center"
        style={{
          backgroundImage: 'url("/HF-FULL.png")',
          backgroundAttachment: "fixed",
          opacity: 0.6,
        }}
      />
      <div className="relative grid grid-rows-1 lg:grid-cols-2 mt-4 mb-4 md:mt-8 md:mb-12">
        <div className="bg-gray-100 bg-opacity-90 text-lg md:text-2xl overflow-hidden m-8 lg:ml-16 md:my-12 lg:mt-12 lg:mb-4 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-keppel">
          <div className="relative flex items-center space-x-2 md:space-x-3">
            <p className="font-raleway text-brand-ultra-violet border-b-2 border-brand-keppel">
              Consulta de Primer Nivel
            </p>
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 15.00 15.00"
              xmlns="http://www.w3.org/2000/svg"
              fill="#545b77ff"
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path d="M5.5 7A2.5 2.5 0 013 4.5v-2a.5.5 0 01.5-.5H4a.5.5 0 000-1h-.5A1.5 1.5 0 002 2.5v2a3.49 3.49 0 001.51 2.87A4.41 4.41 0 015 10.5a3.5 3.5 0 107 0v-.57a2 2 0 10-1 0v.57a2.5 2.5 0 01-5 0 4.41 4.41 0 011.5-3.13A3.49 3.49 0 009 4.5v-2A1.5 1.5 0 007.5 1H7a.5.5 0 000 1h.5a.5.5 0 01.5.5v2A2.5 2.5 0 015.5 7m6 2a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </div>
          <p className="text-sm md:text-lg font-montserrat mt-4 md:mt-7 text-brand-ultra-violet">
            Nos orgullecemos de poder brindar un servicio médico de excelencia
            donde las personas de todas las edades contarán con:
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
              Atención personalizada y de alta calidad desde que pones pie en
              nuestras instalaciones
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
              Expediente electónico desde tu primer visita que favorecerán un
              manejo integral en cada consulta
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
              Espacio de atención ambulatoria y observación para urgencias
              menores.
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
              Etc etc
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 opacity-90 text-lg md:text-2xl overflow-hidden m-8 lg:mr-16 md:my-12 lg:mt-12 lg:mb-4 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-keppel">
          <div className="relative flex items-center space-x-1 md:space-x-2">
            <p className="font-raleway text-brand-ultra-violet border-b-2 border-brand-keppel">
              Enfermería
            </p>
            <Image
              src="/gluco-min.png"
              width={100}
              height={100}
              alt="png by Freepik"
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </div>
          <p className="text-sm md:text-lg font-montserrat mt-4 md:mt-7 text-brand-ultra-violet">
            Nuestro laboratorio interno nos permite ofrecer diversos analisis de
            todo tipo brindando la comodidad a nuetros pacientes de realizarse
            los estudios necesarios para su seguimiento:
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
              Biometría Hemática
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
              Perfil Bioquímico Completo
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
              Estudios de orina y otras secreciones
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
              Estudios de marcadores y anticuerpos específicos
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 bg-opacity-90 text-lg md:text-2xl overflow-hidden m-8 lg:ml-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-keppel">
          <div className="relative flex items-center space-x-2 md:space-x-3">
            <p className="font-raleway text-brand-ultra-violet border-b-2 border-brand-keppel">
              Estudios de Laboratorio
            </p>
            <svg
              fill="#545b77ff"
              height="64px"
              width="64px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#545b77ff"
              strokeWidth={5.12}
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path d="M232.727 46.545V23.273c6.423 0 11.636-5.213 11.636-11.636S239.151 0 232.727 0H162.91c-6.423 0-11.636 5.213-11.636 11.636s5.213 11.636 11.636 11.636v23.273c-19.247 0-34.91 15.663-34.91 34.91v139.636c0 6.423 5.213 11.636 11.636 11.636s11.636-5.213 11.636-11.636V81.455c0-6.412 5.225-11.636 11.636-11.636h69.817c6.412 0 11.636 5.225 11.636 11.636v11.636c0 6.423 5.213 11.636 11.636 11.636 6.423 0 11.636-5.213 11.636-11.636V81.455c.003-19.247-15.659-34.91-34.906-34.91zm-23.272 0h-23.273V23.273h23.273v23.272z" />
              <path d="M290.909 139.636h-4.445C278.284 132.48 267.706 128 256 128c-25.67 0-46.545 20.876-46.545 46.545 0 21.62 14.895 39.692 34.909 44.893v45.452l-18.828 37.655H170.1l-11.636-23.273h50.991c6.423 0 11.636-5.213 11.636-11.636S215.878 256 209.455 256h-69.818a11.669 11.669 0 00-9.903 5.516 11.642 11.642 0 00-.512 11.322l23.273 46.545a11.648 11.648 0 0010.415 6.435h69.818c4.41 0 8.436-2.49 10.415-6.435l23.273-46.545a11.663 11.663 0 001.222-5.201v-48.198c7.087-1.839 13.463-5.306 18.828-9.984h4.445c57.74 0 104.727 46.988 104.727 104.727V384c0 17.385-12.777 31.837-29.417 34.479l-31.092-41.46a11.63 11.63 0 00-9.309-4.655H81.455c-6.423 0-11.636 5.213-11.636 11.636 0 6.423 5.213 11.636 11.636 11.636H320l31.418 41.891a11.614 11.614 0 009.309 4.655c32.081 0 58.182-26.1 58.182-58.182v-69.818c0-67.258-52.177-122.449-118.167-127.5 1.059-3.898 1.804-7.913 1.804-12.137 0-3.852-.605-7.54-1.489-11.124 78.673 5.26 141.126 70.772 141.126 150.761V384c0 44.916-36.55 81.455-81.455 81.455-6.423 0-11.636 5.213-11.636 11.636v11.636H69.818v-34.909c0-6.412 5.225-11.636 11.636-11.636h197.818c6.423 0 11.636-5.213 11.636-11.636 0-6.423-5.213-11.636-11.636-11.636H81.455c-19.247 0-34.909 15.663-34.909 34.909v46.545c0 6.423 5.213 11.636 11.636 11.636h302.545c6.435 0 11.636-5.213 11.636-11.636v-12.276c52.294-5.807 93.091-50.269 93.091-104.087v-69.818c.001-96.246-78.301-174.547-174.545-174.547zM256 197.818c-12.835 0-23.273-10.438-23.273-23.273s10.438-23.273 23.273-23.273c12.835 0 23.273 10.438 23.273 23.273S268.835 197.818 256 197.818z" />
            </svg>
          </div>
          <p className="text-sm md:text-lg font-montserrat mt-4 md:mt-7 text-brand-ultra-violet">
            Nuestro laboratorio interno nos permite ofrecer diversos analisis de
            todo tipo brindando la comodidad a nuetros pacientes de realizarse
            los estudios necesarios para su seguimiento:
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
              Biometría Hemática
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
              Perfil Bioquímico Completo
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
              Estudios de orina y otras secreciones
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
              Estudios de marcadores y anticuerpos específicos
            </li>
          </ul>
        </div>
        <div className="bg-gray-100 opacity-90 text-lg md:text-2xl overflow-hidden m-8 lg:mr-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-keppel">
          <div className="relative flex items-center space-x-2 md:space-x-3">
            <p className="font-raleway text-brand-ultra-violet border-b-2 border-brand-keppel">
              Farmacia
            </p>
            <svg
              fill="#545b77ff"
              height="64px"
              width="64px"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              xmlSpace="preserve"
              stroke="#545b77ff"
              strokeWidth={5.12}
              className="w-6 h-6 md:w-7 md:h-7"
            >
              <path d="M425.973 210.133a86.704 86.704 0 00-37.653-61.653l-57.28-39.893c-.427-.96-.427-4.373-.427-5.547V84.8c16.533-2.453 32-13.44 32-31.787v-16.96C362.613 14.827 341.92 0 323.253 0H188.64c-18.667 0-39.36 14.827-39.36 36.053v16.96c0 18.347 15.36 29.333 32 31.787v18.347c.107 1.813 0 3.52-.32 5.333l-58.453 40c-20.587 13.653-33.813 36.373-36.587 61.867-.32.96-.533 1.92-.64 2.987l.32 1.6c-.107 1.92-.32 3.733-.32 5.653v221.547c0 38.507 31.147 69.76 69.653 69.867h202.133c38.507-.107 69.653-31.36 69.653-69.867v-228.8c-.106-1.067-.426-2.134-.746-3.201zm-255.36-157.12v-16.96c0-7.253 9.067-14.72 18.027-14.72h134.72c8.853 0 18.027 7.467 18.027 14.72v16.96C341.387 60.48 330.72 64 323.36 64H188.64c-7.36 0-18.027-3.52-18.027-10.987zM134.347 166.08l58.56-40c9.707-6.507 9.707-17.173 9.707-22.933V85.333H309.28v17.813c0 5.76 0 16.427 9.493 22.827l57.493 40.213c12.907 8.64 22.293 21.547 26.453 36.587H108.747c3.733-15.04 12.8-28.16 25.6-36.693zM356.96 490.667H154.933c-24.64 0-44.8-18.667-47.68-42.667h297.493c-2.986 24-23.146 42.667-47.786 42.667zm48.32-64H106.613V224H405.28v202.667z" />
              <path d="M191.947 362.667h21.333V384c0 5.867 4.8 10.667 10.667 10.667h64c5.867 0 10.667-4.8 10.667-10.667v-21.333h21.333c5.867 0 10.667-4.8 10.667-10.667v-53.333c0-5.867-4.8-10.667-10.667-10.667h-21.333v-21.333c0-5.867-4.8-10.667-10.667-10.667h-64c-5.867 0-10.667 4.8-10.667 10.667V288h-21.333c-5.867 0-10.667 4.8-10.667 10.667V352c0 5.867 4.8 10.667 10.667 10.667zm10.666-53.334h21.333c5.867 0 10.667-4.8 10.667-10.667v-21.333h42.667v21.333c0 5.867 4.8 10.667 10.667 10.667h21.333v32h-21.333c-5.867 0-10.667 4.8-10.667 10.667v21.333h-42.667V352c0-5.867-4.8-10.667-10.667-10.667h-21.333v-32z" />
            </svg>
          </div>
          <p className="text-sm md:text-lg font-montserrat mt-4 md:mt-7 text-brand-ultra-violet">
            En nuestra farmacia encontraras una amplia selección de medicamentos
            que podras surtir para tus necesidades y padecimientos:
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
              Medicamentos de venta libre
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
              Antibióticos y otros medicamentos controlados
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
              Blah blah blah
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
              Etc etc
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col bg-slate-100 bg-opacity-90 items-center justify-center font-montserrat text-justify text-brand-ultra-violet mx-auto px-10 md:px-24 xl:px-32 pt-12 pb-6 md:pb-16">
        <p className="text-lg md:text-2xl mb-3">Conoce al Equipo</p>
        <div className="w-1/4 lg:w-1/6 xl:w-1/12 h-0.5 bg-brand-ultra-violet rounded-full mb-12"></div>
        <div className="flex flex-col lg:flex-row lg:space-x-24">
          <div>
            <div className="rounded-lg border-[0.25rem] border-brand-ultra-violet overflow-hidden fade-in">
              <Image
                src="/nenau.jpg"
                width={584}
                height={655}
                alt="Dr. Marcelo González"
                priority
                className="not-selectable object-cover w-[15rem] h-[18rem] md:w-[17rem] md:h-[20.25rem] lg:w-[15rem] lg:h-[18rem] xl:w-[18rem] xl:h-[20.25rem]"
                style={{
                  objectPosition: "center 50%",
                  animation: "fade-in 1s ease-in",
                }}
              />
            </div>
            <p className="text-base md:text-lg text-center mt-4 mb-1">Médico</p>
            <p className="text-center">Dr. Marcelo González</p>
            <p className="text-center mb-8 md:mb-10 lg:mb-0">Cédula: 1452734</p>
          </div>
          <div>
            <div className="rounded-lg border-[0.25rem] border-brand-ultra-violet overflow-hidden fade-in">
              <Image
                src="/nutri.jpeg"
                width={1208}
                height={1600}
                alt="Lic. Tomás Salas"
                priority
                className="not-selectable object-cover w-[15rem] h-[18rem] md:w-[17rem] md:h-[20.25rem] lg:w-[15rem] lg:h-[18rem] xl:w-[17rem] xl:h-[20.25rem]"
                style={{
                  objectPosition: "center 50%",
                  animation: "fade-in 1s ease-in",
                }}
              />
            </div>
            <p className="text-base md:text-lg text-center mt-4 mb-1">Nutriólogo</p>
            <p className="text-center">Lic. Tomás Salas</p>
            <p className="text-center mb-8 md:mb-10 lg:mb-0">Cédula: 13204103</p>
          </div>
          <div>
            <div className="rounded-lg border-[0.25rem] border-brand-ultra-violet overflow-hidden fade-in">
              <Image
                src="/nenau.jpg"
                width={584}
                height={655}
                alt="Dr. Marcelo González"
                priority
                className="not-selectable object-cover w-[15rem] h-[18rem] md:w-[17rem] md:h-[20.25rem] lg:w-[15rem] lg:h-[18rem] xl:w-[17rem] xl:h-[20.25rem]"
                style={{
                  objectPosition: "center 50%",
                  animation: "fade-in 1s ease-in",
                }}
              />
            </div>
            <p className="text-base md:text-lg text-center mt-4 mb-1">Instructora Personal</p>
            <p className="text-center">Krystal Arrambide</p>
            <p className="text-center mb-8 md:mb-10 lg:mb-0">Certificada ISSA</p>
          </div>
        </div>
      </div>
      <FooterComp id="footer" />
    </div>
  );
}
