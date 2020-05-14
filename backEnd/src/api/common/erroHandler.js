const _ = require('lodash')

module.exports = (req,res,next)=>{
    const bundle = res.locals.bundle

    if(bundle.errors){
        const Aviso = parserErrors(bundle.errors)
        res.status(500).json({Aviso})
     }else{
         next()
     }
}
const parserErrors = (nodeRestfulErrors) =>{
    const errors = []
    _.forIn(nodeRestfulErrors, error => errors.push(error.message))
    return errors
}