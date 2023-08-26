const request = require('supertest')
const utility = require('./../utility')
const controller = require('./../controller')(utility)
const router = require('./../routes')(controller)
const app = require('./../server')(router)

describe('GET /', () =>{
    it('response with "Hello World!"', async () => {
        console.log(app)
        const response = await request(app).get('/')
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World!');
    })

})