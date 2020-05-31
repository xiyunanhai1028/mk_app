import * as Types from '../types'
const initState = {
    theme: 'red'
}
export default function (state = initState, action) {
    switch (action.type) {
        case Types.THEME_CHANGE:
            return { ...state, theme: action.theme }
        default:
            return state
    }
}