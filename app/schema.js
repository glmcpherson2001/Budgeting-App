const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLNonNull, GraphQLInt, GraphQLFloat } = require('graphql');

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: {type: GraphQLNonNull(GraphQLInt)},
        email: {type: GraphQLNonNull(GraphQLString)},
        password: {type: GraphQLNonNull(GraphQLString)},
        createdAt: {type: GraphQLNonNull(GraphQLString)},
        updatedAt: {type: GraphQLNonNull(GraphQLString)}
    })
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
    })
})


module.exports = {UserType, TransactionType}