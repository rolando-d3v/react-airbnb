import { useState } from "react";
import { toast, Toaster } from "sonner";
import { loginRequest } from "../../api/apiLogin";
// Icons
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
// Styles
import styles from "./LoginBrasil.module.css";

export default function LoginBrasil() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SendLogin = async (e) => {
    e.preventDefault();

    try {
      if (email === "") {
        toast.warning("Por favor, completa el email");
        return;
      }

      if (!password) {
        toast.warning("Por favor, completa el password");
        return;
      }

      const data = {
        email: email,
        password: password,
      };

      const res = await loginRequest(data);
      sessionStorage.setItem("TK", res.data.token);

      console.log(res);

      toast.success("Login Exitoso", {
        description: "Bienvenido de nuevo",
        duration: 1500,
        position: "top-center",
      });
    } catch (error) {
      console.log(error);

      toast.error("Error en Login", {
        description: error.response?.data?.msg || "Ocurrió un error",
        duration: 3000,
        position: "top-center",
      });
    }
  };

  return (
    <div className={styles.container}>
      <Toaster richColors />

      {/* Left Panel - Image & Branding */}
      <div className={styles.leftPanel}>
        <div className={styles.leftPanelOverlay}></div>
        <div className={styles.leftContent}>
          <h1 className={styles.brand}>Travelista Tours</h1>
          <p className={styles.tagline}>
            Travel is the only purchase that enriches you in ways beyond
            material wealth
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className={styles.rightPanel}>
        <div className={styles.planePath}></div>

        <h2 className={styles.welcomeText}>Welcome</h2>
        <p className={styles.subText}>Login with Email</p>

        <form onSubmit={SendLogin} className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email Id</label>
            <div className={styles.inputWrapper}>
              <HiOutlineMail className={styles.inputIcon} />
              <input
                className={styles.input}
                name="email"
                type="text"
                placeholder="thisuix@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputWrapper}>
              <HiOutlineLockClosed className={styles.inputIcon} />
              <input
                className={styles.input}
                name="password"
                type="password"
                placeholder="*****************"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.forgotPassword}>Forgot your password?</div>

          <button className={styles.loginButton} type="submit">
            LOGIN
          </button>
        </form>

        <div className={styles.divider}>OR</div>

        <div className={styles.socialButtons}>
          <button className={styles.socialBtn} type="button">
            <FcGoogle />
          </button>
          <button
            className={styles.socialBtn}
            type="button"
            style={{ color: "#1877F2" }}
          >
            <FaFacebookF />
          </button>
          <button
            className={styles.socialBtn}
            type="button"
            style={{ color: "black" }}
          >
            <FaApple />
          </button>
        </div>

        <p className={styles.registerText}>
          Don't have account?
          <span className={styles.registerLink}>Register Now</span>
        </p>

        {/* Simple skyline decoration at bottom */}
        <div className={styles.skyline}></div>
      </div>
    </div>
  );
}
