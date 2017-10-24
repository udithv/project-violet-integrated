import _ from 'lodash';
import { FILEDATA, SETFILEDATA, REMOVEFILEDATA, REPLACEFILEDATA } from '../actions/index';

export default function( state = [], action){

    switch(action.type){
        case FILEDATA:
            const { path, name, fdata } = action.payload.data;
            const file = {
                id: path,
                content: name,
                fdata,
                active: true
            }
            const newState = _.map(state, (f) => {
                if(f.active){
                    f.active = false;
                }
                return f;
                
            });

            return [ ...newState, file ];
        
        case SETFILEDATA:
            
            const updatedState = _.map(state, (file) => {
                if(file.id == action.payload.data.id){
                    file.active = true;
                }else{
                    file.active = false;
                }
                return file;
            });
            return updatedState;
        
        case REMOVEFILEDATA:
           const updatedChosen =  _.filter(state, (file) => {
                return file.id != action.payload.data
            });


           return updatedChosen;
        
        case REPLACEFILEDATA:

            return _.map(state, (file) => {
                 if(file.id == action.payload.data.path){
                     file.active = true;
                 }
                 return file;
            });
    }
    return state;
}