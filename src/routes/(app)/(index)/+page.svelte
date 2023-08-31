<script lang="ts">
	import { settings } from '$lib/settings/portfolioInfo';
</script>

<div class="flex-col gap-6 px-2 sm:pb-40 flex-center stretch">
	<div class="avatar">
		<div class="rounded-full w-44">
			<img alt="avatar" src={settings.imageLink} />
		</div>
	</div>
	<div class="prose text-center">
		<h1 class="mb-3">{settings.fullName}</h1>
		<h6>{settings.job}</h6>
		<p class="hidden sm:block">{settings.descriptionLong}</p>
		<p class="sm:hidden">{settings.descriptionShort}</p>
	</div>
	<div class="gap-4 flex-center">
		<a href="/projects" class="btn btn-primary sm:btn-wide">Projects</a>
		<a href="/timeline" class="btn btn-neutral sm:btn-wide">TimeLine</a>
	</div>
</div>
