import { FILEDATA } from '../actions/index';

export default function( state = {}, action) {
    switch(action.type){
        case FILEDATA:
            return { ...state, [action.payload.data.path]: action.payload.data }
    }
    return state;
}