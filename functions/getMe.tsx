import { User } from '../types';

export const getMe = async (sdk: any, session: any): Promise<User> => {
    console.log(session);
    if (!session)
        return null;

    const { me: { id, name, type, email, balance } } = await sdk.me();
    return ({
        name: session.user.name,
        id,
        image: session.user.image,
        type,
        balance
    });
};
