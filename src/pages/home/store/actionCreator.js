import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeHomeData = (result) => {
    return {
        type: actionTypes.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
    }
}

export const getHomeInfo = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/home.json');
        dispatch(changeHomeData(res.data.data))
    }
}