import { useState } from "react";
import styles from "./Login.module.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoMdLogIn } from "react-icons/io"; // Make sure to import the IoMdLogIn icon
import { BsPersonFillAdd } from "react-icons/bs";

function Login({ theme }) {
  const [action, setAction] = useState("login");
  const [isLoading, setIsLoading] = useState(false);

  const registerLink = (e) => {
    e.preventDefault();
    setAction("register");
  };

  const loginLink = (e) => {
    e.preventDefault();
    setAction("login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a network request
    setTimeout(() => {
      setIsLoading(false);
      alert("Form submitted!");
    }, 2000);
  };

  return (
    <div className={`${styles.wrapper} ${styles[theme]} ${action === "register" ? styles.active : ""}`}>
      <div className={`${styles.form_box} ${styles.login}`}>
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className={styles.input_box}>
            <input type="text" placeholder="Username" required />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.input_box}>
            <input type="password" placeholder="Password" required />
            <FaLock className={styles.icon} />
          </div>
          <div className={styles.remember_forgot}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" disabled={isLoading}>
            <IoMdLogIn className={styles.loginIcon} />
            <span>Login</span>
          </button>
          <div className={styles.register_link}>
            <p>
              Don't have an account?{" "}
              <a href="#" onClick={registerLink}>
                Register
              </a>
            </p>
          </div>
        </form>
      </div>

      <div className={`${styles.form_box} ${styles.register}`}>
        <form onSubmit={handleSubmit}>
          <h1>Registration</h1>
          <div className={styles.input_box}>
            <input type="text" placeholder="Username" required />
            <FaUser className={styles.icon} />
          </div>
          <div className={styles.input_box}>
            <input type="email" placeholder="Email" required />
            <SiGmail className={styles.icon} />
          </div>
          <div className={styles.input_box}>
            <input type="password" placeholder="Password" required />
            <FaLock className={styles.icon} />
          </div>
          <div className={styles.remember_forgot}>
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" disabled={isLoading}>
            <BsPersonFillAdd className={styles.loginIcon} />
            <span>Register</span>
          </button>
          <div className={styles.register_link}>
            <p>
              Already have an account?{" "}
              <a href="#" onClick={loginLink}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
