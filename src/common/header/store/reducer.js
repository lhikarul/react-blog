import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    list: []
})

export default (state = defaultState, action) => {
    
    if (action.type === actionTypes.SEARCH_BLUR) {
        // immutable 物件的 set 方法會結合之前 immutable 物件的值和設置的值，返回一個全新的物件
        return state.set('focused', false);
    }

    if (action.type === actionTypes.SEARCH_FOCUS) {
        return state.set('focused', true);
    }

    if (action.type === actionTypes.CHANGE_LIST) {
        return state.set('list', action.data);
    }

    return state;

}
