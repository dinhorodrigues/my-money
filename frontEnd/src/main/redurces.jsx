import { combineReducers } from 'redux'
//import { reducer as FormReducer} from 'redux-form'
//import {reducer as toastrReducer} from 'react-redux-toastr'


const rootReducer = combineReducers({
    dashboard: () => ({sumary:{credit:100, debt: 50}})
})

export default rootReducer





//// esse arquivo tem o papel de concatenar todos reducers da aplicação