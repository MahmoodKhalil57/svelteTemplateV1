import type { ComponentProps } from 'svelte';
import type FormBuilder from '$lib/components/form/formBuilder.svelte';
import type { apiStructure, InputTypeEnum } from '$lib/utils/apiStructure';

export type Field = { id: string; label: string; type: InputTypeEnum; placeHolder?: string };
export type FormStructure = readonly (readonly Field[])[];

export type FormProps<
	R extends keyof typeof apiStructure,
	P extends keyof (typeof apiStructure)[R]
> = ComponentProps<FormBuilder<R, P>>;

export type Routes = keyof typeof apiStructure;
export type ApiStructure = typeof apiStructure;
export type Procedures<R extends Routes> = keyof (typeof apiStructure)[R];
