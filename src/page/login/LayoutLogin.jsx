import { useState } from "react";
import styles from "./login.module.css";
import * as FaIcons from "react-icons/fa";
// import { FaEnvelo } from "react-icons/fa";



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (email === "") {
        alert("Por favor, completa el email");
        return;
      }

      if (!password) {
        alert("Por favor, completa el password");
        return;
      }

      const data = {
        email: email,
        password: password,
      };

      console.log("Login data:", data);
      alert("Login exitoso");
    } catch (error) {
      console.error(error);
      alert("Error en el login");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSection}  
      
      // style={{backgroundImage: "url('./casa.png')"}} 
      
      >
        <div className={styles.overlay}>
          <h1 className={styles.logo}>Rahemza</h1>
          <p className={styles.tagline}>
            Rahemza is the only purchase that enriches you in ways beyond
            material wealth
          </p>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.formContainer}>
          <div className={styles.header}>
            <FaIcons.FaPlane className={styles.planeIcon} size={32} />
      
            <h2 className={styles.welcomeTitle}>Bienvenido </h2>
            <p className={styles.subtitle}>Login con tu Correo</p>
          </div>

          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Email</label>
              <div className={styles.inputWrapper}>
             
              <FaIcons.FaEnvelope  className={styles.inputIcon}  size={20}/>
                <input
                  type="email"
                  placeholder="thiux@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Password</label>
              <div className={styles.inputWrapper}>
                <FaIcons.FaLock className={styles.inputIcon} size={20} />
              
                <input
                  type="password"
                  placeholder="••••••••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
              </div>
            </div>

            <a href="#" className={styles.forgotPassword}>
              Forgot your password?
            </a>

            <button type="submit" className={styles.loginButton}>
              LOGIN
            </button>
          </form>

          <div className={styles.divider}>
            <span className={styles.dividerLine}></span>
            <span className={styles.dividerText}>OR</span>
            <span className={styles.dividerLine}></span>
          </div>

          {/* <div className={styles.socialButtons}>
            <button className={styles.socialButton}>
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>

            <button className={styles.socialButton}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            <button className={styles.socialButton}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="#000">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            </button>
          </div> */}

          <p className={styles.registerText}>
            Don't have account?{" "}
            <a href="#" className={styles.registerLink}>
              Register Now
            </a>
          </p>
        </div>

  
      </div>
    </div>
  );
}








// import { useState } from "react";
// import { toast, Toaster } from "sonner";

// import { loginRequest } from "../../api/apiLogin";

// export default function LayoutLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const SendLogin = async (e) => {
//     e.preventDefault();

//     try {
//       if (email === "") {
//         alert("Por favor, completa el email");
//         return;
//       }

//       if (!password) {
//         alert("Por favor, completa el password");
//         return;
//       }

//       const data = {
//         email: email,
//         password: password,
//       };

//       const res = await loginRequest(data);
//       sessionStorage.setItem("TK", res.data.token);

//       console.log(res);

//       toast.success("Login", {
//         description: "Exitoso",
//         duration: 1500,
//         position: "top-center",

//       });
//     } catch (error) {
//       console.log(error);

//       toast.error("Login", {
//         description: error.response.data?.msg,
//         duration: 3000,
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200 p-8">
//       <Toaster richColors />
//       <form
//         onSubmit={SendLogin}
//         className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 grid gap-4"
//       >
//         <h2 className="text-2xl font-semibold text-gray-800 text-center">
//           Iniciar sesión
//         </h2>
//         <label className="text-sm font-medium text-gray-700">Email</label>
//         <input
//           className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
//           name="email"
//           type="text"
//           placeholder="Kalen@gmail.com"
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label className="text-sm font-medium text-gray-700">Password</label>
//         <input
//           className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           name="password"
//           type="password"
//           placeholder="*******************"
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button
//           className="mt-2 bg-blue-600 text-white rounded-md px-4 py-2 font-medium shadow hover:opacity-95 disabled:opacity-60"
//           type="submit"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }
