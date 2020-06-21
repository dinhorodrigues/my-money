import React from  'react'
import {Router,Route, Redirect, hashHistory} from  'react-router'


import billingCycle from '../billingCycle/billingCycle'
import dashboard from '../dashboard/dashboard'

export default props =>(
    <Router history={hashHistory}>
        <Route path='/' component={dashboard}/>
        <Route path='/billingCycles'component={billingCycle}/>
        <Redirect from='*' to='/' />
        
    </Router>
)
