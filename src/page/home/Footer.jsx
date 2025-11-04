import React from "react";

export default function Footer() {
  return (
    <footer  className="px-8 py-12" >
      <div  className="flex justify-between"  >
        <ul  className="flex flex-col gap-y-2.5"  >
          <li>Asistencia</li>
          <li>Centro de ayuda</li>
          <li>Recibe ayuda con un problema de seguridad</li>
          <li>AirCover</li>
          <li>Antidiscriminación</li>
          <li>Apoyo para discapacitados</li>
          <li>Opciones de cancelación</li>
          <li>Problemas en el vecindario</li>
        </ul>

        <ul  className="flex flex-col gap-y-2.5"  >
          <li>Modo anfitrión</li>
          <li>Pon tu espacio en Airbnb</li>
          <li>Ofrece tu experiencia en Airbnb</li>
          <li>Ofrece tu servicio en Airbnb</li>
          <li>AirCover para anfitriones</li>
          <li>Recursos para anfitrionar</li>
          <li>Opciones de cancelación</li>
          <li>Problemas en el vecindario</li>
        </ul>

        <ul  className="flex flex-col gap-y-2.5"  >
          <li>Airbnb</li>
          <li>Novedades de mayo de 2025</li>
          <li>Sala de prensa</li>
          <li>Carreras</li>
          <li>Inversionistas</li>
          <li>Espacios en Airbnb.org</li>
        </ul>
      </div>
      <div  className="w-full  h-16 flex justify-between items-center "  >
        <span>© 2025 Airbnb, Inc.·PrivacidadTérminos</span>
        <span>Español (PE) S/. PEN</span>
      </div>
    </footer>
  );
}
