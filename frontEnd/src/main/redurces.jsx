import { combineReducers } from 'redux'
//import { reducer as FormReducer} from 'redux-form'
//import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer





//// esse arquivo tem o papel de concatenar todos reducers da aplicação