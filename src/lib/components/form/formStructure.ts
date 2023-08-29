import type { FormStructure } from '$lib/components/form/inputType';

export const contactFormStructure: FormStructure = [
	[{ id: 'name', label: 'Name', type: 'text', placeHolder: 'Your name' }],
	[{ id: 'email', label: 'Email', type: 'email', placeHolder: 'Your name' }],
	[{ id: 'message', label: 'Message', type: 'textarea', placeHolder: 'Your name' }]
];
