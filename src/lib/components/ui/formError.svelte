<script lang="ts">
	import { afterUpdate } from 'svelte';
	import { fade } from 'svelte/transition';

	export let errorMessage: string | undefined = undefined;

	afterUpdate(() => {
		if (errorMessage) {
			setTimeout(() => {
				errorMessage = undefined;
			}, 5000);
		}
	});
</script>

<div class="h-11">
	{#if errorMessage}
		<div
			class="flex items-center py-0 my-2 alert alert-error"
			transition:fade={{ delay: 250, duration: 300 }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-6 h-6 stroke-current shrink-0"
				fill="none"
				viewBox="0 0 24 24"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
				/></svg
			>
			<span>{errorMessage}</span>
		</div>
	{/if}
</div>
