import {ADMIN} from '$env/static/private';
import {fail} from '@sveltejs/kit';
import type { Actions } from './$types';
import {addPost} from '$lib/mongoDatabase';
import {hyphenateSlug} from '$lib/utils';

export const actions = {
	addPost: async ({ request }) => {
		const postData = await request.formData();
		const title = postData.get('title')?.toString();
		const content = postData.get('content')?.toString();
		const imageUrl = postData.get('imageUrl')?.toString();
		const imageAlt = postData.get('imageAlt')?.toString();
		const slug = postData.get('slug')?.toString();
		const description = postData.get('description')?.toString();
		const passphrase = postData.get('passphrase')?.toString();

		if (!slug) {
			return fail(400, { title, content, imageUrl, missing: true })
		}

		const formattedSlug = hyphenateSlug(slug)

		if ( passphrase != ADMIN ) {
			return fail(401, { title, content, imageUrl, incorrect: true });
		}
		
		if (!passphrase) {
			return fail(400, { title, content, imageUrl, missing: true });
		}

		const post = {
			title,
			content,
			imageUrl,
			imageAlt,
			slug: formattedSlug,
			description
		}

		const addedPost = await addPost(post);
		
		if ( addedPost ) {
			return { success: true }
		}

	}

} satisfies Actions;
