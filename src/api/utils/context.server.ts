import type { Cookies } from '@sveltejs/kit';

export const cookiesWrapper = (
	cookies: Cookies | Map<string, string> = new Map<string, string>()
) => {
	return {
		get: (name: string) => cookies.get(name),
		set: (name: string, value: string) => cookies.set(name, value)
	};
};

export const getContext = (cookies: Cookies) => {
	return {
		cookies: cookiesWrapper(cookies)
	};
};
