import { browser } from '$app/environment';
import { settings } from '$lib/utils/settings';

export const load = async () => {
	if (browser) {
		const isDark = window.localStorage.getItem('theme')
			? window.localStorage.getItem('theme') === settings.themes.dark
			: window.matchMedia('(prefers-color-scheme: dark)').matches;

		if (isDark) {
			window.localStorage.setItem('theme', settings?.themes?.dark ?? '');
			window.document.documentElement.setAttribute('data-theme', settings?.themes?.dark ?? '');
		} else {
			window.localStorage.setItem('theme', settings?.themes?.light ?? '');
			window.document.documentElement.setAttribute('data-theme', settings?.themes?.light ?? '');
		}
	}
};
