import { User } from '@prisma/client';
import { UserProps } from 'interfaces/types/UserProps';

interface CreateUserUseCaseProps {
	createUser: ({ email, password, userName }: UserProps) => Promise<User>;
}

export { CreateUserUseCaseProps };
