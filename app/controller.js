module.exports =  (utility) =>{

    async function hello(req, res){
        console.log('Hello World!')
        res.send('Hello World!')
    }

    return {
        hello
    }

}