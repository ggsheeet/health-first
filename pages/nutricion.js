import Head from "next/head";
import Image from "next/image";
import OtherHeader from "@/components/OtherHeader";
import { useState, useEffect } from "react";
import FooterComp from "@/components/FooterComp";

export default function Rehabilitacion() {
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
          <p className="font-montserrat text-base md:text-2xl text-brand-sand mx-8 md:mx-16 mb-4 border-b-2 border-brand-sand">
            Nutrición & Fitness
          </p>
        </div>
        <div>
          <p className="font-montserrat text-base md:text-lg text-brand-sand mx-8 md:mx-16 mb-2">
            Health First Wellness Center ofrece servicios de nutrición y fitness
            para ayudarte a alcanzar y mantener un estilo de vida saludable.
          </p>
          <p className="font-montserrat text-base md:text-lg text-brand-sand mx-8 md:mx-16 mb-2">
            Nuestro equipo de profesionales capacitados en nutrición y
            acondicionamiento físico está dedicado a brindarte la orientación y
            el apoyo necesarios para lograr tus metas de bienestar y alcanzar
            una estado físico óptimo coadyuvante en la prevención de
            enfermedades relacionadas a pobres hábitos alimenticios y al
            sedentarismo.
          </p>
        </div>
      </div>
      <div className="bg-brand-seasalt py-10">
        <div className="container mx-auto flex items-center justify-center md:justify-between">
          <div className="flex flex-col md:flex-row items-center">
            <div className="rounded-lg border-[0.25rem] border-brand-gold overflow-hidden md:ml-6 lg:ml-16 mb-8 md:mb-0 fade-in">
              <Image
                src="/nenau.jpg"
                width={584}
                height={655}
                alt="Dr. Marcelo González"
                priority
                className="not-selectable object-fill w-[20rem] h-[22.43rem] xl:w-[39rem] xl:h-[22rem]"
                style={{
                  animation: "fade-in 1s ease-in",
                  opacity: 1,
                }}
              />
            </div>
            <div className="lg:w-1 xl:w-1.5 h-[23.5rem] bg-brand-gold rounded-full ml-32 hidden lg:block"></div>
            <div className="flex flex-col ml-8 xl:ml-32 fade-in">
              <div className="flex items-center">
                <Image
                  src="/certificado-1.png"
                  width={"90"}
                  height={"90"}
                  alt="svg by Freepik"
                  className="not-selectable w-16 h-16 xl:w-12 xl:h-12"
                  style={{
                    animation: "fade-in 1s ease-in",
                    opacity: 1,
                  }}
                />
                <p className="font-montserrat text-base md:text-lg text-gray-800 ml-4 mb-2">
                  MEDICO CIRUJANO Y PARTERO U.A.N.L.
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/certificado-1.png"
                  width={"90"}
                  height={"90"}
                  alt="svg by Freepik"
                  className="not-selectable w-16 h-16 xl:w-12 xl:h-12"
                  style={{
                    animation: "fade-in 1s ease-in",
                    opacity: 1,
                  }}
                />
                <p className="font-montserrat text-base md:text-lg text-gray-800 ml-4 mb-2">
                  MEDICINA ESTETICA CONALEP
                </p>
              </div>
              <div className="flex items-center">
                <Image
                  src="/certificado-1.png"
                  width={"90"}
                  height={"90"}
                  alt="svg by Freepik"
                  className="not-selectable w-16 h-16 xl:w-12 xl:h-12"
                  style={{
                    animation: "fade-in 1s ease-in",
                    opacity: 1,
                  }}
                />
                <p className="font-montserrat text-base md:text-lg text-gray-800 ml-4 mb-2">
                  REHABILITACION FISICA CONALEP
                </p>
              </div>
              <div className="mt-6">
                <p className="container font-montserrat text-sm md:text-base text-justify text-gray-800 pr-12 md:pr-2 mb-2">
                  Con su sólida formación médica completada en la Universidad
                  Autónoma de Nuevo León y su especialización en medicina
                  estética, el Dr. Marcelo González ha adquirido un profundo
                  conocimiento en el cuidado y embellecimiento del cuerpo
                  humano. Su enfoque se basa en combinar los principios médicos
                  con las últimas técnicas y avances en medicina estética,
                  brindando a sus pacientes resultados excepcionales.
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <button className="bg-brand-seasalt inline-block border-[0.25rem] border-brand-gold text-brand-deep font-montserrat px-8 py-3 mt-6 rounded-full hover:bg-brand-gold transition duration-300">
                  Agenda tu consulta
                </button>
              </div>
            </div>
          </div>
          ƒ
        </div>
      </div>
      <div className="grid grid-rows-1 lg:grid-cols-2">
        <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:ml-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
          <div className="relative flex items-center space-x-3 md:space-x-4">
            <p className="font-raleway text-brand-ultra-violet border-b-2 border-brand-deep">
              Botox
            </p>
            <Image
              src="/botox-min.png"
              width={100}
              height={100}
              alt="png by Freepik"
              className="w-7 h-7 md:w-8 md:h-8"
            />
          </div>
          <p className="text-sm md:text-lg font-montserrat mt-4 md:mt-7 text-brand-ultra-violet">
            Info sobre botox blah blah
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
              Se recomienda una sesión cada 6 meses etc
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
              Retrasa el envejecimiento facial blah
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
              Te vas a ver cm etc etc
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
        <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:mr-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
          <div className="relative flex items-center space-x-3 md:space-x-4">
            <p className="font-raleway text-brand-ultra-violet border-b-2 border-brand-deep">
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
          <p className="text-sm md:text-lg font-montserrat mt-4 md:mt-7 text-brand-ultra-violet">
            Info fillers etc etc
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
              Cada 6 meses blah
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
              Puede ser en labios, pómulo etc
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
              Moldea tu cara blah
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
              Resultados favorecedores etc
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-sand text-lg md:text-2xl overflow-hidden m-8 lg:mx-16 md:my-12 p-6 md:p-12 ring-4 rounded-sm shadow-xl ring-brand-deep">
        <div className="relative flex items-center space-x-3 md:space-x-4">
          <p className="font-raleway text-brand-ultra-violet border-b-2 border-brand-deep">
            Plasma Rico en Plaquetas
          </p>
          <Image
            src="/inyec-min.png"
            width={100}
            height={100}
            alt="png by Freepik"
            className="w-8 h-8 md:w-9 md:h-9"
          />
        </div>
        <p className="text-sm md:text-lg font-montserrat mt-4 md:mt-7 text-brand-ultra-violet">
          Te sacamos tu sangre y te la inyectamos devuelta
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
            Cada 6 meses blah
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
            Bueno para colágeno en cara, pelo etc
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
      <FooterComp />
    </div>
  );
}
