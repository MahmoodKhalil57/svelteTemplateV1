<script lang="ts">
	import FormBuilder from '$lib/components/form/formBuilder.svelte';
	import { settings } from '$lib/settings/portfolioInfo';

	import type { FormProps, PageConfig } from '$api/utils/ApiUtils.type.server';
	import { apiGet } from '$lib/apiUtils/apiClient';

	const pageConfig = {
		route: 'contactRouter',
		procedure: 'contactForm'
	} satisfies PageConfig;

	let onSubmit: FormProps<
		typeof pageConfig.route,
		typeof pageConfig.procedure
	>['onSubmit'] = async (data) => {
		const response = await apiGet(pageConfig.route, pageConfig.procedure, data, true);
	};
</script>

<div class="flex-col gap-6 px-2 prose sm:pb-40 flex-center stretch">
	<h2 class="m-0">Contact me</h2>
	<p class="px-6 m-0">
		You can contact me by sending an email to <a
			href="mailto:{settings.email}"
			class="link link-primary">{settings.email}</a
		>
		or by sending me a message using the following form.
	</p>
	<FormBuilder route={pageConfig.route} procedure={pageConfig.procedure} {onSubmit} />
</div>
