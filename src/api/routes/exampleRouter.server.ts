import type { APIType } from '$api/utils/ApiUtils.type.server';

export default {
	contactForm: async (input) => {
		return { success: true };
	}
} satisfies APIType['exampleRouter'];
