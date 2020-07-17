import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'


const URL = 'http://localhost:3001/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}] }

export function getList() {

    const request = axios.get(`${URL}/billingCycles `)

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function createBilling(values) {
    return botaoSubmit(values, 'post')
}
export function updateBilling(values) {
    return botaoSubmit(values, 'put')
}
export function deleteBilling(values) {
    return botaoSubmit(values, 'delete')
}


function botaoSubmit(values, method) {

    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${URL}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}
export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)/// passando o ciclo de pagamento, pegando da lista atraves do parametro

    ]

}
export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)/// passando o ciclo de pagamento, pegando da lista atraves do parametro

    ]

}

export function init() {
    return [
        showTabs('tablist', 'tabcreate'),
        selectTab('tablist'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}
