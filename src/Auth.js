import React from 'react'
import {Redirect} from 'react-router-dom'
import {Button} from 'antd-mobile'

import {connect} from 'react-redux'

import {login} from './redux/actions'

@connect(
    state => state.auth,{
        login
    }
)
class Auth extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
                {this.props.isAuth ? <Redirect to='/dashboard'></Redirect> : null}
                <h2>暂无权限，请登录</h2>
                <Button type="primary" onClick={this.props.login}>to login</Button>
            </div>
        )
    }
}

export default Auth