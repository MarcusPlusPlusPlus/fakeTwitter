const tweets = (state=[], action) => {
    switch(action.type) {
        case "ADD_TWEET":
            return([
                ...state,
                {
                    id: action.id,
                    data: action.text,
                    profile: action.people.login,
                    profileId: action.people.id,
                    time: action.updatedAt
                }
            ])

        default: 
            return(state)
    }
}

export default tweets
