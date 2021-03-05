import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/graphql'

export default (token: string = '') => {
    const client = new GraphQLClient("https://myzanga-api.vercel.app/graphql", {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const sdk = getSdk(client)
    return sdk

}
