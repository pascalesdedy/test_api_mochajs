const { expect } = require('chai');
const { createPost,updatePost } = require('../requests/posts_request');
const { postPayload, updatePostPayload } = require('../data/posts_payload');
const { postsCases } = require('../testcases/posts_testcases');
const notExistPostId = '99999'

describe(`${postsCases.description} | ${postsCases.method} | ${postsCases.path}`, () => {
	describe(`${postsCases.positive.description}`, () => {
		it(`${postsCases.positive.createUser}`, async () => {
			const postsResponse = await createPost(postPayload);
			expect(postsResponse.status).to.equal(201, postsResponse.body.message);
			expect(postsResponse.body.userId).to.equal(20, postsResponse.body.message);
			expect(postsResponse.body.title).to.equal('Sample Post', postsResponse.body.message);
			expect(postsResponse.body.body).to.equal('This is sample post for Automated Testing using mocha chai', postsResponse.body.message);
		});
		it(`${postsCases.positive.updateUser}`, async () => {
			const postsResponse = await updatePost(updatePostPayload,1);
			expect(postsResponse.status).to.equal(200, postsResponse.body.message);
			expect(postsResponse.body.userId).to.equal(100, postsResponse.body.message);
			expect(postsResponse.body.id).to.equal(1, postsResponse.body.message);
			expect(postsResponse.body.title).to.equal('UPDATED - Sample Post', postsResponse.body.message);
			expect(postsResponse.body.body).to.equal('UPDATED - This is sample post for Automated Testing using mocha chai', postsResponse.body.message);
		});
	});
	describe(`${postsCases.negative.description}`, () => {
		it(`${postsCases.negative.notExistUser}`, async () => {
			const postsResponse = await updatePost(updatePostPayload,notExistPostId);
			expect(postsResponse.status).to.equal(500, postsResponse.body.message);
		});
	});
});