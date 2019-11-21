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
    width: 280px;
    float: right;
`

// ------------- Topic ----------------- //
export const TopicWrapper = styled.div`
    margin-left: -10px;
    border-bottom: 1px solid #dcdcdc;
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

// -------- List -------------- //
export const ListItem = styled.div `
    border-bottom: 1px solid #dcdcdc;
    padding: 20px 0;
    overflow: hidden;
    .pic {
        display: block;
        float: right;
        width: 125px;
        height: 100px;
    }
`

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        color: #333;
        font-size: 18px;
        font-weight: bold;
    }
    .desc {
        line-height: 24px;
        font-size: 13px;
        color: #999;
    }
`
// ---------- recommend ---------- //
export const RecommendWrapper =	styled.div`
	margin: 30px 0;
	width: 280px;
	
`;

export const RecommendItem = styled.div`
	width: 280px;
	height: 150px;
	background: url(${(props) => props.imgUrl});
    background-size: cover;
`;

// ----- writer ----- //
export const WriterWrapper = styled.div`
    border: 1px solid #dcdcdc;
    border-radius: 3px;
    width: 278px;
    height: 300px;
    line-height: 300px;
    text-align: center;
`

// ----- load more ------ //
export const LoadMore = styled.div`
    margin: 30px 0;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #a5a5a5;
    color: #fff;
    cursor: pointer;
    text-align: center;
`
// ----- backtop ----- //
export const BackTop = styled.div`
    border: 1px solid #ccc;
    position: fixed;
    right: 100px;
    bottom: 30px;
    width: 60px;
    line-height: 60px;
    cursor: pointer;
    text-align: center;
    font-size: 14px;
`