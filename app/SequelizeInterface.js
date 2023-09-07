

class SequelizeInterface {
    constructor(models){
        this.models = models
    }

    async getUsers(){
        return this.models.Users.findAll()
    }

    async getUserById(userId){
        return this.models.Users.findByPk(userId)
    }

    async createUser(userData){
        return this.models.Users.create(userData)
    }

    async updateUser(userId, userData){
        return this.models.Users.update(userData, {
            where:{
                userId: userId
            }
        })
    }

    async deleteUser(userId){
        return this.models.Users.destroy({
            where: {
                userId: userId
            }
        })
    }


    async getTransactions(){
        return this.models.Transactions.findAll()
    }

    async getTransactionById(transId){
        return this.models.Transactions.findByPk(transId)
    }

    async createTransaction(transData){
        return this.models.Transactions.create(transData)
    }

    async updateTransaction(transId, transData){
        return this.models.Transactions.update(transData, {
            where:{
                transId: transId
            }
        })
    }

    async deleteTransaction(transId){
        return this.models.Transactions.destroy({
            where: {
                transId: transId
            }
        })
    }

}