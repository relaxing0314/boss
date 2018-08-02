import React from 'react'

//引入connect
import {
    connect
} from 'react-redux'
//引入方法
import {
    Add,
    Remove,
    AddAsync
} from './redux/actions'

@connect(
    state => ({
        num:state.count
    }),{
        Add,
        Remove,
        AddAsync
    }
)
class App extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.num}</h2>
                <button onClick={this.props.Add}>to add</button>
                <button onClick={this.props.Remove}>to remove</button>
                <button onClick={this.props.AddAsync}>2000s后add</button>
            </div>
        )
    }
}

export default App