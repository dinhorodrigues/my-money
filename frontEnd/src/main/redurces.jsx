import { combineReducers } from 'redux'
import { reducer as FormReducer} from 'redux-form'
import { reducer as ToastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../dashboard/dashboardReducer'
import TabReducer from '../common/tab/tabReducer'
import BillingCycleReducer from '../billingCycle/billingCycleReducer'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: FormReducer,
    toastr: ToastrReducer
})

export default rootReducer





//// esse arquivo tem o papel de concatenar todos reducers da aplicação