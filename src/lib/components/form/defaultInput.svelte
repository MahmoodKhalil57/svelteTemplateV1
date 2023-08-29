<script lang="ts">
	export let label: string;
	export let type: 'text' | 'email' = 'text';
	export let placeHolder: string = '';
	export let id: string = '';
</script>

<label class="w-full">
	{label}:<br /><input
		placeholder={placeHolder}
		class="w-full !outline-none input input-bordered"
		{type}
		{id}
		name={id}
	/>
</label>
