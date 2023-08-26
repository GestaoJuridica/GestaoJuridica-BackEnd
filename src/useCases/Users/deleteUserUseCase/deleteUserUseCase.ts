import { dataBase } from 'dataBase/dataBase';
import { DeleteUserUseCaseProps } from 'interfaces/useCases/users/deleteUserUseCaseProps';

class DeleUserUseCase implements DeleteUserUseCaseProps {
	public async deleteUserByEmail(email: string): Promise<unknown> {
		const userDeleted = await dataBase.user.findFirst({
			where: {
				email: email,
			},
		});
		return userDeleted;
	}
}

export { DeleUserUseCase };
