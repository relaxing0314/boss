import React from 'react'
import {Link,Route,Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Button} from 'antd-mobile'

import {logout} from './redux/actions'

import App from './App'
import My from './views/my/my'

@connect(
    state => state.auth,{
        logout
    }
)
class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const match = this.props.match
        const redirectToLogin = <Redirect to='/login'></Redirect>
        const app = (
            <div>
                {this.props.isAuth ? <Button type="primary" onClick={this.props.logout}>注销</Button> : null}
                <ul>
                    <li>
                        <Link to={`${match.url}`}>首页</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/my`}>My</Link>
                    </li>
                </ul>
                <Route path={`${match.url}`} exact component={App}></Route>
                <Route path={`${match.url}/my`} component={My}></Route>
            </div>
        )
        return this.props.isAuth ? app : redirectToLogin
    }
}

export default Dashboard