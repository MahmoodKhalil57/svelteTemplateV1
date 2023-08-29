<script lang="ts">
	import Drawer from '$lib/components/layout/drawer.svelte';
	import Footer from '$lib/components/layout/footer.svelte';
	import Header from '$lib/components/layout/header.svelte';
	import Navigation from '$lib/components/layout/navigation.svelte';
	import ThemeSwitcher from '$lib/components/utils/ThemeSwitcher.svelte';
</script>

<Drawer id="layout-drawer">
	<div slot="main-content" class="w-full min-h-screen-new">
		<div class="w-full min-h-header">
			<Header />
		</div>
		<div class="flex-center stretch min-h-page">
			<slot />
		</div>
		<div class="w-full min-h-footer">
			<Footer />
		</div>
	</div>
	<ul
		slot="sidebar-content"
		class="flex w-3/5 h-full gap-10 p-4 menu bg-base-200 text-base-content"
	>
		<!-- Sidebar content here -->
		<div class="flex w-full pl-4 text-2xl">
			<ThemeSwitcher type="toggle" />
		</div>
		<div>
			<Navigation />
		</div>
	</ul>
</Drawer>
