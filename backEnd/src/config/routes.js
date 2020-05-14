const express = require('express');

module.exports = function(app){
    //api routes

    const router = express.Router()
    app.use('/api',router)

    /// TODO routes

    const BillingCycle = require('../api/billingCycle/billingCycleServer');
    BillingCycle.register(router,'/billingCycles')

}