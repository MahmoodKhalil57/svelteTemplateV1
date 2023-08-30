import { z, type AnyZodObject } from 'zod';
import type { Routes, Procedures, FormStructure } from '$lib/utils/ApiStructure.type';

export enum InputTypeEnum {
	TEXT,
	EMAIL,
	TEXTAREA
}

export const apiStructure = {
	contact: {
		contactForm: {
			formStructure: [
				[{ id: 'name', label: 'Name', type: InputTypeEnum.TEXT, placeHolder: 'Your name' }],
				[{ id: 'email', label: 'Email', type: InputTypeEnum.EMAIL, placeHolder: 'Your name' }],
				[
					{
						id: 'message',
						label: 'Message',
						type: InputTypeEnum.TEXTAREA,
						placeHolder: 'Your name'
					}
				]
			],
			validation: z.object({
				name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
				email: z.string().email({ message: 'Invalid Email' }),
				message: z
					.string()
					.min(10, { message: 'Message must be at least 10 characters long' })
					.max(500, { message: 'Message must be less than 500 characters long' })
			}) satisfies AnyZodObject
		}
	}
} as const;

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
