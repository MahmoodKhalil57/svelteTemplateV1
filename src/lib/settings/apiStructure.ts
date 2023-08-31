import { z, type AnyZodObject } from 'zod';

export enum InputTypeEnum {
	TEXT,
	EMAIL,
	TEXTAREA
}

export const apiStructure = {
	contactRouter: {
		contactForm: {
			formStructure: [
				[{ id: 'name', label: 'Name', type: InputTypeEnum.TEXT, placeHolder: 'Your name' }],
				[{ id: 'email', label: 'Email', type: InputTypeEnum.EMAIL, placeHolder: 'Your name' }],
				[
					{
						id: 'message',
						label: 'Message',
						type: InputTypeEnum.TEXTAREA,
						placeHolder: 'Your name'
					}
				]
			],
			validation: z.object({
				name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
				email: z.string().email({ message: 'Invalid Email' }),
				message: z
					.string()
					.min(10, { message: 'Message must be at least 10 characters long' })
					.max(500, { message: 'Message must be less than 500 characters long' })
			}) satisfies AnyZodObject
		}
	},
	exampleRouter: {
		contactForm: {
			formStructure: [
				[{ id: 'test', label: 'Name', type: InputTypeEnum.TEXT, placeHolder: 'Your name' }]
			],
			validation: z.object({
				test: z.string().min(2, { message: 'Name must be at least 2 characters' })
			}) satisfies AnyZodObject
		}
	}
} as const;
