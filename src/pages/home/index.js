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
                    <img className="banner-img" src="https://previews.123rf.com/images/gmast3r/gmast3r1711/gmast3r171101496/90835439-happy-new-year-2018-horizontal-banner-with-chinese-lanterns-and-dog-decoration-design-vector-illustr.jpg" alt=""/>
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