import { expect, test } from 'bun:test';

export const checkExactMatch = <X, Y>(x: X, y: Y) => {
	expect(x).toBe(y);
};

export const checkTypeMatch = <X, Y>(x: X, y: Y) => {
	expect(typeof x).toBe(typeof y);
};

export const runTestList = (testList: { name: string; method: () => void }[]) => {
	testList.forEach((testItem) => {
		test(`Method: ${testItem.method.name}\nName:${testItem.name}`, testItem.method);
	});
};
