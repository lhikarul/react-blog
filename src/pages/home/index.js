import React from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeRight,
    HomeLeft
} from './style';

class Home extends React.Component {
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
            </HomeWrapper>
        )
    }
}

export default Home;