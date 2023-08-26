interface DeleteUserUseCaseProps {
	deleteUserByEmail: (email: string) => Promise<unknown>;
}

export { DeleteUserUseCaseProps };
