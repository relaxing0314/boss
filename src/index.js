import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import reducers from './redux/reducer'

import Auth from './Auth'
import Dashboard from './Dashboard'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        reduxDevtools
    )
)

ReactDom.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/login" component={Auth}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Redirect to="/dashboard"></Redirect>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>), document.getElementById('root')
)