const _ = require('lodash')
const jsonwebToken = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('./user')
const env = require('../../.env')


const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

//// tratar erros no banco de dados
const sendErrorsFromDB = (res, dbErros) => {
    const errors = []
    _.forIn(dbErrors.errors, error => errors.push(error.message))
    return res.status(400).json({ errors })
}



// criando metodo login
const login = (req, res, next) => {
    const email = req.body.email || ''
    const password = req.body.password || ''


    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user && bcrypt.compareSync(password, user.password)) {
            const token = jsonwebToken.sign(user, env.authSecret, {
                expiresIn: '1 day'

            })
            const { name, email } = user
            res.json({ name, email, token })
        } else {
            return res.status(400).send({ errors: ['usuário/ Senha inválidos'] })
        }
    })
}


/// metodo validar tocken
const validateToken = (req, res, next) => {
    const token = req.body.token || ''
    jsonwebToken.verify(token, authSecret, function (err, decoded) {
        return res.status(200).send({ valid: !err })
    })
}


/// metodo para criar cadatro login
const signup = (req, res, next) => {
    const name = req.body.name || ''
    const email = req.body.email || ''
    const password = req.body.password || ''
    const confirmPassword = req.body.confirm_password || ''
    ///// metodo match varre a string e faz uma comparação 
    
    if (!email.match(emailRegex)) {
        return res.status(400).send({ errors: ['o e-mail informado está inválido'] })
    }
    if (!password.match(passwordRegex)) {
        return res.status(400).send({
            errors: [
                'Senha precisar ter: uma letra maiúscula, uma letra minúscula, um número, uma caractere especial(@#$%) e tamanho entre 6-20.']
        })
    }

    /// comparação de senhas
    const salt = bcrypt.genSaltSync()
    const passwordHasch = bcrypt.hashSync(password, salt)//// aqui faz a comparação do password
    if (!bcrypt.compareSync(confirmPassword, passwordHasch)) {
        return res.status(400).send({ errors: ['confirmação de senha não confere'] })
    }

    /// verifica se email ja esta cadastrado
    User.findOne({ email }, (err, user) => {
        if (err) {
            return sendErrorsFromDB(res, err)
        } else if (user) {
            return res.status(400).find({ errors: ['usuário ja cadastrado'] })


            //// se tudo ok cria o novo usuario
        } else {
            const newUser = new User({ name, email, password: passwordHasch })
            newUser.save(err => {
                if (err) {
                    return sendErrorsFromDB(res, err)
                } else {
                    ///// depois de cadastrar ja chama direto o login
                    login(req,res, next)
                }
            })
        }
    })
}

module.exports = { login, signup, validateToken }