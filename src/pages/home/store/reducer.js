// import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: 'React.js',
            imgUrl: 'https://react-cn.github.io/react/img/logo.svg'
        },
        {
            id: 2,
            title: 'Vue.js',
            imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vue.png/215px-Vue.png'
        }
    ]
})

export default (state = defaultState, action) => {

    switch(action.type) {

        default:
            return state;
    }
}
