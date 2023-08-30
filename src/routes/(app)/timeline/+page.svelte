<script lang="ts">
	import { settings } from '$lib/utils/settings';
</script>

<div class="flex-col gap-6 pb-40 flex-center stretch">
	<div class="avatar">
		<div class="rounded-full w-44">
			<img alt="avatar" src="/avatar.jpeg" />
		</div>
	</div>
	<div class="prose text-center">
		<h1 class="mb-3">{settings?.fullName ?? ''}</h1>
		<h6>{settings.job}</h6>
		<p>{settings?.descriptionLong ?? ''}</p>
	</div>
	<div class="gap-4 flex-center">
		<a href="/projects" class="btn btn-primary btn-wide">Projects</a>
		<a href="/timeline" class="btn btn-neutral btn-wide">TimeLine</a>
	</div>
</div>
