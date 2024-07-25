import React from "react";
import Loginui from "../../components/Loginui/Loginui";
import { useForm } from "react-hook-form";
import "./login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  const navigate = useNavigate();
  return (
    <Loginui>
      <h2 className="login__title">Привет! Добро пожаловать, снова!</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group__box">
          <div className="form-group">
            <label className="login__label" htmlFor="phoneNumber">
              Тел.номер
            </label>
            <input
              className="login__input"
              {...register("phoneNumber", {
                required: "Введите номер вашего телефона",
              })}
              placeholder="Введите номер вашего телефона"
            />
            {errors.phoneNumber && (
              <span className="login__error">{errors.phoneNumber.message}</span>
            )}
          </div>
          <div className="form-group">
            <label className="login__label" htmlFor="password">
              Пароль
            </label>
            <input
              className="login__input"
              type="password"
              {...register("password", { required: "Введите пароль" })}
              placeholder="Введите пароль"
            />
            {errors.password && (
              <span className="login__error">{errors.password.message}</span>
            )}
          </div>
        </div>
        <div className="form__bottom--group">
          <label className="form__bottom--label">
            <input
              className="login__checkbox"
              type="checkbox"
              {...register("rememberMe")}
            />
            Запомните меня
          </label>
          <p onClick={() => navigate("/")} className="login__navigate">
            Забыли пароль?
          </p>
        </div>
        <button className="form__btn" type="submit">
          Войти
        </button>
      </form>
    </Loginui>
  );
};

export default Login;
