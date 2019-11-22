import styled from 'styled-components';

export const LoginWrapper = styled.div`
    position: absolute;
    top: 56px;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 0;
    background: #eee;
`

export const LoginBox = styled.div`
    margin: 100px auto;
    padding-top: 20px;
    width: 400px;
    height: 180px;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
`

export const Input = styled.input`
    display: block;
    margin: 10px auto;
    padding: 0 10px;
    width: 200px;
    height: 30px;
    line-height: 30px;
    color: #777;
`

export const Button = styled.div`
    margin: 10px auto;
    border-radius: 15px;
    width: 200px;
    height: 30px;
    line-height: 30px;
    background: #3194d0;
    color: #fff;
    text-align: center;
`