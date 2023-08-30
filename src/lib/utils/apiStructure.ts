import { z, type AnyZodObject } from 'zod';
import type { Routes, ApiStructure } from '$lib/components/form/inputType';

export enum InputTypeEnum {
	TEXT,
	EMAIL,
	TEXTAREA
}

export const apiStructure = {
	contact: {
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
	}
} as const;

export const getFormStructure = <R extends Routes, P extends keyof ApiStructure[R]>(
	route: R,
	procedure: keyof P
) => {
	// @ts-expect-error type works but ts doesn't like it
	type FormStructure = (typeof apiStructure)[R][P]['formStructure'];
	// @ts-expect-error call works but ts doesn't like it
	return apiStructure[route][procedure]['formStructure'] as FormStructure;
};
