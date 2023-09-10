import type { APIType } from '$api/utils/ApiUtils.type.server';
import contactRouter from '$api/routes/contactRouter.server';
import exampleRouter from '$api/routes/exampleRouter.server';

export const API = {
	contactRouter,
	exampleRouter
} satisfies APIType;
