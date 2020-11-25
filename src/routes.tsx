import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Registrando from './pages/Registrando';
import Detalhe from './pages/Detalhe'
import Alterar from './pages/Alterar'

function Routes() {
    return (
     <BrowserRouter>
     <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Registrando" component={Registrando} />
        <Route path="/Detalhe" component={Detalhe} />
        <Route path='/Alterar' component={Alterar} />
    </Switch>
     </BrowserRouter>
    );
}

export default Routes;