<script lang="ts">
	import Template from '$lib/components/utils/template.svelte';
</script>

<div class="flex-col gap-6 pb-40 flex-center stretch">
	<div class="avatar">
		<div class="rounded-full w-44">
			<img alt="avatar" src="/avatar.jpeg" />
		</div>
	</div>
	<div class="prose text-center">
		<h1 class="mb-3">Mahmood Ihab Khalil</h1>
		<h6>Full Stack Developer</h6>
		<p>
			Hello, I'm Mahmood, a full stack developer with a passion for creating beautiful and
			functional full stack websites and applications. I focus on technology design which includes
			but is not limited to and in no order: Database design, Backend design, Frontend state design,
			AB testing, CI/CD, and DevOps.
		</p>
	</div>
	<div class="gap-4 flex-center">
		<a href="/projects" class="btn btn-primary btn-wide">Projects</a>
		<a href="/contact" class="btn btn-neutral btn-wide">Contact</a>
	</div>
</div>
