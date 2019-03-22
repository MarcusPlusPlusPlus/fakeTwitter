import { connect } from 'react-redux'

import TweetList from "../components/tweet/TweetList"

const mapStateToProps = state => ({
    tweets : state.tweets
})
const ListOfTweet = connect(
    mapStateToProps
)(TweetList)

export default ListOfTweet