<script lang="ts">
	import { InputTypeEnum } from '$lib/utils/apiStructure';
	export let label: string;
	export let type: InputTypeEnum;
	export let placeHolder: string = '';
	export let id: string = '';
	export let value: string = '';
</script>

<label class="w-full">
	{label}:<br />
	{#if type === InputTypeEnum.TEXT}
		<input
			placeholder={placeHolder}
			class="w-full !outline-none input input-bordered"
			type="text"
			{id}
			name={id}
			bind:value
		/>
	{:else if type === InputTypeEnum.EMAIL}
		<input
			placeholder={placeHolder}
			class="w-full !outline-none input input-bordered"
			type="email"
			{id}
			name={id}
			bind:value
		/>
	{/if}
</label>
