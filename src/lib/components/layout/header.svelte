<script lang="ts">
	import Logo from '../mk/logo.svelte';
	import Dropdown from '../ui/dropdown.svelte';
	import ThemeSwitcher from '../utils/ThemeSwitcher.svelte';
	import Navigation from './navigation.svelte';
</script>

<div class="header">
	<div class="relative flex justify-center sm:justify-between navbar bg-base-100">
		<a href="/"><Logo /></a>
		<div class="flex-none hidden sm:block">
			<ul class="gap-3 px-1 text-lg menu menu-horizontal">
				<!-- <li>
					<Dropdown id="navbar-dropdown" label="Quick Links">
						<Navigation />
					</Dropdown>
				</li> -->
				<li>
					<div class="!bg-inherit p-0"><a href="/contact" class="btn btn-accent">Contact</a></div>
				</li>
				<li class="flex items-center justify-center text-2xl">
					<ThemeSwitcher type="toggle" />
				</li>
			</ul>
		</div>
		<div class="absolute flex w-full pointer-events-none sm:hidden">
			<label
				for="layout-drawer"
				class="mx-6 text-3xl cursor-pointer pointer-events-auto hover:scale-105 drawer-button i-material-symbols-list-rounded"
			/>
		</div>
	</div>
</div>
