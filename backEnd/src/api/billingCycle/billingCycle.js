const nodeRestful = require('node-restful')
const mongoose = nodeRestful.mongoose



const creditSchema = new mongoose.Schema({
    name:{type: String, required: true, uppercase: true},
    value:{type: Number, min:0, required:[true, 'É obrigatório informar o valor do crédito']}
})

const debitSchema = new mongoose.Schema({
    name:{type: String, required: false,uppercase: true},
    value:{type: Number, min:0,  required:[true, 'É obrigatório informar o valor do débito']},
    status:{type: String, required: false, uppercase: true,
        enum:['PAGO','PENDENTE','AGENDADO']}
})

const billingCycleSchema = new mongoose.Schema({
    name:{type: String, required:true, uppercase: true},
    month:{type: Number,min:1, max:12, required: true},
    year: {type: Number,min:1970, max:2100, required: true},
    credits:[creditSchema],
    debts:[debitSchema]
})

module.exports = nodeRestful.model('BillingCycle',billingCycleSchema)