<script lang="ts">
	import type { Field } from '$lib/components/form/inputType';
	import DefaultInput from './defaultInput.svelte';
	import TextAreaInput from './textAreaInput.svelte';

	export let field: Field;
</script>

{#if field.type === 'text'}
	<DefaultInput
		label={field.label}
		type={field.type}
		placeHolder={field.placeHolder}
		id={field.id}
	/>
{:else if field.type === 'email'}
	<DefaultInput
		label={field.label}
		type={field.type}
		placeHolder={field.placeHolder}
		id={field.id}
	/>
{:else if field.type === 'textarea'}
	<TextAreaInput label={field.label} placeHolder={field.placeHolder} id={field.id} />
{/if}
