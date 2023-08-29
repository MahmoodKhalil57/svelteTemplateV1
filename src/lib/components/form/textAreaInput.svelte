<script lang="ts">
	export let label: string;
	export let placeHolder: string = '';
	export let id: string = '';
</script>

<label class="w-full"
	>{label}:<br />

	<textarea
		class="!outline-none textarea textarea-bordered w-full"
		placeholder={placeHolder}
		{id}
		name={id}
	/></label
>
