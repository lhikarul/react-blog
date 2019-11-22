import React from 'react';
import { Redirect } from 'react-router-dom';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import {LoginWrapper, LoginBox, Input, Button} from './style';

class Login extends React.Component {

    render () {
        const { loginStatus } = this.props;

        if (!loginStatus) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="帳號" ref={input => {this.account = input}}></Input>
                        <Input placeholder="密碼" type='password' ref={input => {this.password = input}}></Input>
                        <Button onClick={() => this.props.login(this.account, this.password)}>登入</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }else {
            return <Redirect to="/" />
        }

    }
}

const mapState = (state) => ({
    loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
    login (accountElement,passwordElement) {
        dispatch(actionCreators.login(accountElement.value, passwordElement.value))
    }
})


export default connect(mapState,mapDispatch)(Login);