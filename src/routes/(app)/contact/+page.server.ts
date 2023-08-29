import { apiStructure } from '$lib/utils/apiStructure.js';
import { fail } from '@sveltejs/kit';
import { type z, type AnyZodObject, ZodError } from 'zod';
import { prisma } from '$lib/server/prismaClient.js';
import type { Actions } from './$types';
import { settings } from '$lib/utils/settings';

const getFormData = <Validation extends AnyZodObject>(data: FormData) => {
	const formData: Partial<z.infer<Validation>> = {};
	for (const [key, value] of data.entries()) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(formData as any)[key] = value;
	}
	return formData;
};

export const actions: Actions = {
	default: async ({ request }) => {
		// TODO log the user in
		const zodValidation = apiStructure.contact.contactForm.validation;
		const data = await request.formData();
		const formData = getFormData<typeof zodValidation>(data);
		let parsedData: z.infer<typeof zodValidation> | undefined;
		try {
			parsedData = zodValidation.parse(formData);
		} catch (error) {
			if (error instanceof ZodError) {
				const field = error.issues[0].path[0];
				const errorMessage = error.issues[0].message;
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				const ex = { [field]: (formData as any)[field], errorMessage };
				return fail(400, ex);
			}
		}

		try {
			if (parsedData) {
				await prisma.contact.create({
					data: {
						appName: settings.appName,
						contactName: parsedData.name,
						email: parsedData.email,
						message: parsedData.message
					}
				});
				return { success: true };
			}
		} catch (error) {
			console.log(error);
		}

		return fail(400, { errorMessage: 'Something went wrong' });
	}
};
