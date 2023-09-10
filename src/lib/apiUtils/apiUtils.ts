import type { Routes, Procedures, FormStructure } from '$api/utils/ApiUtils.type.server';
import { apiStructure } from '$lib/settings/apiStructure';

export const getFormStructureWithRouteProcedure = <R extends Routes, P extends Procedures<R>>(
	route: R,
	procedure: P
) => {
	const scheme = apiStructure[route][procedure];
	// @ts-expect-error ts I dont know what this error is even
	const formStructure = scheme['formStructure'] as (typeof scheme)['formStructure'];
	return formStructure;
};

export const getEmptyFormObject = <DynamicFormStructure extends FormStructure>(
	formStructure: DynamicFormStructure
) => {
	type FormObject = {
		[key in (typeof formStructure)[number][number]['id']]: string;
	};
	return formStructure.flat().reduce((acc, field) => {
		acc[field.id as keyof FormObject] = '';
		return acc;
	}, {} as FormObject) as FormObject;
};

export const getZodValidationWithRouteProcedure = <R extends Routes, P extends Procedures<R>>(
	route: R,
	procedure: P
) => {
	const scheme = apiStructure[route][procedure];
	// @ts-expect-error ts I dont know what this error is even
	const formStructure = scheme['validation'] as (typeof scheme)['validation'];
	return formStructure;
};
