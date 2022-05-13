const usersCases = {
    description: '@userCases | Users endpoint test cases',
    method: 'GET',
    path: '/users',
    positive: {
        description:'Positive Testing',
        getUsers: 'As a User, I should be able to get list of all users',
        getUserDetail: 'As a User, I should be able to get details of first user',
        getUserPosts: 'As a User, I should be able to get all posts of the first user'
    },
    negative: {
        description: 'Negative Testing',
        notExistUser: 'As a User, I should Not be able to get details of a not exist user'
        
    }
}

module.exports = {
    usersCases
}