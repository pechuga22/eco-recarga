import React from "react";
import "./styles/LoginStyle.css";
import Logo from "./images/HomeLogo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <header>
      <section className="view intro-2">
        <div className="mask rgba-stylish-strong h-100 d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-10 col-sm-12 mx-auto mt-lg-5">
                <div className="card wow fadeIn" data-wow-delay="0.3s">
                  <div className="card-body">
                    <div className="form-header">
                      <img
                        className="Logo mx-auto d-block"
                        src={Logo}
                        alt="Logo"
                      />
                    </div>
                    <div className="md-form">
                      <i className="prefix white-text" />
                      <label for="orangeForm-name">Telefono</label>
                      <input
                        type="text"
                        id="orangeForm-name"
                        className="form-control-plaintext border-bottom"
                      />
                    </div>
                    <div className="md-form">
                      <i className="prefix dark-text" />
                      <label for="orangeForm-pass">Contraseña</label>
                      <input
                        type="password"
                        id="orangeForm-pass"
                        className="form-control-plaintext border-bottom"
                      />
                    </div>
                    <div className="text-center">
                      <br />
                      <Link to="/home">
                        <button className="btn  btn-lg text-white border">
                          Registrarse
                        </button>
                      </Link>
                    </div>
                    <br />
                    <Link
                      to="/olvidaste-contraseña"
                      className="forgetPassword text-white"
                    >
                      {" "}
                      <p>Olvide mi contraseña</p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
export default Login;
