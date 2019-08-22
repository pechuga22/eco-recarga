import React from "react";
import "./styles/LoginStyle.css";
import { Link } from 'react-router-dom';
import Lola from "./images/lola.jpg";
import Bello from "./images/AndresBello.jpg";
//import Normal from "./images/NormalSuperior.jpeg";
import './styles/PartnersStyle.css';

const Login = () => {
  return (
    <React.Fragment>
    <div className="bg-color-home text-center">
        <div className="position-relative overflow-hidden p-3 p-md-5 bg-home text-white d-flex justify-content-center">
          <div className="col-md-5 p-lg-5 my-5 bg-color-home">
            <h1 className="display-4 font-weight-normal title-home">
              EcoRecarga, Conectate Reciclando
            </h1>
            {/* <a
              className="btn btn-primary btn-lg bg-boton font-weight-bold boton-letter py-1"
              href="https://wa.me/0573232933565"
            >
              Contáctanos
            </a> */}
          </div>
        </div>
      </div>
      <div className="row m-0 text-center mt-5">
        <div className="col-lg-6 col-md-12 my-3">
          <Link to="/recargas" ><button className="btn btn-lg btn-success text-center text-white mx-auto mb-5">
            Mis recargas
          </button></Link>
        </div>
        <div className="col-lg-6 col-md-12 my-3">
          <Link to="/mispuntos"><button className="btn btn-lg btn-success mb-5">Mis puntos</button></Link>
        </div>
      </div>
            {/* <p className=" container d-flex  justify-content-center justify-content-between my-5 ">
            <a
              className="btn btn-success btn-lg"
              data-toggle="collapse"
              href="#multiCollapseExample1"
              role="button"
              aria-expanded="false"
              aria-controls="multiCollapseExample1"
            >
              ¿ Como hacer parte ?
            </a>
            <button
              className="btn btn-success btn-lg"
              type="button"
              data-toggle="collapse"
              data-target="#multiCollapseExample2"
              aria-expanded="false"
              aria-controls="multiCollapseExample2"
            >
              ¿ Porque nosotros ?
            </button>card
          </p>
          <div className="row mb-5">
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample1">
                <div className="card card-body">
                  Es muy fácil, envianos un e-mail con sus datos de contacto a nuestro correo info@ecorecarga.com y en breve nos pondremos en contacto con usted. Juntos Cambiaremos el Mundo.
                </div>
              </div>
            </div> */}
            <div className="col">
              <div className="collapse multi-collapse" id="multiCollapseExample2">
                <div className="card card-body">
                  Somos una organización que busca incentivar a los niños y jovenes desde los colegios a reciclar y a cuidar el planeta, la entidad educativa no tiene que aportar nada economico a nuestro proyecto, nosotros tenemos todos los recursos.
                </div>
              </div>
            </div>
          <div className="container">
            <h2 className="text-center">Aliados</h2>
          <div className="card-deck">
            <div className="card">
              <img className="card-img-top" src={Lola} alt="" />
              <div className="card-body">
                <h5 className="card-title">I.E Lola Gonzalez</h5>
                <p className="card-text">
                  Ubicado cerca a la estación del metro San Javier en el barrio
                  Santa Lucia de Medellín, es conocido por que en un momento dado
                  fue de solo mujeres, en el 2009 paso a ser mixto.
                </p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={Bello} alt="" />
              <div className="card-body">
                <h5 className="card-title">I.E Andrés Bello</h5>
                <p className="card-text">
                  Ubicado en el parque de Bello, cuenta con mas de 2 mil
                  estudiantes en el 2019 en todas las jornadas, popular por su
                  rendimiento academico
                </p>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={Bello} alt="" />
              <div className="card-body">
                <h5 className="card-title">I.E Normal Superior del Nordeste</h5>
                <p className="card-text">
                  Esta en muchos de los municipios de Antioquia, como Yolombó
                  Antioquia, San roque, entre otros, muy popular por su excelencia
                  academica y su enfoque hacia la docencia con su programa de
                  grados 12-13 para normalistas
                </p>
              </div>
            </div>
          </div>
          </div>
    </React.Fragment>
  );
};
export default Login;
