import logo from "../../assets/logo.png";

export default function LayoutUser() {
  return (
    <div>
      <header className="h-[80px] px-4  flex justify-between items-center border-b-1 ">
        <nav>
          <img src={logo} alt="logo" width={110} />
        </nav>
        <nav  className="flex items-center gap-4"  >
          <span>Conviertete en Anfitrion</span>
          <div className="h-9 w-9  bg-black   text-white rounded-full flex items-center justify-center     ">
            R
          </div>
        </nav>
      </header>

      <section className="flex">
        <aside>
          <h5>Perfil R</h5>
          <a href="#"> Información sobre mí</a>
          <a href="#"> Viajes anteriores</a>
          <a href="#"> Conexiones</a>
        </aside>
        <main></main>
      </section>
    </div>
  );
}
