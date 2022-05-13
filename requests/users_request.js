require('dotenv').config()
const supertest = require('supertest');
const api = supertest(process.env.BASE_URL);

const getUsers = () => api.get('/users')
    .set('Content-Type', 'application/json');

const getUserDetail = (userId) => api.get('/users/'+ userId)
    .set('Content-Type', 'application/json');

const getUserPosts = (userId)=> api.get('/users/'+ userId +'/posts')
    .set('Content-Type', 'application/json');

module.exports = {
    getUsers,getUserDetail,getUserPosts
}