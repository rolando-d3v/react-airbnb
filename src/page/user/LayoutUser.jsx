import { Link, Outlet } from "react-router";
import logo from "../../assets/logo.png";

export default function LayoutUser() {
  return (
    <div className="min-h-screen">
      <header className="h-[80px] px-4  flex justify-between items-center border-b-[1px] border-gray-200 ">
        <nav>
          <Link to="/">
            {" "}
            <img src={logo} alt="logo" width={110} />
          </Link>
        </nav>
        <nav className="flex items-center gap-4">
          <span>Conviertete en Anfitrion</span>
          <div className="h-9 w-9  bg-black   text-white rounded-full flex items-center justify-center     ">
            R
          </div>
        </nav>
      </header>

      <section className="flex w-full h-[calc(100vh-80px)]">
        <aside className="flex flex-col  items-center gap-4  bg-gray-50  w-[500px] px-4 py-8">
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-[35px]">Perfil</h5>
            <Link to="about" className="flex items-center gap-4  px-8 py-3  rounded-xl hover:bg-gray-200">
              <div className="h-9 w-9  bg-black   text-white rounded-full flex items-center justify-center     ">
                R
              </div>
              <span className="font-semibold">Información sobre mí</span>
            </Link>
            <Link to="past-trips" className="flex items-center px-8 py-3  rounded-xl gap-4 hover:bg-gray-200">
              <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/797c1df2-a40c-4d93-9550-ca5b213cd01b.png?im_w=240"
                alt=""
                width={40}
              />
              <span className="font-semibold">Viajes anteriores</span>
            </Link>
            <Link to="connections" className="flex items-center px-8 py-3  rounded-xl gap-4 hover:bg-gray-200">
               <img
                src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-UserProfile/original/797c1df2-a40c-4d93-9550-ca5b213cd01b.png?im_w=240"
                alt=""
                width={40}
              />
              <span className="font-semibold">Conexiones</span>
            </Link>
          </div>
        </aside>


        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </section>
    </div>
  );
}
