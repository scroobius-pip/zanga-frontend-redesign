import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql'

export default (token: string = '') => {
    const client = new GraphQLClient("https://api.myzanga.com/graphql", {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const sdk = getSdk(client)
    return sdk

}
