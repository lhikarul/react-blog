import axios from "axios";
import * as actionTypes from './actionTypes';

const changeDetail = (title,content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
}) 

export const getDetail = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/detail.json');
        const result = res.data.data;
        dispatch(changeDetail(result.title, result.content));
    }
}