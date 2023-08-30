import type { APIType } from '$lib/utils/ApiStructure.type';
import { prisma } from '$lib/server/prismaClient.js';
import { settings } from '$lib/utils/settings';

export const API: APIType = {
	contact: {
		contactForm: async (input) => {
			await prisma.contact.create({
				data: {
					appName: settings.appName,
					contactName: input.name,
					email: input.email,
					message: input.message
				}
			});
			return { success: true };
		}
	}
};
