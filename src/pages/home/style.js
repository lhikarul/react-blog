import styled from 'styled-components';

export const HomeWrapper = styled.div`
    margin: 0 auto;
    width: 960px;
    overflow: hidden;
`

export const HomeLeft = styled.div`
    margin-left: 15px;
    padding-top: 30px;
    width: 625px;
    float: left;
    .banner-img {
        width: 625px;
        height: 270px;
    }
`

export const HomeRight = styled.div`
    width: 240px;
    float: right;
`

// Topic
export const TopicWrapper = styled.div`
    margin-left: -10px;
    padding: 20px 0 10px 0;
    overflow: hidden;
`
 
export const TopicItem = styled.div`
    margin-bottom: 18px;
    margin-left: 18px;
    border-radius: 4px;
    padding-right: 10px;
    border: 1px solid #dcdcdc;
    float: left;
    height: 32px;
    line-height: 32px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    .topic-pic {
        margin-right: 10px;
        display: block;
        float: left;
        width: 32px;
        height: 32px;
    }
`