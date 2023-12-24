import type { LayoutServerLoad } from './$types';
import { getAllPostsFromDatabase } from '$lib/mongoDatabase';

export const load: LayoutServerLoad = async () => {
	const posts = await getAllPostsFromDatabase();
	return {
		posts
	};
}
