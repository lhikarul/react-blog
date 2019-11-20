import React from 'react';
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoList, SearchInfoItem} from './headerCss';
import {connect} from 'react-redux';

import  {actionCreators} from './store';

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
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage)}>換一個</SearchInfoSwitch>
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
        const {focused,handleInputFocus,handleInputBlur} = this.props;
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
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={focused ? 'focused' : ''}
                                onFocus={handleInputFocus}
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
        totalPage: state.getIn(['header', 'totalPage']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn'])
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
        },
        handleMouseEnter () {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave () {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage (page,totalPage) {
            if (page + 1 < totalPage) {
                dispatch(actionCreators.changePage(page + 1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);