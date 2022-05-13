const postPayload = {
    "userId" : 20,
    "id" : 221,
    "title" : "Sample Post",
    "body": "This is sample post for Automated Testing using mocha chai"
};
const updatePostPayload = {
    "userId" : 100,
    "id" : 1,
    "title" : "UPDATED - Sample Post",
    "body": "UPDATED - This is sample post for Automated Testing using mocha chai"
};

module.exports = {
    postPayload, updatePostPayload
}