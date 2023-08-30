<script lang="ts" generics="R extends Routes, P extends keyof ApiStructure[R]">
	// @ts-nocheck
	// A lot of errors but things still work
	import { getFormStructure } from '$lib/utils/apiStructure';
	import FormElement from './formElement.svelte';
	import type { Routes, ApiStructure } from '$lib/components/form/inputType';

	export let route: R;
	export let procedure: P;

	export let formStructure = getFormStructure(route, procedure);

	type FormObject = {
		[key in (typeof formStructure)[number][number]['id']]: string;
	};

	export let initForm = formStructure.flat().reduce((acc, field) => {
		acc[field.id as keyof FormObject] = '';
		return acc;
	}, {} as FormObject) as FormObject;
</script>

<div class="flex flex-col gap-3">
	{#each formStructure as row}
		<div class="flex flex-row gap-2">
			{#each row as field}
				<FormElement {field} bind:value={initForm[field.id]} />
			{/each}
		</div>
	{/each}
</div>
