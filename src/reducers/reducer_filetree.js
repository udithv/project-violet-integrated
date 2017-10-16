import { FILETREE } from '../actions/index';

export default function(state = [], action) {
    switch(action.type) {
        case FILETREE:
            return [...state, action.payload.data];
    }

    return state;
}