import type { APIType } from '$lib/apiUtils/ApiUtils.type';
import { prisma } from '$lib/server/prismaClient.js';
import { settings } from '$lib/settings/portfolioInfo';

export default {
	contactForm: async ({ ctx, input }) => {
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
} satisfies APIType['contactRouter'];
