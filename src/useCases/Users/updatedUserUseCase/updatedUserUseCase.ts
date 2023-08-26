import { dataBase } from 'dataBase/dataBase';
import { UpdatedUserUseCaseProps } from 'interfaces/useCases/users/updatedUserUseCase';

class UpdatedUserUseCase implements UpdatedUserUseCaseProps {
	public async updateduser(id: string, userName: string): Promise<unknown> {
		const userUpdated = await dataBase.user.update({
			where: {
				id: id,
			},
			data: {
				userName: userName,
			},
		});

		return userUpdated;
	}
}

export { UpdatedUserUseCase };
