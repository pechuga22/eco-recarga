import React, { Component } from "react";
import Lola from "./images/lola.jpg";
import Bello from "./images/AndresBello.jpg";
import Normal from "./images/NormalSuperior.jpeg";
import './styles/PartnersStyle.css';

class Partners extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="jumbotron text-center bg-slide">
          <h1 className="display-3 font-weight-bold">Aliados</h1>
        </div>
        <p className=" container d-flex  justify-content-center justify-content-between my-5 ">
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
          </button>
        </p>
        <div className="row mb-5">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample1">
              <div className="card card-body">
                Es muy fácil, envianos un e-mail con sus datos de contacto a nuestro correo info@ecorecarga.com y en breve nos pondremos en contacto con usted. Juntos Cambiaremos el Mundo.
              </div>
            </div>
          </div>
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="card card-body">
                Somos una organización que busca incentivar a los niños y jovenes desde los colegios a reciclar y a cuidar el planeta, la entidad educativa no tiene que aportar nada economico a nuestro proyecto, nosotros tenemos todos los recursos.
              </div>
            </div>
          </div>
        </div>

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
            <div className="card-footer">
              <small className="text-muted">Hace 1 mes</small>
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
            <div className="card-footer">
              <small className="text-muted">Hace 1 mes</small>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={Normal} alt="" />
            <div className="card-body">
              <h5 className="card-title">I.E Normal Superior del Nordeste</h5>
              <p className="card-text">
                Esta en muchos de los municipios de Antioquia, como Yolombó
                Antioquia, San roque, entre otros, muy popular por su excelencia
                academica y su enfoque hacia la docencia con su programa de
                grados 12-13 para normalistas
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Hace 1 mes</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Partners;