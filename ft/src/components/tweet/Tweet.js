import React from 'react'
import PropTypes from 'prop-types'

const TweetItem = ({profile, time, data}) => {
    <li>
        <h2>{profile}</h2>
        <small>{time}</small>
        <hr />
        <p>{data}</p>
    </li>
}

TweetItem.PropTypes = {
    data: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    profile: PropTypes.string.isRequired,
    profileId: PropTypes.string
}

export default TweetItem
