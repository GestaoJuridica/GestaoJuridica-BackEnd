import { sign } from 'jsonwebtoken'

class GenerateToken {
    private userId: string;

    constructor(userId: string) {
        this.userId = userId;
    }

    private async execute(): Promise<string> {
        const secretKey: string | undefined = process.env.SECRET_KEY

        const token = sign({}, String(secretKey), {
            subject: this.userId,
            expiresIn: "1day",
        })
        return token;

    };

    get generateToken() {
        return this.execute;
    }
}

export { GenerateToken };