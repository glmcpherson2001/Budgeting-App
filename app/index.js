
const appPath = './app'

const utility = require(`${appPath}/utility`)
const controller = require(`${appPath}/controller`)(utility)
const router = require(`${appPath}/routes`)(controller)
const app = require(`${appPath}/server`)(router)

try {
    const server = app.listen(process.env.APP_PORT, () => {
        console.log(`Server is listening on ${server.address().port}`)
    })
    
} catch (error) {
    console.error('Server Failed to Start: ', error)
}