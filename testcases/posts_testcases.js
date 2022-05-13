const postsCases = {
    description: '@postCases | Posts endpoint test cases',
    method: 'POST',
    path: '/posts',
    positive: {
        description:'Positive Testing',
        createUser: 'As a User, I should be able to create a post',
        updateUser: 'As a User, I should be able to Update a post',
    },
    negative: {
        description: 'Negative Testing',
        notExistUser: 'As a User, I should Not be able to update a not exist post'
    }
}

module.exports = {
    postsCases
}