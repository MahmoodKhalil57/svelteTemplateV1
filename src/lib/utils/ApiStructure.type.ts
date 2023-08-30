import type { ComponentProps } from 'svelte';
import type FormBuilder from '$lib/components/form/formBuilder.svelte';
import type { apiStructure, InputTypeEnum } from '$lib/utils/apiStructure';
import type { z } from 'zod';

export type Field = { id: string; label: string; type: InputTypeEnum; placeHolder?: string };
export type FormStructure = readonly (readonly Field[])[];

export type ApiStructure = typeof apiStructure;
export type Routes = keyof ApiStructure;
export type Procedures<R extends Routes> = keyof ApiStructure[R];

export type FormProps<R extends Routes, P extends Procedures<R>> = ComponentProps<
	FormBuilder<R, P>
>;

type ServerResponse = any;

export type APIType = {
	[R in Routes]: {
		[P in Procedures<Routes>]: ApiStructure[R][P] extends { [key: string]: unknown }
			? (args: z.infer<ApiStructure[R][P]['validation']>) => ServerResponse
			: never;
	};
};
