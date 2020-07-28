const INITIAL_STATE = { name: '', list: [] }


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'NAME_CHANGED':
            return { ...state, name: action.payload}
        case 'END_CHANGED' :
            return {...state, end: action.payload}
            
        case 'PESSOA_SEARCHED':
            return { ...state, list: action.payload.data }

        default:

            return state

    }

}