import * as request from "supertest"
import * as  expect from "expect"
import server from "../server"

afterEach(()=>{
    server.close();
})

describe('GET / - a simple api endpoint', () => {
    it('it should return (200) on simple get request',async ()=>{
        const result = await request(server).get('/');
        expect(result.statusCode).toEqual(200);
    })
});