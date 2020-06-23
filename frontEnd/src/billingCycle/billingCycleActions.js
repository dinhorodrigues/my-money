import axios from   'axios'

const URL = 'http://localhost:3001/api'

export function getList(){

    const request = axios.get(`${URL}/billingCycles `)

    return {
        type:'BILLING_CYCLES_FETCHED',
        payload: request
    }
}
