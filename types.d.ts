import { UserType } from './generated/graphql';

interface User {
    name: string
    image: string
    id: string
    type: UserType
    balance?: number
}


interface Session {
    user?: {
        email: string
        name: string
        image: string
    }
    token?: string
}

interface Property {
    id: string
    slug: string
    expense: number
    remainingExpense: number
    visits: number
    bounty: number
    title: string
    state: string
    city: string
    costType: CostType
    costValue: number
    owner: {
        name: string
        phone: string
    }
    images: Array<{ url: string, previewUrl: string }>
    description: string
    featured: boolean
}
