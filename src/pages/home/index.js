import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {actionCreators} from './store';

import {
    HomeWrapper,
    HomeRight,
    HomeLeft,
    BackTop
} from './style';

class Home extends PureComponent {

    componentDidMount () {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.props.changeScrollToShow)
    }

    handleScrollTop () {
        window.scrollTo(0,0)
    }

    bindEvents () {
        window.addEventListener('scroll', this.props.changeScrollToShow)
    }

    render () {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="http://ichef.bbci.co.uk/images/ic/1248xn/p07lsjz1.jpg" alt=""/>
                    <Topic></Topic>
                    <List></List>
                </HomeLeft>
                <HomeRight>
                <Recommend></Recommend>
                <Writer></Writer>
                </HomeRight>
                {
                    this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到頂部</BackTop> : null
                }
            </HomeWrapper>
        )
    }
}

const mapState = (state) => ({
    showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => {
    return {
        changeHomeData () {
            dispatch(actionCreators.getHomeInfo())
        },
        changeScrollToShow () {
            if (document.documentElement.scrollTop > 100) {
                dispatch(actionCreators.toggleTopShow(true))
            }else {
                dispatch(actionCreators.toggleTopShow(false))
            }
        }
    }
}

export default connect(mapState,mapDispatch)(Home);