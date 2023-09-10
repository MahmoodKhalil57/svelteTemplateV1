import { checkExactMatch, runTestList } from './utils';
import { API } from '$api/root.server';
import { cookiesWrapper } from '$api/utils/context.server';

const testApi = async () => {
	const res = await API.contactRouter.contactForm({
		ctx: { cookies: cookiesWrapper() },
		input: { email: 'test@asdasd.com', message: 'test', name: 'test' }
	});
	return res.success;
};
const testAuthLogin = async () => {
	const apiSuccess = await testApi();
	checkExactMatch(apiSuccess, true);
};

const testAuth = [
	{
		name: 'Test Api',
		method: testAuthLogin
	}
];
runTestList(testAuth);
