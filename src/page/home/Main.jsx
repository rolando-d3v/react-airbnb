import React from "react";
import casa_img from "../../assets/casa.png";

const Array_casa = [
  {
    id: 1,
    name: "Casa 1",
    price: 100,
    noche: 1,
    puntuacion: 4.5,
    image: casa_img,
  },
  {
    id: 2,
    name: "Casa 2",
    price: 200,
    noche: 2,
    puntuacion: 4.5,
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
        <h6 className="text-lg font-bold my-4">Alojamientos populares en Arequipa</h6>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fill,minmax(240px,1fr))]">
          {Array_casa.map((casa) => (
            <div
              className=" bg-green-500 h-[260px] rounded-3xl border border-gray-200 overflow-hidden"
              key={casa.id}
            >
              <img
                src={casa.image}
                alt="casa"
                className="w-full  object-cover h-[200px] "
              />
              <div className="py-1 h-[50px]" >
                <h2>{casa.name}</h2>
                <p>{casa.price}</p>
                <p>{casa.noche}</p>
                <p>{casa.puntuacion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
