<script lang="ts">
	import '../app.postcss';
	import ThemeSwitcher from '$lib/components/utils/ThemeSwitcher.svelte';
	import { Toaster } from 'svelte-french-toast';
</script>

<slot />

<div class="hidden">
	<ThemeSwitcher type="toggle" />
</div>

<Toaster />
