import { dataBase } from "dataBase/dataBase";
import { compare } from "bcrypt";
import { GenerateToken } from "providers/generateToken";


class AuthUserUseCase {
    private async execute(email: string, password: string): Promise<string> {
        const userAlreadyExists = await dataBase.user.findFirst({
            where: {
                email: email,
            }
        })

        if (!userAlreadyExists) {
            throw new Error("User not exist!");
        }

        const passwordMatch = await compare(password, userAlreadyExists.password);

        if (!passwordMatch) {
            throw new Error("User or password incorrect!");
        }

        const generateTokenProvider = new GenerateToken(userAlreadyExists.id);

        const token = await generateTokenProvider.generateToken();

        return token;
    }

    get authUser() {
        return this.execute;
    }
}

export { AuthUserUseCase };