import {
    BANNER
} from '../_actions/types';


export default function (state = {}, action) {

    switch (action.type) {
        case BANNER:
            return { ...state, banner: action.payload }
        default:
            return state;
    }
}