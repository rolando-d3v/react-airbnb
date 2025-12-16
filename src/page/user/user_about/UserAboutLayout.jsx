import React from "react";
// import styles from "./about.module.css";

export default function UserAboutLayout() {
  return (
    <div className="w-full  flex justify-center"  >
      <div  className="w-2/3" >
        <div className="flex  gap-6  items-center mb-6">
          <h6 className="text-3xl font-semibold">Información sobre mí</h6>
          <button className="bg-gray-200 px-4 py-1 rounded-lg text-sm ">
            Editar
          </button>
        </div>
        {/* <article className={` w-full gap-4  items-center  ${styles.media_query}   `}   > */}
        <article className=" lg:flex  w-full gap-4  items-center ">
          <div className=" w-[300px] h-[250px]  mx-4  shadow-lg shadow-gray-300 rounded-4xl  flex flex-col justify-center items-center ">
            <div className="w-20 h-20  bg-black  text-white  rounded-full  flex items-center justify-center ">
              R
            </div>
            <span className="text-3xl font-bold">Rahemza</span>
            <span className="text-sm">Huésped</span>
          </div>


          <div className="w-2/3 flex flex-col gap-2.5   ">
            <h6 className="text-lg  font-semibold ">Completa tu perfil</h6>
            <p>
              Tu perfil en Airbnb es una parte importante de todas las
              reservaciones. Completa el tuyo para que los demás anfitriones y
              huéspedes te conozcan mejor.
            </p>
            <button className="text-white h-10 bg-[#E51D53]  rounded-lg">
              Comencemos
            </button>
          </div>
        </article>
      </div>
    </div>
  );
}
