import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from "redux"
import { createAppContainer } from "react-navigation"

import AppNav from "./src/navigation"
import ftApp from "./src/reducers"

const Nav = createAppContainer(AppNav)
const store = createStore(ftApp)

export default class App extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <Nav />
            </Provider>
        )
    }
}
