import React from 'react';
import {connect} from 'react-redux';
import {LoginWrapper, LoginBox, Input, Button} from './style';

class Login extends React.Component {

    render () {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="帳號"></Input>
                    <Input placeholder="密碼"></Input>
                    <Button>登入</Button>
                </LoginBox>
            </LoginWrapper>
        )
    }
}

const mapState = (state) => ({

})

const mapDispatch = (dispatch) => ({

})


export default connect(mapState,mapDispatch)(Login);