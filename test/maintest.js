// var assert = require('assert');
// describe('Array', function () {
//     describe('#indexOf()', function () {
//         it('should return -1 when the value is not present', function () {
//             assert.equal([1, 2, 3].indexOf(4), -1);
//         });
//     });
// });

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = 'https://swdnodeappbuild.azurewebsites.net/';
let should = chai.should();
let expect = require("expect.js");

chai.use(chaiHttp);

describe('/GET ', () => {
    it('it should GET the main page and check the Express header', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                // console.log(res);
                res.should.have.status(200);
                res.text.should.be.a('string');
                expect(res.text).to.have.string("<h1>Express</h1>");
                done();
            });
    });
});