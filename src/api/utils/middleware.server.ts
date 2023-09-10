import type { getContext } from '$api/utils/context.server';

export const privateProcedure = async (ctx: Awaited<ReturnType<typeof getContext>>) => {
	const nextCtx = { user: 'MK' };
	return { privateCtx: nextCtx };
};

export const adminProcedure = async (ctx: Awaited<ReturnType<typeof getContext>>) => {
	const nextCtx = { ...privateProcedure(ctx), is_admin: true };
	return { adminCtx: nextCtx };
};
