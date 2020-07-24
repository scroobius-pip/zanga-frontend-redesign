interface User {
    username: string
    image: string
}


interface Session {
    user?: {
        email: string
        name: string
        image: string
    }
}