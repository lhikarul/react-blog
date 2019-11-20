import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 58px;
    border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
    href: '/'
})`
    display: block;
    width: 100px;
    height: 56px;
    position: absolute;
    top: 0;
    left: 0;
    background: url(${logoPic});
    background-size: contain;
`

export const Nav = styled.div `
    box-sizing: border-box;
    margin: 0 auto;
    padding-right: 70px;
    width: 960px;
    height: 100%;
`

export const NavItem = styled.div `
    padding: 0 15px;
    line-height: 56px;
    font-size: 17px;
    color: #333;

    &.left {
        float: left;
    }

    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`

export const SearchWrapper = styled.div `
    position: relative;
    float: left;
    .slide-enter,.slide-exit {
        transition: all .2s ease-out;
    }
    .slide-enter-active {
        width: 240px;
    }
    .slide-exit-active {
        width: 160px;
    }
    .icofont-search {
        border-radius: 15px;
        width: 30px;
        line-height: 30px;
        position: absolute;
        right: 5px;
        bottom: 5px;
        text-align: center;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    box-sizing: border-box;
    margin-top: 9px;
    margin-left: 20px;
    border-radius: 19px;
    border: none;
    padding: 0 35px 0 20px;
    outline: none;
    width: 160px;
    height: 38px;
    background: #eee;
    color: #777;
    font-size: 14px;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
`

export const Addition = styled.div `
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`

export const Button = styled.div `
    float: right;
    margin-right: 20px;
    border: 1px solid #ec6149;
    border-radius: 19px;
    padding: 0 20px;
    margin-top: 9px;
    line-height: 38px;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`