import z from 'zod';

const User = {
	userName: z
		.string()
		.min(3, { message: 'This name is invalid, but is must low' })
		.max(15, { message: 'This name is invalid, but is must big' }),
	email: z.string().email().min(3, { message: 'This email is invalid' }),
	password: z
		.string()
		.min(8, { message: 'This password is invalid' })
		.max(254, { message: 'This password is invalid' }),
};

type UserProps = typeof User;

export { UserProps };
