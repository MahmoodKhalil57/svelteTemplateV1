import type { APIType } from '$lib/apiUtils/ApiUtils.type';

export default {
	contactForm: async (input) => {
		return { success: true };
	}
} satisfies APIType['exampleRouter'];
