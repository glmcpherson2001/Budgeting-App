
const appPath = './'

const utility = require(`${appPath}/utility`)
const router = require(`${appPath}/routes`)()
const app = require(`${appPath}/server`)(router)

try {
    const server = app.listen(process.env.APP_PORT, () => {
        console.log(`Server is listening on ${server.address().port}`)
    })
    
} catch (error) {
    console.error('Server Failed to Start: ', error)
}