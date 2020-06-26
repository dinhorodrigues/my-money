import React, {Component} from 'react'
import {reduxForm, Field, formValueSelector} from 'redux-form'
import {connect} from 'react-redux'
import {bindActionCreators} from  'redux'
import CreditList from './creditList'



import { init} from './billingCycleActions'
import labelAndInput from  '../common/form/labelAndInput'

class BillingCycleForm extends Component {
    render(){
        const {handleSubmit, readOnly, credits} = this.props
        
        return(
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} readOnly={readOnly}
                    label='Nome' cols='12 4' placeholder='Informe o nome'/>
                    <Field name='month' component={labelAndInput} readOnly={readOnly}
                    type='Number' label='Mês' cols='12 4' placeholder='Informe o mês'/>
                    <Field name= 'year' component={labelAndInput} readOnly={readOnly}
                    type='Number' label='Ano' cols='12 4' placeholder='Informe o ano'/>
                <CreditList cols='12 6' list={credits}readOnly={readOnly}/>
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.submitClass}`}><i className='fa fa-upload '>                     
                     </i> {this.props.labelSubmit} </button>
                    <button type='button' className={`btn btn-secondary`} onClick={this.props.init}><i className='fa fa-power-off'> 
                     </i> Cancelar</button>
                    
                   

                </div>
            </form>

        )
    }
}
BillingCycleForm = reduxForm({form:'billingCycleForm', destroyOnUnmount:false})( BillingCycleForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({credits: selector(state, 'credits')})
const mapDispatchToProps = dispatch => bindActionCreators({init}, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(BillingCycleForm)