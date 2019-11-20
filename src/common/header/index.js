import React from 'react';
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList, SearchInfoItem} from './headerCss';
import {connect} from 'react-redux';

import  {actionCreators} from './store';

class Header extends React.Component {

    renderListArea () {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        熱門搜索
                        <SearchInfoSwitch>換一個</SearchInfoSwitch>
                    </SearchInfoTitle>
    
                    <SearchInfoList>
                        {
                            this.props.list.map((item) => {
                            return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                            })
                        }
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render () {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首頁</NavItem>
                    <NavItem className="left">下載App</NavItem>
                    <NavItem className="right">登入</NavItem>
                    <NavItem className="right"><i className="icofont-font"></i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            >        
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ? 'icofont icofont-search' : 'icofont-search'}></i>
                        {this.renderListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing"><i className="icofont-quill-pen"></i> 寫文章</Button>
                    <Button className="reg">註冊</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list'])
        // focused: state.get('header').get('focused')
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus () {
            dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);