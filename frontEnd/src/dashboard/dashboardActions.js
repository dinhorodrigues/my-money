import axios from 'axios'

const URL = 'http://localhost:3001/api'

export function getSummary(){

    const request = axios.get(`${URL}/billingCycles/summary`)/// requisição assicrona

    return{
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}