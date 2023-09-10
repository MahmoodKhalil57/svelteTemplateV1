import type { APIType } from '$api/utils/ApiUtils.type.server';
import { prisma } from '$api/clients/prisma.server';
import { settings } from '$lib/settings/portfolioInfo';
import { adminProcedure } from '$api/utils/middleware.server';

export default {
	contactForm: async ({ ctx, input }) => {
		const { adminCtx } = await adminProcedure(ctx);

		await prisma.contact.create({
			data: {
				appName: settings.appName,
				contactName: input.name,
				email: input.email,
				message: input.message
			}
		});
		return { success: true, is_admin: adminCtx.is_admin };
	}
} satisfies APIType['contactRouter'];
