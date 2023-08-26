    const router = require('express').Router()

    module.exports = (controller) => {
        router.get('/', controller.hello);

        return router
    }
    

    



