const express = require('express')
const auth = require('./auth')

module.exports = function (app) {

    //Rotas  protegidas por token

    const protectedApi = express.Router()
    app.use('/api', protectedApi)

    protectedApi.use(auth)

    const BillingCycle = require('../api/billingCycle/billingCycleServer');
    BillingCycle.register(protectedApi, '/billingCycles')




    //// Rotas Abertas 
    const openApi = express.Router()
    app.use('/oapi', openApi)

    const authService = require('../api/user/authService')
    openApi.post('/login', authService.login)
    openApi.post('/signup', authService.signup)
    openApi.post('validateToken'), authService.validateToken

}