import axios from 'axios';
import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';

const changeHomeData = (result) => {
    return {
        type: actionTypes.CHANGE_HOME_DATA,
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList,
        articlePage: 0
    }
}

const addHomeList = (list,page) => ({
    type: actionTypes.ADD_ARTICLE_LIST,
    list: fromJS(list),
    nextPage: page
})

export const getMoreList = (page) => {
    return async (dispatch) => {
        const res = await axios.get('/api/homeList.json?page=' + page);
        dispatch(addHomeList(res.data.data, page + 1))
    }
}

export const getHomeInfo = () => {
    return async (dispatch) => {
        const res = await axios.get('/api/home.json');
        dispatch(changeHomeData(res.data.data))
    }
}