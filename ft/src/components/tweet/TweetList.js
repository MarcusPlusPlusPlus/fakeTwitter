import React from 'react'
import { FlatList } from "react-native"
import PropTypes from 'prop-types'
import TweetItem from "./Tweet"

// const TweetList = ({ tweets }) => (
//   <ul>
//     { console.log('List of all tweets',tweets) }
//     { tweets.map(tweet => <TweetItem key={tweet.id} {...tweet}/>) }
//   </ul>
// )

const _keyExtractor = (item, index) => item.id
const _renderElement = ({ item }) => (
  <div>
    <Text>{item.profile}</Text>
    <Text>{item.data}</Text>
  </div>
)

const TweetList = ({tweets}) => (
  <FlatList
    data={tweets}
    renderItem={this._renderElement}
    keyExtractor={this._keyExtractor}
  />
)


TweetList.propTypes = {
    tweets: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        data: PropTypes.string.isRequired,
        profile: PropTypes.string.isRequired,
        profileId: PropTypes.string,
        time: PropTypes.string.isRequired
    }))
}
export default TweetList
