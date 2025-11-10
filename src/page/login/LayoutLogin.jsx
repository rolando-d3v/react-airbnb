import { useState } from "react";

export default function LayoutLogin() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const SendLogin = (e) => {
    e.preventDefault()


    if (email === "" ) {
        alert("Por favor, completa el email")
        return
    }


    if (!password) {
        alert("Por favor, completa el password")
        return
    }
   
    const data = {
        email: email,
        password: password,
    }

    console.log(data)
   
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
      <form  onSubmit={SendLogin}  className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 grid gap-4">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Iniciar sesión
        </h2>
        <label className="text-sm font-medium text-gray-700">Email</label>
        <input
          className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          name="email"
          type="text"
          placeholder="Kalen@gmail.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-sm font-medium text-gray-700">Password</label>
        <input
          className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          name="password"
          type="password"
          placeholder="*******************"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-2 bg-blue-600 text-white rounded-md px-4 py-2 font-medium shadow hover:opacity-95 disabled:opacity-60"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}
