import * as React from "react"
import { View, Text } from "react-native"
import ListOfTweet from "../containers/ListofTweet"


export default class HomePage extends React.Component {

    static navigationOptions = { title: 'Home Page' }    

    componentWillMount() {
        fetch("https://clonetwitterapi.herokuapp.com/people").then(
            res => res.json().then(data => {
                console.log(data)
            }))
    }

    componentDidMount() {
        console.log("state", "component mounted !")
    }

    render() {
        return(
            <View>
                <Text>Home Page</Text>
                <ListOfTweet />
            </View>
        )
    }
}