import { createStackNavigator } from "react-navigation"
import ftApp from "./reducers"

import HomePage from "./components/HomePage"

const AppNav = createStackNavigator({
    Home: { screen: HomePage }
  }, {initialRouteName: "Home"})


export default AppNav