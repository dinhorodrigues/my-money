import { combineReducers } from 'redux'
//import { reducer as FormReducer} from 'redux-form'
//import {reducer as toastrReducer} from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer
})

export default rootReducer





//// esse arquivo tem o papel de concatenar todos reducers da aplicação