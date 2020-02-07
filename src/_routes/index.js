import React from 'react'
import { Switch, Route, Router } from 'react-router-dom'

import { history } from './history'

import Home from '../pages/Home'
import Products from '../pages/Products'
import NotFound from '../pages/NotFound'

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/products" component={Products} />
            <Route exact path="/" component={Home} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)

export default Routes
