import Link from "next/link";

const FooterComp = () => {
  return (
    <>
      {/* Contact Info */}
      <footer id="footer" className="bg-slate-200 font-raleway py-6">
        <div className="container mx-auto pl-8 pr-8 md:pl-10 md:pr-12 lg:pl-10 lg:pr-16">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-auto mb-4">
              <h3 className="flex items-center text-brand-navy text-sm sm:text-base md:text-lg font-medium lg:font-bold whitespace-pre-wrap">
                {"Ubicación"}{" "}
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 fill-brand-navy"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M149.333 0c82.475 0 149.334 66.859 149.334 149.333 0 24.937-6.095 48.433-16.916 69.108L149.333 448 19.983 224.009C7.253 202.027 0 176.537 0 149.333 0 66.86 66.859 0 149.333 0zm0 42.667c-58.91 0-106.666 47.756-106.666 106.666 0 16.94 3.908 33.194 11.303 47.867l3.584 6.546 91.78 158.92 92.427-160.04C251.054 186.58 256 168.392 256 149.334c0-58.91-47.756-106.666-106.667-106.666zm0 42.666c35.347 0 64 28.654 64 64 0 35.347-28.653 64-64 64-35.346 0-64-28.653-64-64 0-35.346 28.654-64 64-64zm0 42.667C137.551 128 128 137.551 128 149.333c0 11.782 9.551 21.334 21.333 21.334 11.782 0 21.334-9.552 21.334-21.334S161.115 128 149.333 128z"
                    transform="translate(106.667 42.667)"
                    stroke="none"
                    strokeWidth={1}
                    fillRule="evenodd"
                  />
                </svg>
                <a className="text-sm sm:text-base md:text-lg font-normal">
                  {" "}
                  {"MX"}
                </a>
              </h3>
              <p className="font-montserrat text-brand-navy text-xs sm:text-sm md:text-base mt-2 mb-1">
                {"Sabinas Hidalgo, Nuevo León"}
              </p>
              <p className="font-montserrat text-brand-navy text-xs sm:text-sm md:text-base mt-2 mb-2">
                {"Calle Luis T. Mireles #301, Colonia Fovissste"}
              </p>
              <p className="font-montserrat text-brand-navy text-xs sm:text-sm md:text-base">
                {
                  "Horas de trabajo: Lun - Sab 08:00 - 20:00"
                }
              </p>
            </div>
            <div className="w-full sm:w-auto mb-4">
              <h3 className="text-brand-navy text-sm sm:text-base md:text-lg font-medium lg:font-bold flex items-center whitespace-pre-wrap justify-between">
                {"Contáctanos"}
              </h3>
              <p className="text-brand-navy font-montserrat text-xs sm:text-sm md:text-base mt-2 mb-2 md:mb-3 flex items-center whitespace-pre-wrap">
                <svg
                  className="w-4 h-4 md:w-6 md:h-6 stroke-brand-navy"
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
                <a href="tel:824-121-9954" className="pl-1 md:pl-0">
                  {"  "}
                  {"824-121-9954"}
                </a>
              </p>
              <p className="text-brand-navy text-xs sm:text-sm md:text-base flex items-center whitespace-pre-wrap">
                <svg
                  className="w-4 h-4 md:w-5 md:h-5 fill-brand-navy"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    d="M0 3.25A2.25 2.25 0 012.25 1h11.5A2.25 2.25 0 0116 3.25v9.5A2.25 2.25 0 0113.75 15H2.25A2.25 2.25 0 010 12.75v-9.5zm2.25-.75a.75.75 0 00-.748.69L8 8.297l6.498-5.105a.75.75 0 00-.748-.691H2.25zm-.75 9.885V5.097l3.865 3.037L1.5 12.385zM2.514 13.5h10.972L9.452 9.063l-.989.777a.75.75 0 01-.926 0l-.99-.777L2.515 13.5zm8.12-5.366l3.866 4.251V5.097l-3.865 3.037z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="mailto:info@healthfirst.com.mx">
                  {"   "}
                  {"info@healthfirst.com.mx"}
                </a>
              </p>
            </div>
            <div className="w-auto sm:w-auto">
              <h3 className="text-brand-navy text-sm sm:text-base md:text-lg font-medium lg:font-bold">
                {"Síguenos"}
              </h3>
              <div className="flex relative ites-center justify-start sm:justify-start md:justify-start lg:justify-center space-x-4 md:space-x-4 mt-3 ml-[0.125rem] md:ml-1">
                <Link
                  href="https://www.instagram.com/healthfirst.wellnesscenter/"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="#000"
                    className="w-5 h-5 md:w-7 md:h-7 fill-brand-navy"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-271 273 256 256"
                    xmlSpace="preserve"
                  >
                    <path d="M-64.5 273h-157c-27.3 0-49.5 22.2-49.5 49.5v157.1c0 27.3 22.2 49.5 49.5 49.5h157c27.3 0 49.5-22.2 49.5-49.5V322.4c-.1-27.2-22.3-49.4-49.5-49.4zm14.2 29.5h5.7v43.4l-43.3.1-.1-43.4 37.7-.1zm-129.3 72.2c8.2-11.3 21.5-18.8 36.5-18.8s28.3 7.4 36.5 18.8c5.4 7.4 8.5 16.5 8.5 26.3 0 24.8-20.2 45.1-45.1 45.1s-44.9-20.3-44.9-45.1c0-9.8 3.2-18.9 8.5-26.3zM-40 479.5C-40 493-51 504-64.5 504h-157c-13.5 0-24.5-11-24.5-24.5V374.7h38.2c-3.3 8.1-5.2 17-5.2 26.3 0 38.6 31.4 70 70 70s70-31.4 70-70c0-9.3-1.9-18.2-5.2-26.3H-40v104.8z" />
                  </svg>
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=100091417977763"
                  className="cursor-pointer"
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
                    className="w-6 h-6 md:w-[2.0625rem] md:h-[2.0625rem]"
                    stroke="#223874"
                    strokeWidth={0.00024000000000000003}
                  >
                    <path d="M8.695 6.937v1.377H7.687v1.683h1.008V15h2.072V9.997h1.39s.131-.807.194-1.69h-1.576v-1.15c0-.173.226-.404.45-.404h1.128V5h-1.535C8.644 5 8.695 6.685 8.695 6.937z" />
                    <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm0-2h12a4 4 0 014 4v12a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mx-auto justify-between mt-6 md:mt-2 font-notosans text-brand-ultra-violet text-xs">
            <div className="mb-2 md:mt-0">
              <p className="whitespace-pre-wrap">
                © 2023 Health First | Wellness Center. All Rights Reserved
              </p>
            </div>
            <div>
              <Link
                href="https://docs.google.com/document/d/1U7vhw9h43JBun3-u4pO285bc8hDeYIvewdCPqqRa7RY/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:border-b-[0.0125rem] hover:inline-block hover:border-b-brand-ultra-violet"
              >
                Aviso de Privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterComp;
