import React from 'react';
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './headerCss';
import {connect} from 'react-redux';

const Header = (props) => {
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
                        in={props.focused}
                        timeout={200}
                        classNames="slide"
                    >
                        <NavSearch 
                            className={props.focused ? 'focused' : ''}
                            onFocus={props.handleInputFocus}
                            onBlur={props.handleInputBlur}
                        >        
                        </NavSearch>
                    </CSSTransition>
                    <i className={props.focused ? 'icofont icofont-search' : 'icofont-search'}></i>
                </SearchWrapper>
            </Nav>
            <Addition>
                <Button className="writing"><i className="icofont-quill-pen"></i> 寫文章</Button>
                <Button className="reg">註冊</Button>
            </Addition>
        </HeaderWrapper>
    )
}

const mapStateToProps = state => {
    return {
        focused: state.header.focused
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputBlur () {
            const action = {
                type: 'search_blur'
            };
            dispatch(action);
        },
        handleInputFocus () {
            const action = {
                type: 'search_focus'
            };
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);