import typed from '../actions/types';
import types from '../actions/types';

const DEFAULT_STATE ={
    all:[], 
    single: {}
};


export default (state=DEFAULT_STATE, action)=>{
    switch(action.type){
        case types.GET_LIST_DATA:
            console.log('GET LIST DATA ACTION:', action);
            return {...state, all: action.payload.data.todos};
        case types.GET_SINGLE_ITEM:
        case types.TOGGLE_COMPLETE:
                console.log('TOGGLE COMPLETE ACTION:', action);
                return {...state, single: action.payload.data.todo};
        default:
        return state;
    }
}
