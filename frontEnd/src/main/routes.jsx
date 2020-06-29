import React from 'react'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'

import AuthOrApp from './authOrApp'
import billingCycle from '../billingCycle/billingCycle'
import dashboard from '../dashboard/dashboard'

export default props => (
    <Router history={hashHistory}>
        <Route path='/' component={AuthOrApp}>
            <IndexRoute component={dashboard} />

            <Route path='/billingCycles' component={billingCycle} />
        </Route>
        <Redirect from='*' to='/' />
    </Router>

)
