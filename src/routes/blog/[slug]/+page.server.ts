import { getPost } from '$lib/mongoDatabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	return {
		post: await getPost(params.slug),
	}
}
