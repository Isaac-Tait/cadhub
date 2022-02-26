export const schema = gql`
    type Result {
        id: ID!,
        title: String!,
        description: String!,
        code: String!,
    }

    type Query {
        search(query: String!): [Result!]! @skipAuth
    }
`