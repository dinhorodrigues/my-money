import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'
import { Component } from 'react'



const URL = 'http://localhost:3001/api'

const INITIAL_VALUE = {name:'', cliente: [{}] }
export const changeName = event =>({
    type: 'NAME_CHANGED',
    payload: event.target.value
   

})

 export const search = (name)  => {
    
         const search = name ? `&name__regex=/${name}/` : ''
         const request = axios.get(`${URL}/pepple?sort=+code${search}}`)
         return {
             type:'PESSOA_SEARCHED',
             payload: request
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
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('peppleForm', pepple)
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
