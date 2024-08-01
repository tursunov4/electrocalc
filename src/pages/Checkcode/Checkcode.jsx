import React from "react";
import Loginui from "../../components/Loginui/Loginui";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
const Checkcode = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  //   const navigate = useNavigate();
  return (
    <Loginui>
      <h2 className="register__title">Забыли пароль?</h2>
      <p className="regiter__about--text">
        Мы отправили вам SMS с 6-значным кодом, введите его чтобы подтвердить
        что это ваш номер
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group__box">
          <div className="form-group">
            <label className="login__label" htmlFor="phoneNumber">
              Код
            </label>
            <input
              className="login__input"
              {...register("phoneNumber", {
                required: "Введите номер вашего Код",
              })}
              placeholder="-----"
            />
            {errors.phoneNumber && (
              <span className="login__error">{errors.phoneNumber.message}</span>
            )}
          </div>
        </div>

        <button className="form__btn" type="submit">
          Далее
        </button>
      </form>
    </Loginui>
  );
};

export default Checkcode;
