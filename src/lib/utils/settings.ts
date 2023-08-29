import { env } from '$env/dynamic/public';

export const settings = {
	appName: env.PUBLIC_APP_NAME,
	shortName: env.PUBLIC_SHORT_NAME,
	fullName: env.PUBLIC_FULL_NAME,
	job: env.PUBLIC_JOB,
	descriptionLong: env.PUBLIC_DESCRIPTION_LONG,
	descriptionShort: env.PUBLIC_DESCRIPTION_SHORT,
	themes: {
		light: env.PUBLIC_LIGHT_THEME,
		dark: env.PUBLIC_DARK_THEME
	},
	links: {
		github: env.PUBLIC_GITHUB,
		linkedin: env.PUBLIC_LINKEDIN,
		instagram: env.PUBLIC_INSTAGRAM
	},
	email: env.PUBLIC_EMAIL,
	imageLink: env.PUBLIC_IMAGE_LINK
};
