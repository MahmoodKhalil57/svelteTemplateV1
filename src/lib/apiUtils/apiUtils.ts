import type { AnyZodObject } from 'zod';
import type { Routes, Procedures, FormStructure } from '$lib/apiUtils/ApiUtils.type';
import { apiStructure } from '$lib/settings/apiStructure';

const getFormStructure = <S extends { formStructure: FormStructure }>(scheme: S) => {
	return scheme['formStructure'] as (typeof scheme)['formStructure'];
};

export const getFormStructureWithRouteProcedure = <R extends Routes, P extends Procedures<R>>(
	route: R,
	procedure: P
) => {
	const scheme = apiStructure[route][procedure];
	const formStructure = getFormStructure(scheme);
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

const getZodValidation = <S extends { validation: AnyZodObject }>(scheme: S) => {
	return scheme['validation'] as (typeof scheme)['validation'];
};

export const getZodValidationWithRouteProcedure = <R extends Routes, P extends Procedures<R>>(
	route: R,
	procedure: P
) => {
	const scheme = apiStructure[route][procedure];
	const formStructure = getZodValidation(scheme);
	return formStructure;
};
