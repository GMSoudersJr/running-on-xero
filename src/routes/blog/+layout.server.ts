import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ parent }) => {
	const { posts } = await parent();
	console.log("blog Layout Server", posts);

	return {
		posts
	};
}
