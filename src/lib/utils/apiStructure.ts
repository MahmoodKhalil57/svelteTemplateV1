import type { FormStructure } from '$lib/components/form/inputType';
import { z, type AnyZodObject } from 'zod';

// type ApiStructure = {
// 	[key: string]: {
// 		[key: string]: {
// 			formStructure: FormStructure;
// 			validation: AnyZodObject;
// 		};
// 	};
// };

export const apiStructure = {
	contact: {
		contactForm: {
			formStructure: [
				[{ id: 'name', label: 'Name', type: 'text', placeHolder: 'Your name' }],
				[{ id: 'email', label: 'Email', type: 'email', placeHolder: 'Your name' }],
				[{ id: 'message', label: 'Message', type: 'textarea', placeHolder: 'Your name' }]
			] satisfies FormStructure,
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
};
