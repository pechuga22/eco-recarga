import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Profile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <div id="accordion">
            <div className="card mb-0">
              <div className="card-header" id="headingOne">
                <h5 className="my-0">
                  <button
                    className="btn btn-link text-success font-weight-bold"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h4>Mi Perfil</h4>
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div className="card-body">
                <h3 className="mb-4">Actualiza tus datos personales</h3>
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputEmail4">Nombre</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Nombre"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Apellido</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputPassword4"
                          placeholder="Apellido"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label for="inputAddress">Dirección</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Dirección de residencia"
                      />
                    </div>
                    <div className="form-group">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="gridCheck"
                        />
                        <label className="form-check-label" for="gridCheck">
                          Términos y Condiciones
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Actualizar
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="card mb-0">
              <div className="card-header" id="headingTwo">
                <h5 className="my-0">
                  <button
                    className="btn btn-link collapsed text-success font-weight-bold"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <h4>Historial</h4>
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <h2 className="text-center">
                    Un resumen del consumo de tus puntos
                  </h2>
                  <h4 className="text-center">
                    Mis puntos son: <strong>1000 </strong>
                    <Link to="/mispuntos">
                      <FontAwesomeIcon icon="sync" color="green" />
                    </Link>
                  </h4>
                  <table className="table table-bordered table-hover mt-5 text-center">
                    <thead className="table-success">
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Puntos que has gastado</th>
                        <th scope="col">Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>200</td>
                        <td>18/08/2019</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>400</td>
                        <td>19/08/2019</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>600</td>
                        <td>20/08/2019</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="card mb-0">
              <div className="card-header" id="headingThree">
                <h5 className="my-0">
                  <button
                    className="btn btn-link collapsed text-success font-weight-bold"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <h4>Configuración</h4>
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div className="card-body">
                  <form>
                    <h3>Cambiar Contraseña</h3>
                    <div className="form-group">
                      <label for="exampleInputEmail1">Celular</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Ingresar Celular"
                      />
                      <small id="emailHelp" className="form-text text-muted" />
                    </div>
                    <div className="form-group">
                      <label for="exampleInputPassword1">Contraseña</label>
                      <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Contraseña"
                      />
                    </div>
                    <div className="form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label className="form-check-label" for="exampleCheck1">
                        Términos y Condiciones
                      </label>
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Profile;
