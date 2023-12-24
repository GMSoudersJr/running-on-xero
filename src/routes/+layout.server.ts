import {getAllPostsFromDatabase} from '$lib/mongoDatabase';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	return {
		posts: await getAllPostsFromDatabase(),
	}
};
