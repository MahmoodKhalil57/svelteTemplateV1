<script lang="ts">
	import type { InitFormObj } from '$lib/components/form/inputType';
	import type { ActionData } from './$types';
	import FormBuilder from '$lib/components/form/formBuilder.svelte';
	import { settings } from '$lib/utils/settings';
	import { enhance } from '$app/forms';
	import toast from 'svelte-french-toast';

	let initForm: InitFormObj<'contact', 'contactForm'> = { name: '', email: '', message: '' };

	export let formResponse: ActionData;

	const toastError = (message: string) => {
		toast.error(message, {
			position: 'bottom-right',
			style: 'background-color: hsl(var(--sc)); color: var(--sf);text-align:center'
		});
	};
	const toastSuccess = (message: string) => {
		toast.success(message, {
			style: 'background-color: hsl(var(--sc)); color: var(--sf);text-align:center'
		});
	};

	$: if (formResponse?.errorMessage) {
		toastError(formResponse.errorMessage);
	}

	$: if (formResponse?.success) {
		toastSuccess('Message recieved, will get back to you soon!');
	}
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
	<form
		id="contact"
		class="flex-col w-full max-w-xl gap-3 px-10 flex-center text-start"
		method="POST"
		use:enhance
	>
		{JSON.stringify(initForm)}

		<FormBuilder route="contact" procedure="contactForm" bind:initForm />

		<button class="mt-10 btn btn-primary btn-wide">Submit</button>
	</form>
</div>
