import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'


import labelAndInput from '../common/form/labelAndInput'
import selectedIput from '../common/form/selectedIput'
import ItemButton from '../common/form/button'





class PeppleForm extends Component {
    render() {
        return (
          
     

          <form role='form' >

                <div className="box-body">
                    <Field name='codCliente' component={labelAndInput} label='Código' cols='12 1' placeholder='Código' />
                    <Field name='name' component={labelAndInput} label='Nome Completo' cols='12 3' placeholder='Nome' />
                    <Field name='cpf' component={labelAndInput} label='CPF' cols='12 2' placeholder='090.585.494-84' />
                    <Field name='rg' component={labelAndInput} label='RG' cols='12 2' placeholder='RG' />
                    <Field name='dataNas' component={labelAndInput} label='Data Nascimento' cols='12 2' placeholder='01/03/1990' />
                    <Field name='sex' component={selectedIput} label='Sexo' cols='12 2' />
                    <Field name='cel' component={labelAndInput} label='Celular' cols='12 2' placeholder='Celular' />
                    <Field name='email' component={labelAndInput} label='E-mail' cols='12 3' placeholder='exemplo@exemplo.com' />
                    <Field name='cep' component={labelAndInput} label='Cep' cols='12 2' placeholder='exemplo 58-800-00' />
                    <Field name='end' component={labelAndInput} label='Endereço' cols='12 3' placeholder='Av. das laranjeiras' />
                    <Field name='num' component={labelAndInput} label='Número' cols='12 2' placeholder='800' />
                    <Field name='complemento' component={labelAndInput} label='Complemento' cols='12 2' placeholder='Bloco / Apart.' />
                    <Field name='cidade' component={labelAndInput} label='Cidade' cols='12 4' placeholder='João Pessoa-PB' />
                    <Field name='referecia' component={labelAndInput} label='Ponto de referência' cols='12 6' placeholder='Ex. Padaria Vitória' />
                  

                    
             </div>
                




            </form>
       
        )
    }
}
PeppleForm = reduxForm({ form: 'peppleForm', destroyOnUnmount: false })(PeppleForm)

export default (PeppleForm)