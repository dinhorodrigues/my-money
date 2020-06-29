module.exports = function(req,res, next){
    res.header('Access-Control-Allow-Origin','*')// qualquer origen pode consumir a api  porque está public
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, Authorization')
    next()
}
