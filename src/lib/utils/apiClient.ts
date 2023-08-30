import type { Routes, Procedures, FormStructure } from '$lib/utils/ApiStructure.type';

export const apiGet = async <R extends Routes, P extends Procedures<R>>(route: R, procedure: P) => {
	fetch(`/api/${route}/${String(procedure)}`, {
		method: 'GET',
		body: {
			name: 'name',
			email: 'email',
			message: 'message'
		}
	});
};
