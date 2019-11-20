import React from 'react';
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './headerCss';

class Header extends React.Component {

    constructor(props) {
        super (props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur  = this.handleInputBlur.bind(this)
    }

    handleInputBlur () {
        this.setState({
            focused: false
        })
    }

    handleInputFocus () {
        this.setState({
            focused: true
        })
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
                            in={this.state.focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch 
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            >        
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused ? 'icofont icofont-search' : 'icofont-search'}></i>
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

export default Header;