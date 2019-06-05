import { getUserByLoginAndPassword, IUser } from '@root/user-manager';
import tokenGenerator from '@root/tools/token-generator';

export default async function authUser(payload: {
    login: string;
    password: string;
}): Promise<string | null> {
    const user: IUser | null = await getUserByLoginAndPassword(payload.login, payload.password);

    if (user === null) {
        return null;
    }

    return tokenGenerator.generateToken(
        JSON.stringify({
            id: user.id,
            login: user.login,
        }),
    );
}
