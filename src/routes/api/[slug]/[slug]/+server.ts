import type { RequestHandler } from './$types';
import { getZodValidationWithRouteProcedure } from '$lib/utils/apiStructure';
import type { Routes, Procedures } from '$lib/utils/ApiStructure.type';
import { fail, json } from '@sveltejs/kit';
import { type z, ZodError } from 'zod';
import { API } from '$lib/utils/apiRoot.server';

export const GET: RequestHandler = async ({ url, request }) => {
	let route: Routes | undefined;
	let procedure: Procedures<NonNullable<typeof route>> | undefined;
	let zodValidation: z.AnyZodObject | undefined;
	let parsedData: z.infer<ReturnType<typeof getZodValidationWithRouteProcedure>> | undefined;

	const pathArray = url.pathname.substring(1).split('/');
	if (pathArray.length === 3) {
		route = pathArray[1] as Routes;
		procedure = pathArray[2] as Procedures<typeof route>;
		zodValidation = getZodValidationWithRouteProcedure(route, procedure);
	}

	if (zodValidation) {
		const data = await request.json();
		try {
			parsedData = zodValidation.parse(data) as typeof parsedData;
		} catch (error) {
			if (error instanceof ZodError) {
				const errorMessage = error.issues[0].message;
				const ex = { errorMessage };
				throw fail(400, ex);
			}
		}
	}

	try {
		if (parsedData && route && procedure) {
			const givenProcedure = API[route][procedure];
			const response = givenProcedure(parsedData);
			return json(response);
		}
	} catch (error) {
		console.log(error);
	}

	throw fail(400, { errorMessage: 'Something went wrong' });
};