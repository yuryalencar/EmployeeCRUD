import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import Update from './pages/Update';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/register" component={Register} />
                <Route path="/update" component={Update} />
                <Redirect from="*" to="/" />
            </Switch>
        </BrowserRouter>
    );
}