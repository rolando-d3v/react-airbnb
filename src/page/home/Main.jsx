import React from "react";
import casa_img from "../../assets/casa.png";
import { FaHeart } from "react-icons/fa";

const Array_casa = [
  {
    id: 1,
    name: "Lugar para quedarse en Arequipa",
    price: 105,
    noche: 2,
    puntuacion: 4.77,
    image: casa_img,
  },
  {
    id: 2,
    name: "Apartamento de Cayma",
    price: 264,
    noche: 2,
    puntuacion: 5.0,
    image: casa_img,
  },
  {
    id: 3,
    name: "Casa 3",
    price: 300,
    noche: 3,
    puntuacion: 4.5,
    image: casa_img,
  },
  {
    id: 4,
    name: "Casa 4",
    price: 400,
    noche: 4,
    puntuacion: 4.5,
    image: casa_img,
  },
  {
    id: 5,
    name: "Casa 5",
    price: 500,
    noche: 5,
    puntuacion: 4.5,
    image: casa_img,
  },
  {
    id: 6,
    name: "Casa 6",
    price: 600,
    noche: 6,
    puntuacion: 4.5,
    image: casa_img,
  },
  {
    id: 7,
    name: "Casa 7",
    price: 700,
    noche: 7,
    puntuacion: 4.5,
    image: casa_img,
  },
  {
    id: 8,
    name: "Casa 8",
    price: 800,
    noche: 8,
    puntuacion: 4.5,
    image: casa_img,
  },
];

export default function Main() {
  return (
    <div className="w-full flex justify-center p-4">


      <div className="w-[1850px] px-4">
        <h6 className="text-lg font-bold my-4">
          Alojamientos populares en Arequipa
        </h6>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(200px,1fr))]">
          {Array_casa.map((casa) => (
            <div
              className="h-[234px] rounded-3xl relative  overflow-hidden"
              key={casa.id}
            >
              <div className=" w-35 absolute top-3 left-3 bg-gray-200 rounded-full px-4 py-1.5 shadow-md    ">
                <p className="text-sm font-semibold leading-3.5">
                  Favoritos entre huespedes
                </p>
              </div>

              <div className="absolute top-3 right-3">
                <FaHeart className="text-gray-700  size-5 " />
              </div>

              <img
                src={casa.image}
                alt="casa"
                className="w-full  object-cover h-[180px]  rounded-3xl   "
              />
              <div className="py-1 h-[50px]">
                <h2 className="font-semibold text-[13px]  ">{casa.name}</h2>
                <p className="flex ">
                  <span className="text-gray-500  text-[13px]">
                    {" "}
                    s/ {casa.price}
                  </span>
                  <span className="text-gray-500  text-[13px]">
                    {" "}
                    por {casa.noche} noches
                  </span>

                  <strong className="flex items-center text-gray-500 ">
                    <svg
                      className="w-4 h-[10px] text-gray-500 fill-current"
                      viewBox="0 0 32 32"
                    >
                      <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
                    </svg>
                    <span className="text-[13px] font-medium ">
                      {casa.puntuacion}
                    </span>{" "}
                  </strong>
                </p>
              </div>
            </div>
          ))}
        </div>


        
      </div>

      
    </div>
  );
}
