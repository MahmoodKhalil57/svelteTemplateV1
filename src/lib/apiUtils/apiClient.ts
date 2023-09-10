import type { Routes, Procedures, APIInput, APIOutput } from '$api/utils/ApiUtils.type.server';
import { getZodValidationWithRouteProcedure } from '$lib/apiUtils/apiUtils';
import { ZodError, type z } from 'zod';

export const apiGet = async <
	R extends Routes,
	P extends Procedures<R>,
	T extends APIInput<R, P> | undefined
>(
	route: R,
	procedure: P,
	payload: T,
	validate = false
) => {
	let err = { errorMessage: 'Something went wrong' };

	if (payload) {
		if (validate) {
			const zodValidation = getZodValidationWithRouteProcedure(route, procedure) as z.AnyZodObject;

			if (zodValidation) {
				try {
					payload = zodValidation.parse(payload) as T;
				} catch (error) {
					if (error instanceof ZodError) {
						const errorMessage = error.issues[0]?.message;
						if (errorMessage) {
							err = { errorMessage };
							return err;
						}
					}
				}
			}
		}

		if (!validate || payload) {
			const path = `/api/${String(route)}/${String(procedure)}`;
			const rawResponse = await fetch(path, {
				method: 'POST',
				body: JSON.stringify(payload)
			});

			const response = (await rawResponse.json()) as APIOutput<R, P>;
			return response;
		}
	}

	return err;
};
