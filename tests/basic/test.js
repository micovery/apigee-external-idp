const assert = require('assert');
const axios = require('axios');
const env = require('../active-resources/env');
const qs = require('querystring');
const chai = require('chai');
var should = chai.should();


describe('OAuth Basic Test', function() {
    describe('client credentials', function() {
        it('Get token', async function() {
            this.timeout(0);

            let response = await axios({
                method: 'post',
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                url: `${env.base_url}/${env.oauth_proxy_basepath}/token`,
                data: qs.stringify({
                    'grant_type': 'client_credentials',
                    'client_id': `${env.client_id}`,
                    'client_secret': `${env.client_secret}`,
                    'scope': `test`
                })
            });

            should.exist(response);
            should.exist(response.status);
            response.status.should.equal(200);

            should.exist(response.data);
            response.data.should.property('access_token');
            response.data.should.property('token_type');
            response.data.should.property('expires_in');
            response.data.should.property('scope');
        });
    });
});