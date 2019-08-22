import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/HomeComponent';
import Refills from '../components/RefillsComponent';
import Partners from '../components/PartnersComponent';
import MisPuntos from '../components/MisPuntosComponent';
import Profile from '../components/ProfileComponent';
import Forget from '../components/ForgetComponent';
import Login from '../components/LoginComponent';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path = "/home" component={Home} />
          <Route exact path = "/recargas" component={Refills} />
          <Route exact path = "/partners" component={Partners} />
          <Route exact path = "/mispuntos" component={MisPuntos} />
          <Route exact path = "/perfil" component={Profile} />
          <Route exact path = "/olvidaste-contraseña" component={Forget} />
          <Route exact path = "/" component={Login} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
