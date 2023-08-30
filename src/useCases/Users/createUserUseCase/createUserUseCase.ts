import { User } from '@prisma/client';
import { dataBase } from 'dataBase/dataBase';
import { UserProps } from 'interfaces/types/UserProps';
import { CreateUserUseCaseProps } from 'interfaces/useCases/users/CreateUserUseCaseProps';
import { CreateUserUseCaseProps } from 'interfaces/useCases/CreateUserUseCaseProps';
import { hashPassword } from 'middlewares/hashPassword';

class CreateUserUseCase implements CreateUserUseCaseProps {
	public async createUser({
		email,
		password,
		userName,
	}: UserProps): Promise<User> {
		const userPassword = await hashPassword(String(password));

		const userCreated = await dataBase.user.create({
			data: {
				userName: String(userName),
				password: String(userPassword),
				email: String(email),
			},
		});

		return userCreated;
	}
}

export { CreateUserUseCase };
