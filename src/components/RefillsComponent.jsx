import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

class Refills extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      <div className="container mt-4">
        <h2 className="display-5 text-center text-uppercase mb-5">
          Utiliza tus puntos para Realizar recargas
        </h2>
        <h3 className="text-center">
          Mis puntos son: <strong>1000 </strong>
          <Link to="/recargas">
            <FontAwesomeIcon icon="sync" color="green" />
          </Link>
        </h3>
        <form className="mt-5">
            <legend>Datos de la recarga</legend>
          <div className="form-group">
            <label for="inputState">Selecciona el Operador</label>
            <select id="inputState" class="form-control" required>
              <option selected>Operador...</option>
              <option>Avantel</option>
              <option>Movistar</option>
              <option>Claro</option>
              <option>Uff Movil</option>
              <option>Tigo</option>
              <option>Flash Mobile</option>
              <option>ETB</option>
              <option>Virgin Mobile</option>
              <option>Mobil Éxito</option>
            </select>
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Tu numero de celular</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Celular"
              required
            />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput2">Valor de tu recarga</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="¿Cuánto?"
              required
            />
          </div>
          <button type="submit" className="btn btn-success" data-toggle="modal" data-target="#exampleModalCenter" >
            Realizar recarga
          </button>
        </form>
      </div>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Recarga Exitosa</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            Gracias por utilizar Ecorecargas, Conectate reciclando !
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal">Aceptar</button>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
    );
  }
}

export default Refills;