////arquivo de cadastro do usuario


const restful = require('node-restful')
const mogoose = restful.mogoose

const UserSchema = new mogoose.Schema({
    name:{type: String, required: true},
    email:{type:String, required: true},
    password:{type: String, min:6, max:12, required:true}
})

module.exports = restful.model('User', UserSchema)