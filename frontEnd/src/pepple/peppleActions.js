import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

import moment from 'moment'





const URL = 'http://localhost:3001/api'

const INITIAL_VALUE = { cliente: [{}] }
export const changeName = event => ({

    type: 'NAME_CHANGED',
    payload: event.target.value.toUpperCase()


})

export const search = (description = '') => {


    const search = description ? `&name__regex=/${description}/` : ''
    const request = axios.get(`${URL}/pepple?sort=+code${search}`)


    return {
        type: 'PESSOA_SEARCHED',
        payload: request
    }

}
export function keyHandler(e) {

    if (e.key === 'Enter') {
        e.shiftKey ? psearch() : console.log("Voce apertou enter")

    }
}



export function createPepple(values) {

    return botaoSubmit(values, 'post')
}
export function updatePepple(values) {

    return botaoSubmit(values, 'put')
}
export function deletePepple(values) {
    return botaoSubmit(values, 'delete')
}



function botaoSubmit(values, method) {

    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${URL}/pepple/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}
export function showUpdate(pepple) {

    var valuesForm = ({ ...pepple, dataNas: moment.utc(pepple.dataNas).local("BR").format("yyyy-MM-DD") })

    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('peppleForm', valuesForm)
    ]
}

export function showDelete(pepple) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('peppleForm', pepple)
    ]
}

export function init() {
    return [
        showTabs('tablist', 'tabcreate'),
        selectTab('tablist'),
        search(),

        initialize('peppleForm', INITIAL_VALUE)
    ]

}
