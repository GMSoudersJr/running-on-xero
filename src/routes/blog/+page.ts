import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, parent }) => {
	const { posts } = await parent();
	return {
		posts
	}
}
