import React, { useState } from "react";
import styles from "../../styles/AuthPage/Auth.module.scss";
import axios from "axios";
import API_URL from "../../../config";
import { IAuthPageProps } from "@/interfaces/interfaces";

const AuthPage: React.FC<IAuthPageProps> = ({
  onLogin,
  onToggle,
  title,
  switchTitle,
  switchText,
  buttonText,
  isLoginPage,
}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${API_URL}/register`,
        {
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Регистрация успешна:", response.data);
      onLogin();
    } catch (err) {
      console.error("Ошибка при регистрации:", err);
      setError("Не удалось зарегистрироваться.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-white">
      <div className="w-[550px]">
        <div className="flex flex-col items-center">
          <h2 className="text-[40px] font-bold leading-none">{title}</h2>
          <p className="mt-7">
            {switchTitle}
            <button onClick={onToggle} className="text-[#7C3FF9] ml-2">
              {switchText}
            </button>
          </p>
        </div>
        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-6 mt-[50px] text-[22px] font-bold"
        >
          <div className={styles.input_container}>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder=""
              required
            />
            <label htmlFor="login-email">
              {isLoginPage ? "Логин или Email" : "Электронная почта"}
            </label>
          </div>
          <div className={styles.input_container}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder=""
              required
            />
            <label htmlFor="password">Пароль</label>
          </div>
          {!isLoginPage && (
            <div className={styles.input_container}>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=""
                required
              />
              <label htmlFor="phone">Телефон</label>
            </div>
          )}
          <div className="flex justify-between">
            <div className={styles.checkbox}>
              <input type="checkbox" id="checkbox" className="size-6" />
              <label htmlFor="checkbox" className="cursor-pointer">
                Запомнить меня
              </label>
            </div>
            {isLoginPage && (
              <button className="text-[18px] font-normal transition-colors duration-200 hover:text-[#7C3FF9]">
                Забыли пароль?
              </button>
            )}
          </div>
          <button type="submit" className={styles.logButton} disabled={loading}>
            {loading ? "Загрузка..." : buttonText}
          </button>
          <button
            onClick={onLogin}
            className="text-[18px] font-normal transition-colors duration-200 hover:text-[#7C3FF9]"
          >
            Войти принудительно
          </button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default AuthPage;
