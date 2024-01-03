import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent }) => {
	const { posts } = await parent();

	return {
		posts
	};
}
