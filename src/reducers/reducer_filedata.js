import { FILEDATA, SETFILEDATA, REPLACEFILEDATA } from '../actions/index';

export default function(state = {}, action){
    switch(action.type){
        case FILEDATA:
        return { 
            name: action.payload.data.name,
            fdata: action.payload.data.fdata
           }
        
        case SETFILEDATA:
            return { 
              name: action.payload.data.name,
              fdata: action.payload.data.fdata
             }
        case REPLACEFILEDATA:
             return {
               name: action.payload.data.name,
               fdata: action.payload.data.fdata
             }
    }


    return state;
}