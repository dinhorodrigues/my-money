import axios from 'axios'
import {toastr} from 'react-redux-toastr'

import {showTabs, showSelect} from '../common/tab/tabActions'

const URL = 'http://localhost:3001/api'

export function init(){
    return[
        showTabs('tablist','tabcreate'),
        showSelect('tablist')
    ]

}