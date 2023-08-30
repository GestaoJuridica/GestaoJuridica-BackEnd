import { dataBase } from 'dataBase/dataBase';
import { User } from '@prisma/client';
import { GetUSerUseCaseProps } from 'interfaces/useCases/users/GetUSerUseCaseProps';

import { GetUSerUseCaseProps } from 'interfaces/useCases/GetUSerUseCaseProps';

class GetUserUseCase implements GetUSerUseCaseProps {
	public async getAllUsers(): Promise<unknown[]> {
		const users = await dataBase.user.findMany({
			select: {
				email: true,
				userName: true,
				id: false,
				password: false,
			},
		});

		return users;
	}

	public async getUserByEmail(email: string): Promise<unknown> {
		const user = await dataBase.user.findFirst({
			where: {
				email: email,
			},
		});

		return user;
	}
}

export { GetUserUseCase };
