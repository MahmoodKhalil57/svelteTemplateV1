<script lang="ts">
	type R = $$Generic<Routes>;
	type P = $$Generic<Procedures<R>>;

	import { getFormStructureWithRouteProcedure, getEmptyFormObject } from '$lib/utils/apiStructure';
	import FormElement from './formElement.svelte';
	import type { Routes, Procedures } from '$lib/utils/ApiStructure.type';

	export let route: R;
	export let procedure: P;

	export let formStructure = getFormStructureWithRouteProcedure(route, procedure) as Exclude<
		ReturnType<typeof getFormStructureWithRouteProcedure>,
		undefined
	>;

	export let initForm = getEmptyFormObject(formStructure);
</script>

<form
	id="contact"
	class="flex-col w-full max-w-xl gap-3 px-10 flex-center text-start"
	novalidate
	on:submit|preventDefault
>
	<div class="flex flex-col gap-3">
		{#each formStructure as row}
			<div class="flex flex-row gap-2">
				{#each row as field}
					<FormElement {field} bind:value={initForm[field.id]} />
				{/each}
			</div>
		{/each}
	</div>

	<button class="mt-10 btn btn-primary btn-wide">Submit</button>
</form>
