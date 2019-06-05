import { FormError } from '@gcp-libs/errors';
import getHash from '@root/tools/hasher';
import { handleLogin } from './tools';

export interface IUser {
    id: number;
    login: string;
    password: string;
    roles: number[];
}

const users: IUser[] = [
    { id: 1, login: handleLogin('Admin'), password: getHash('12345678'), roles: [] },
    { id: 2, login: handleLogin('SimpleUser'), password: getHash('12345678'), roles: [] },
    { id: 3, login: handleLogin('Test'), password: getHash('12345678'), roles: [] },
];

export async function getUserByLoginAndPassword(
    login: string,
    password: string,
): Promise<IUser | null> {
    const handledLogin: string = handleLogin(login);
    const hashedPassword: string = getHash(password);
    for (const user of users) {
        if (user.login === handledLogin && user.password === hashedPassword) {
            return user;
        }
    }

    return null;
}

export async function addUser(login: string, password: string): Promise<void> {
    const handledLogin: string = handleLogin(login);
    for (const user of users) {
        if (user.login === handledLogin) {
            throw new FormError({
                fieldErrors: {
                    login: [`Cannot create a user with with login "${login}"`],
                },
            });
        }
    }

    users.push({
        id: users.length + 1,
        login: handledLogin,
        password: getHash(password),
        roles: [],
    });
}
