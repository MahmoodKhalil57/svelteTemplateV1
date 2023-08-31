import type { APIType } from '$lib/apiUtils/ApiUtils.type';
import contactRouter from './routes/contactRouter.server';
import exampleRouter from './routes/exampleRouter.server';

export const API = {
	contactRouter,
	exampleRouter
} satisfies APIType;
