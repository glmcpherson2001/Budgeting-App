const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLFloat, GraphQLList } = require('graphql');


module.exports = (DBInterface) => {



    const UserType = new GraphQLObjectType({
        name: 'User',
        fields: () => ({
            id: {type: GraphQLNonNull(GraphQLInt)},
            email: {type: GraphQLNonNull(GraphQLString)},
            password: {type: GraphQLNonNull(GraphQLString)},
            createdAt: {type: GraphQLNonNull(GraphQLString)},
            updatedAt: {type: GraphQLNonNull(GraphQLString)}
        }),
        resolve: () => {
            return DBInterface.getUsers()
        }
    })

    const TransactionType = new GraphQLObjectType({
        name: 'Transaction',
        fields: () => ({
            id: {type: GraphQLNonNull(GraphQLInt)},
            name: {type: GraphQLNonNull(GraphQLString)},
            price: {type: GraphQLNonNull(GraphQLFloat)},
            category: {type: GraphQLNonNull(GraphQLString)},
            subCategory: {type: GraphQLString},
            createdAt: {type: GraphQLNonNull(GraphQLString)},
            updatedAt: {type: GraphQLNonNull(GraphQLString)}
        }),
        resolve: (parent, args) => {
            
        }
    })

    const RootQuery = new GraphQLObjectType({
        name: 'RootQuery',
        fields: {
            User: {
                type: UserType,
                args: { id: { type: GraphQLInt }},
                resolve: (parent, args) => {
                    // TODO
                }

            },
            Transaction: {
                type: TransactionType,
                args: { id: { type: GraphQLInt }},
                resolve: (parent, args) => {
                    // TODO
                }
            },
            Users: {
                type: GraphQLList(UserType),
                resolve: () => {}
            },
            Transactions: {
                type: GraphQLList(TransactionType),
                resolve: () => {}
            }
        }
    })

}