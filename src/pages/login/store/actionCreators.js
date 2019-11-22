import axios from 'axios';
import * as constants from './actionTypes';

const changeLogin = () => {
    return {
        type: constants.CHANGE_LOGIN,
        value: true
    }
}

export const logout = () => {
    return {
        type: constants.LOGOUT,
        value: false
    }
}

export const login = (account, password) => {
    return async (dispatch) => {
        const res = await axios.get('/api/login.json?account=' + account + '&password=' + password);
        const result = res.data.data;

        if (result) {
            dispatch(changeLogin());
        }else {
            alert('登入失敗');
        }
    }
}