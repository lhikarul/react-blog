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
    ],
    articleList: [
        {
            id: 1,
            title: 'Mental health in the workplace',
            desc: 'How small changes can make a big difference to people with mental health issues at work.',
            imgUrl: 'http://ichef.bbci.co.uk/images/ic/1920xn/p07txp4b.jpg'
        },
        {   
            id: 2,
            title: 'Why do people like sad music?',
            desc: 'What goes on in the brain and the body when we listen to Adele?',
            imgUrl: 'http://ichef.bbci.co.uk/images/ic/1248xn/p07t7yz4.jpg'
        },
        {
            id: 3,
            title: "Why's it called 'mother tongue'?",
            desc: 'Do we only learn language from our mother?',
            imgUrl: 'http://ichef.bbci.co.uk/images/ic/1248xn/p07s97v8.jpg'
        },
        {
            id: 4,
            title: "Is it a good idea to have a tattoo?",
            desc: 'Are you prepared to be the canvas for a painting that might last forever?',
            imgUrl: 'http://ichef.bbci.co.uk/images/ic/1248xn/p07r2sgf.jpg'
        },
        {
            id: 5,
            title: 'Working for free',
            desc: 'Internships: exploitation or valuable work experience?',
            imgUrl: 'http://ichef.bbci.co.uk/images/ic/1248xn/p07qc707.jpg'
        }
    ]
})

export default (state = defaultState, action) => {

    switch(action.type) {

        default:
            return state;
    }
}
