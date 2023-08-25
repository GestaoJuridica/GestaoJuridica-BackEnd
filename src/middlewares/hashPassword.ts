import { hash } from 'bcrypt';

export async function hashPassword(password: string): Promise<string> {
	const saltRounds = 10;
	try {
		const hashPassword = await hash(password, saltRounds);
		return hashPassword;
	} catch (error) {
		throw new Error(String(error));
	}
}
