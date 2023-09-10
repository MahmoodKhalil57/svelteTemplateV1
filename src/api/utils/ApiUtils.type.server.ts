import type { ComponentProps } from 'svelte';
import type FormBuilder from '$lib/components/form/formBuilder.svelte';
import type { apiStructure, InputTypeEnum } from '$lib/settings/apiStructure';
import type { API } from '$api/root.server';
import type { z } from 'zod';
import type { getContext } from '$api/utils/context.server';

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
			? (args: {
					ctx: ReturnType<typeof getContext>;
					input: z.infer<ApiStructure[R][P]['validation']>;
			  }) => ServerResponse
			: never;
	};
};

export type APIInput<R extends Routes, P extends Procedures<R>> =
	// @ts-expect-error ts doesnt like it but this works
	z.infer<ApiStructure[R][P]['validation']>;

export type APIOutput<R extends Routes, P extends Procedures<R>> = Awaited<
	// @ts-expect-error ts doesnt like it but this works
	ReturnType<(typeof API)[R][P]>
>;

export type PageConfig = {
	route: Routes;
	procedure: Procedures<Routes>;
};
