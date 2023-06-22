// ScrollHeader.js
import { useEffect, useState } from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import { useWindowScroll } from "react-use";
import LinkToTop from "./LinkToTop";

const ScrollHeader = ({ onScrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { y: scrollY } = useWindowScroll();
  const threshold = 120;

  useEffect(() => {
    setIsScrolled(scrollY > threshold);
  }, [scrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const shouldHaveScrolledClass = scrollTop > 0;

      setIsScrolled(shouldHaveScrolledClass);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full z-50">
      {/* Top Header on desktops  */}
      <header className="text-brand-ultra-violet min-w-full z-50 py-2 pl-8 pr-8 md:pl-4 md:pr-3 lg:pl-12 lg:pr-8 xl:pl-40 xl:pr-32 hidden md:block bg-brand-seasalt">
        <div className="flex items-center container mx-auto justify-between h-[9rem]">
          {/* Logo */}
          <div className="w-36 h-20 md:w-48 md:h-28 lg:w-56 lg:h-32 xl:w-64 xl:h-36">
            <Link href="/" rel="noopener noreferrer" passHref>
              <img
                className="cursor-pointer"
                objectfit="contain"
                src="HF-FULL.png"
              />
            </Link>
          </div>
          {/* Website Tabs */}
          <nav aria-label="Tab Menu" className="navbar-menu">
            <ul className="text-xs xl:text-sm flex items-center space-x-4 md:space-x-5 lg:space-x-10 text-brand-ultra-violet font-notosans">
              <li className="cursor-pointer menu-item">
                <ScrollLink
                  to="targetSection"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  {" "}
                  Consulta{" "}
                </ScrollLink>
              </li>
              <li className="cursor-pointer menu-item">
                <Link href="/estetica" rel="noopener noreferrer">
                  {" "}
                  Medicina Esética{" "}
                </Link>
              </li>
              <li className="cursor-pointer menu-item">
                <Link href="/rehabilitacion" rel="noopener noreferrer">
                  {" "}
                  Rehabilitación Física{" "}
                </Link>
              </li>
              <li className="cursor-pointer menu-item">
                <Link href="/nutricion" rel="noopener noreferrer">
                  {" "}
                  Nutrición & Fitness{" "}
                </Link>
              </li>
              <li className="cursor-pointer menu-item">
                <Link
                  href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Agendar{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Top Header on smartphones */}
      <header className="text-brand-ultra-violet z-50 md:hidden w-full h-[9rem] pt-2 bg-brand-seasalt">
        <nav className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center">
            <Link href="/" rel="noopener noreferrer" passHref>
              <img
                className="ml-14 w-[12rem] h-[7rem]"
                objectfit="contain"
                src="HF-FULL.png"
              />
            </Link>
          </div>
          <div className="pr-4">
            <button
              className="focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke={`${isScrolled ? "currentColor" : "#545b77ff"}`}
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div
              className={`fixed z-50 top-0 right-0 h-screen w-full bg-slate-100 shadow-lg md:hidden transform transition-transform duration-300ms ${
                isMenuOpen
                  ? "transform translate-x-0"
                  : "transform translate-x-full"
              }`}
            >
              <button
                className="absolute top-6 right-6 text-brand-ultra-violet"
                onClick={toggleMenu}
                aria-label="Close Menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="#545b77ff"
                  className="w-7 h-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ul className="flex flex-col pl-20 font-notosans pt-14">
                <li className="my-4 relative flex items-center justify-start space-x-4">
                  <Image
                    src="/HF-MIN.png"
                    alt="bullet"
                    width={50}
                    height={50}
                    className="not-selectable w-5 h-5"
                  />
                  <ScrollLink
                    to="targetSection"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => {
                      toggleMenu();
                    }}
                    className="cursor-pointer menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                  >
                    Consulta
                  </ScrollLink>
                </li>
                <li className="my-4 relative flex items-center justify-start space-x-4">
                  <Image
                    src="/HF-MIN.png"
                    alt="bullet"
                    width={50}
                    height={50}
                    className="not-selectable w-5 h-5"
                  />
                  <Link
                    href="/estetica"
                    rel="noopener noreferrer"
                    className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                  >
                    Médicina Estética
                  </Link>
                </li>
                <li className="my-4 relative flex items-center justify-start space-x-4">
                  <Image
                    src="/HF-MIN.png"
                    alt="bullet"
                    width={50}
                    height={50}
                    className="not-selectable w-5 h-5"
                  />
                  <Link
                    href="/rehabilitacion"
                    rel="noopener noreferrer"
                    className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                  >
                    Rehabilitación Física
                  </Link>
                </li>
                <li className="my-4 relative flex items-center justify-start space-x-4">
                  <Image
                    src="/HF-MIN.png"
                    alt="bullet"
                    width={50}
                    height={50}
                    className="not-selectable w-5 h-5"
                  />
                  <Link
                    href="/nutricion"
                    rel="noopener noreferrer"
                    className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                  >
                    Nutrición & Fitness
                  </Link>
                </li>
                <li className="my-4 relative flex items-center justify-start space-x-4">
                  <Image
                    src="/HF-MIN.png"
                    alt="bullet"
                    width={50}
                    height={50}
                    className="not-selectable w-5 h-5"
                  />
                  <Link
                    href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                    onClick={toggleMenu}
                  >
                    Agendar
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>

      {/* Scrolling Header on desktops */}
      <header
        className={`fade-in fixed z-40 top-0 left-0 right-0 ${
          isScrolled ? "hidden md:block bg-slate-200 opacity-95" : "hidden"
        }`}
        style={{
          animation: "fade-in 0.3s ease-in",
        }}
      >
        <div className="flex justify-between py-4 md:pr-14 lg:pr-20 xl:pr-36 md:pl-16 lg:pl-28 xl:pl-44 items-center">
          <LinkToTop />
          <nav aria-label="Tab Menu" className="navbar-menu">
            <ul className="text-xs lg:text-sm xl:text-base flex space-x-4 md:space-x-6 lg:space-x-8 text-brand-ultra-violet font-notosans">
              <li className="cursor-pointer menu-item">
              <ScrollLink
                  to="targetSection"
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-50}
                >
                  {" "}
                  Consulta{" "}
                </ScrollLink>
              </li>
              <li className="cursor-pointer menu-item">
                <Link href="/estetica" rel="noopener noreferrer">
                  {" "}
                  Medicina Esética{" "}
                </Link>
              </li>
              <li className="cursor-pointer menu-item">
                <Link href="/rehabilitacion" rel="noopener noreferrer">
                  {" "}
                  Rehabilitación Física{" "}
                </Link>
              </li>
              <li className="cursor-pointer menu-item">
                <Link href="/nutricion" rel="noopener noreferrer">
                  {" "}
                  Nutrición & Fitness{" "}
                </Link>
              </li>
              <li className="cursor-pointer menu-item">
                <Link
                  href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  Agendar{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Scrolling Header on smartphones */}
      <header
        className={`fade-in fixed z-40 top-0 left-0 right-0 md:hidden h-[4.5rem] ${
          isScrolled ? "bg-slate-200 opacity-95" : "hidden"
        }`}
        style={{
          animation: "fade-in 0.3s ease-in",
        }}
      >
        <div className="flex items-center justify-between py-3 px-8">
          <LinkToTop />
          <button
            className="focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke={`${isScrolled ? "currentColor" : "#545b77ff"}`}
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`fixed z-50 top-0 right-0 h-screen w-full bg-slate-100 shadow-lg md:hidden transform transition-transform duration-300ms ${
              isMenuOpen
                ? "transform translate-x-0"
                : "transform translate-x-full"
            }`}
          >
            <button
              className="absolute top-6 right-6 text-brand-ultra-violet"
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#545b77ff"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <ul className="flex flex-col pl-20 font-notosans pt-14">
              <li className="my-4 relative flex items-center justify-start space-x-4">
                <Image
                  src="/HF-MIN.png"
                  alt="bullet"
                  width={50}
                  height={50}
                  className="not-selectable w-5 h-5"
                />
                <ScrollLink
                    to="targetSection"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-50}
                    onClick={() => {
                      toggleMenu();
                    }}
                    className="cursor-pointer menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                  >
                    Consulta
                  </ScrollLink>
              </li>
              <li className="my-4 relative flex items-center justify-start space-x-4">
                <Image
                  src="/HF-MIN.png"
                  alt="bullet"
                  width={50}
                  height={50}
                  className="not-selectable w-5 h-5"
                />
                <Link
                  href="/estetica"
                  rel="noopener noreferrer"
                  className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                >
                  Médicina Estética
                </Link>
              </li>
              <li className="my-4 relative flex items-center justify-start space-x-4">
                <Image
                  src="/HF-MIN.png"
                  alt="bullet"
                  width={50}
                  height={50}
                  className="not-selectable w-5 h-5"
                />
                <Link
                  href="/rehabilitacion"
                  rel="noopener noreferrer"
                  className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                >
                  Rehabilitación Física
                </Link>
              </li>
              <li className="my-4 relative flex items-center justify-start space-x-4">
                <Image
                  src="/HF-MIN.png"
                  alt="bullet"
                  width={50}
                  height={50}
                  className="not-selectable w-5 h-5"
                />
                <Link
                  href="/nutricion"
                  rel="noopener noreferrer"
                  className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                >
                  Nutrición & Fitness
                </Link>
              </li>
              <li className="my-4 relative flex items-center justify-start space-x-4">
                <Image
                  src="/HF-MIN.png"
                  alt="bullet"
                  width={50}
                  height={50}
                  className="not-selectable w-5 h-5"
                />
                <Link
                  href="https://app.medis365.com.mx/agenda-online.html?c=R0pNU1I_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="menu-item text-xl text-brand-ultra-violet hover:text-gray-600"
                  onClick={toggleMenu}
                >
                  Agendar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </div>
  );
};

export default ScrollHeader;
