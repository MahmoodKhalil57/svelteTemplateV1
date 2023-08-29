<script lang="ts">
	export let id: string;
</script>

<div class="drawer">
	<input {id} type="checkbox" class="drawer-toggle" />
	<div class="!w-full overflow-hidden drawer-content">
		<slot name="main-content" />
	</div>
	<div class="drawer-side">
		<label for={id} class="drawer-overlay" />
		<slot name="sidebar-content" />
	</div>
</div>
