import { getPost } from '$lib/mongoDatabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {
	const { posts } = await parent();

	return {
		posts,
		post: await getPost(params.slug)
	};

}
