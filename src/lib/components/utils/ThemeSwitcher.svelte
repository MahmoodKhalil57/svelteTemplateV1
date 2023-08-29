<script lang="ts">
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import { settings } from '$lib/utils/settings';

	export let type: 'toggle' | 'select';

	onMount(() => {
		themeChange(false);
	});

	const themes = [
		'light',
		'dark',
		'cupcake',
		'bumblebee',
		'emerald',
		'corporate',
		'synthwave',
		'retro',
		'cyberpunk',
		'valentine',
		'halloween',
		'garden',
		'forest',
		'aqua',
		'lofi',
		'pastel',
		'fantasy',
		'wireframe',
		'black',
		'luxury',
		'dracula',
		'cmyk',
		'autumn',
		'business',
		'acid',
		'lemonade',
		'night',
		'coffee',
		'winter'
	];

	const binaryThemes = Object.values(settings.themes);
</script>

<div class="!bg-inherit !text-inherit !cursor-default">
	{#if type === 'toggle'}
		<button data-toggle-theme={binaryThemes} class="icon hover:scale-110" />
	{:else}
		<select data-choose-theme>
			{#each themes as theme}
				<option value={theme}>{theme}</option>
			{/each}
		</select>
	{/if}
</div>

<style lang="postcss">
	:global([data-theme='forest']) .icon {
		@apply i-carbon-moon;
	}

	.icon {
		@apply i-carbon-sun;
	}
</style>
