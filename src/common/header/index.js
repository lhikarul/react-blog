import React from 'react';
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList, SearchInfoItem} from './headerCss';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import  {actionCreators} from './store';
import  {actionCreators as loginActionCreators} from '../../pages/login/store';

class Header extends React.Component {

    renderListArea () {

        const {focused, list, page,totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();

        const pageList = [];

        for (let i = (page - 1) * 3; i < page * 3; i++) {
            pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>)
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo>
                    <SearchInfoTitle 
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        熱門搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage, this.spinIcon)}><i ref={(icon) => this.spinIcon = icon} className="fas fa-circle-notch"></i>換一個</SearchInfoSwitch>
                    </SearchInfoTitle>
    
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render () {
        const {focused, list , login, handleLogout, handleInputFocus,handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo  />
                </Link>
                <Nav>
                    <NavItem className="left active">首頁</NavItem>
                    <NavItem className="left">下載App</NavItem>
                    {
                        login   ? 
                                    <NavItem onClick={handleLogout} className="right">登出</NavItem> 
                                : 
                                    <Link to='/login'><NavItem className="right">登入</NavItem></Link>
                    }
                    <NavItem className="right"><i className="icofont-font"></i></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            >        
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused ? 'icofont icofont-search' : 'icofont-search'}></i>
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
        list: state.getIn(['header', 'list']),
        login: state.getIn(['login', 'login']),
        totalPage: state.getIn(['header', 'totalPage']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn'])
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleInputFocus (list) {
            (list.size === 0) &&  dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur () {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage (page,totalPage,spin) {
            var originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            if (originAngle) {
                originAngle = parseInt(originAngle,10)
            }else {
                originAngle = 0;
            }

            spin.style.transform = `rotate(${originAngle + 360}deg)`;

            if (page + 1 < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
           
        },
        handleLogout () {
            dispatch(loginActionCreators.logout())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);