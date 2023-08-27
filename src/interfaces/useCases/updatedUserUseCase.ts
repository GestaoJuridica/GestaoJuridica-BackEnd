interface UpdatedUserUseCaseProps {
	updateduser: (id: string, userName: string) => Promise<unknown>;
}

export { UpdatedUserUseCaseProps };
