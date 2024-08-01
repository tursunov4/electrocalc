import React from "react";
import Loginui from "../../components/Loginui/Loginui";
import "./register.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Register = () => {
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
      <h2 className="register__title">Забыли пароль?</h2>
      <p className="regiter__about--text">
        Введите свой номер телефона и мы отправим вам SMS
      </p>
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
        </div>

        <button className="form__btn" type="submit">
          Далее
        </button>
        <button
          onClick={() => navigate("/login")}
          className="form__navigatebtn"
        >
          Войти
        </button>
      </form>
    </Loginui>
  );
};

export default Register;
