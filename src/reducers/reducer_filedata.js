import { FILEDATA } from '../actions/index';

export default function(state = {}, action){
    switch(action.type){
        case FILEDATA:
            return action.payload.data ;
    }

    return state;
}