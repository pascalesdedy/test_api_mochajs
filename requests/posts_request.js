require('dotenv').config()
const supertest = require('supertest');
const api = supertest(process.env.BASE_URL);

const createPost = (payload) => api.post('/posts')
    .set('Content-Type', 'application/json')
    .send(payload)

const updatePost = (payload, postId) =>  api.put('/posts/' + postId)
    .set('Content-Type', 'application/json')
    .send(payload)

module.exports = {
    createPost,updatePost
}