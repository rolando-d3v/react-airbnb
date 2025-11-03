import logo from "../../assets/logo.png";
import { FaBars } from "react-icons/fa";
import home from "../../assets/home.png";
import globo from "../../assets/globo.png";
import campana from "../../assets/campana.png";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./main.module.css";

function Header() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.scrollY || document.documentElement.scrollTop;
      setScrollY(currentScroll);
      console.log("Scroll actual:", currentScroll); // ✅ Aquí se ve el valor real
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  console.log(scrollY);

  return (
    <header
      className={`${styles.padding_largo}   ${scrollY > 20 && styles.padding_corto }`}
    >
      <div
        className={`max-w-[1850px] w-full h-[94px] flex  justify-between items-center mx-auto `}
      >
        <nav>
          <img src={logo} alt="logo" className="w-[100px] mr-10" />
        </nav>

        <nav className={`flex flex-col items-center`}>
          <div className={`${styles.content_icons} ${scrollY > 20 && styles.esconder}`}>
            <div className="flex items-center  h-[54px]  border-b-2  border-b-black-800">
              <img src={home} alt="home" className="w-[65px]" />

              <span>Alojamiento</span>
            </div>

            <div className="flex  items-center h-[54px]  ">
              <img src={globo} alt="globo" className="w-[65px]" />
              <span>Experiencias</span>
            </div>

            <div className="flex items-center  h-[54px] ">
              <img src={campana} alt="campana" className="w-[65px]" />
              <span>Servicios</span>
            </div>
          </div>
          {/* sub-header */}
          <div
            className={`flex items-center justify-center pb-[26px] ${
              styles.hexa
            }   ${scrollY > 20 ? styles.hex : ""}`}
          >
            <div
              className={` ${styles.header_normal}   ${
                scrollY > 20 && styles.header_chico
              }`}
            >
              <div className="flex-1 px-4 py-1">
                <label
                  for="destination"
                  className="block text-xs font-bold text-gray-800"
                >
                  Dónde
                </label>
                <input
                  type="text"
                  id="destination"
                  name="destination"
                  placeholder="Explora destinos"
                  className="w-full border-none focus:ring-0 p-0 text-sm placeholder-gray-500 bg-transparent outline-none"
                />
              </div>

              <div className="border-l border-gray-200 h-10"></div>

              <div className="flex-1 px-4 py-1">
                <label
                  for="dates"
                  className="block text-xs font-bold text-gray-800"
                >
                  Fecha inicio
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  placeholder="Agrega fechas"
                  className="w-full border-none focus:ring-0 p-0 text-sm placeholder-gray-500 bg-transparent outline-none"
                />
              </div>
              <div className="border-l border-gray-200 h-10"></div>

              <div className="flex-1 px-4 py-1">
                <label
                  for="dates"
                  className="block text-xs font-bold text-gray-800"
                >
                  Fecha final
                </label>
                <input
                  type="text"
                  id="dates"
                  name="dates"
                  placeholder="Agrega fechas"
                  className="w-full border-none focus:ring-0 p-0 text-sm placeholder-gray-500 bg-transparent outline-none"
                />
              </div>

              <div className="border-l border-gray-200 h-10"></div>

              <div className="flex-1 px-4 py-1">
                <label
                  htmlForfor="service-type"
                  className="block text-xs font-bold text-gray-800"
                >
                  Quien
                </label>
                <input
                  type="text"
                  id="service-type"
                  name="service-type"
                  placeholder="Cuantos"
                  className="w-full border-none focus:ring-0 p-0 text-sm placeholder-gray-500 bg-transparent outline-none"
                />
              </div>

              <button className="bg-red-500 hover:bg-red-600 text-white rounded-full p-3 flex items-center justify-center ml-2 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`${scrollY > 20 ? "h-3 w-3" : "h-5.5 w-5.5"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </nav>

        <nav className="flex items-center gap-x-4">
          <span className="text-[13.5px] font-semibold">
            Conviértete en anfitrión
          </span>
          <div className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="w-[16px]"
            >
              <path d="M8 .25a7.77 7.77 0 0 1 7.75 7.78 7.75 7.75 0 0 1-7.52 7.72h-.25A7.75 7.75 0 0 1 .25 8.24v-.25A7.75 7.75 0 0 1 8 .25zm1.95 8.5h-3.9c.15 2.9 1.17 5.34 1.88 5.5H8c.68 0 1.72-2.37 1.93-5.23zm4.26 0h-2.76c-.09 1.96-.53 3.78-1.18 5.08A6.26 6.26 0 0 0 14.17 9zm-9.67 0H1.8a6.26 6.26 0 0 0 3.94 5.08 12.59 12.59 0 0 1-1.16-4.7l-.03-.38zm1.2-6.58-.12.05a6.26 6.26 0 0 0-3.83 5.03h2.75c.09-1.83.48-3.54 1.06-4.81zm2.25-.42c-.7 0-1.78 2.51-1.94 5.5h3.9c-.15-2.9-1.18-5.34-1.89-5.5h-.07zm2.28.43.03.05a12.95 12.95 0 0 1 1.15 5.02h2.75a6.28 6.28 0 0 0-3.93-5.07z"></path>
            </svg>
          </div>
          <div className="w-[30px] h-[30px] bg-gray-200 rounded-full flex items-center justify-center">
            <FaBars className="size-3" />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
