const { expect } = require('chai');
const { getUsers, getUserDetail, getUserPosts } = require('../requests/users_request');
const { usersCases } =require('../testcases/users_testcases')
const notExistUserId = '9999999'

describe(`${usersCases.description} | ${usersCases.method} | ${usersCases.path}`, () => {
	describe(`${usersCases.positive.description}`, () => {	
		it(`${usersCases.positive.getUsers}`, async () => {
			const usersResponse = await getUsers();
			expect(usersResponse.status).to.equal(200, usersResponse.body.message);
        	expect(usersResponse.body.length).to.equal(10,usersResponse.body.message);
		});
    	it(`${usersCases.positive.getUserDetail}`, async () => {
			const usersResponse = await getUserDetail('1');
			expect(usersResponse.status).to.equal(200, usersResponse.body.message);
        	expect(usersResponse.body.id).to.equal(1, usersResponse.body.message);
		});
    	it(`${usersCases.positive.getUserPosts}`, async () => {
			const usersResponse = await getUserPosts('1');
			expect(usersResponse.status).to.equal(200, usersResponse.body.message);
        	expect(usersResponse.body.length).to.equal(10,usersResponse.body.message);
		});
	});
	describe(`${usersCases.negative.description}`, () => {	
		it(`${usersCases.negative.notExistUser}`, async () => {
			const usersResponse = await getUserDetail(notExistUserId);
			expect(usersResponse.status).to.equal(404, usersResponse.body.message);
		});
	});
});
