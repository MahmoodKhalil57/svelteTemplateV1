<script lang="ts">
	import type { FormProps } from '$lib/utils/ApiStructure.type';
	import FormBuilder from '$lib/components/form/formBuilder.svelte';
	import { settings } from '$lib/utils/settings';

	let initForm: FormProps<'contact', 'contactForm'>['initForm'];
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

	{JSON.stringify(initForm)}
	<FormBuilder route="contact" procedure="contactForm" bind:initForm />
</div>
