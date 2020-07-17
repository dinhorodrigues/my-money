import React, { Component } from 'react'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ItemList from './itemList'
import Summary from '../billingCycle/summary'




import { init } from './billingCycleActions'
import labelAndInput from '../common/form/labelAndInput'

class BillingCycleForm extends Component {

    calculateSummary() {
        const sum = (acumulador, valorAtual) => acumulador + valorAtual
        return {

            sumOfCredits: this.props.credits.map(cred => + cred.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(deb => +deb.value || 0).reduce(sum)
        }

    }

    render() {

        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} className='form-control' readOnly={readOnly}
                        label='Nome' cols='12 4' placeholder='Informe o nome' />
                    
                    <Field name='month' component={labelAndInput} className='form-control' readOnly={readOnly}
                        type='Number' label='Mês' cols='12 4' placeholder='Informe o mês' />
                    <Field name='year' component={labelAndInput} className='form-control' readOnly={readOnly}
                        type='Number' label='Ano' cols='12 4' placeholder='Informe o ano' />
                    <Summary credits={sumOfCredits} debts={sumOfDebts} />
                    <ItemList cols='12 6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos' />
                    <ItemList cols='12 6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}><i className='fa fa-upload'>
                    </i> {this.props.labelSubmit} </button>
                    
                    <button type='button' className={`btn btn-secondary`} onClick={this.props.init}><i className='fa fa-power-off'>
                    </i> Cancelar</button>



                </div>
            </form>

        )
    }
}
BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits'),debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm)