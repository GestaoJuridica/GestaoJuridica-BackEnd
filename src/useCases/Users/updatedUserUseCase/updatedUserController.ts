import { Request, Response } from 'express';
import { UpdatedUserUseCase } from './updatedUserUseCase';

class UpdatedUserController {
	private async updated(request: Request, response: Response) {
		try {
			const { id } = request.params;
			const { userName } = request.body;

			if (!id) {
				response.status(400).send({
					message: 'Id is required',
					status: 'alert',
				});
			}

			if (!userName) {
				response.status(400).send({
					message: 'UserName is required',
					status: 'alert',
				});
			}

			const updatedUserUseCase = new UpdatedUserUseCase();
			const userUpdated = await updatedUserUseCase.updateduser(id, userName);

			response.status(200).send({
				message: 'Usuario updated',
				status: 'sucess',
				user: userUpdated,
			});
		} catch (error) {
			response.status(500).send({
				message: 'Internal Server Error',
				status: 'error',
			});
		}
	}

	get updatedUser() {
		return this.updated;
	}
}

export { UpdatedUserController };
