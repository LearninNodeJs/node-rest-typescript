import server from '../server'
import * as chai from 'chai'
import chaiHttp = require("chai-http")
import "mocha"

chai.use(chaiHttp);
const expect = chai.expect;

describe('Testing API Calls',()=>{
    it('it should return  a response from the api',()=>{
        return chai.request(server).get('/')
            .then(res=>{
                chai.expect(res.text).to.eql("Get Working Successfully")
            })
    })
})
