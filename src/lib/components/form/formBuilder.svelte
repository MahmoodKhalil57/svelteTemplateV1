<script lang="ts">
	import FormElement from './formElement.svelte';
	import type { FormStructure } from '$lib/components/form/inputType';

	export let formStructure: FormStructure;
</script>

<div class="flex flex-col gap-3">
	{#each formStructure as row}
		<div class="flex flex-row gap-2">
			{#each row as field}
				<FormElement {field} />
			{/each}
		</div>
	{/each}
</div>
