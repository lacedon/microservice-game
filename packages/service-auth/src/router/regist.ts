import { addUser } from '@root/user-manager';

export default function registrUser(payload: { login: string; password: string }): Promise<void> {
    return addUser(payload.login, payload.password);
}
