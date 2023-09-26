import { Request, Response } from 'express';
import { AuthUserUseCase } from './authUserUseCase';

class AuthUserController {

    private async handle(request: Request, response: Response) {

        const { email, password } = request.body;

        const authUserUseCase = new AuthUserUseCase();
        // Resolve
        try {
            const token = await authUserUseCase.authUser(email, password);

            response.status(200).send({
                token: token,
                status: 'success',
            })
        } catch (error) {
            console.log(error);
            response.status(500).send({
                message: 'Failed to authenticate',
                status: 'error',
            })
        }
    }

    get login() {
        return this.handle;
    }
}

export { AuthUserController };