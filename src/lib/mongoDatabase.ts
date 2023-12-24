import { DB_URI, DB_NAME } from "$env/static/private";
import {MongoClient, ServerApiVersion} from "mongodb";

const client = new MongoClient(DB_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

const db = client.db(DB_NAME);
const blogCollection = db.collection('blog');
const photosCollection = db.collection('photos');

export async function getBannerPhoto() {
	const options = {
		projection: { _id: 0, imgUrl: 1, alt: 1, id: 1  }
	}
	try {
		await client.connect();
		const photo = await photosCollection.find({}, options).toArray();
		return photo.at(0);

	} catch (error) {
		console.log('Error getting photo', error)

	} finally {
		await client.close();
	}
}

export async function getAllPostsFromDatabase() {
	const options = {
		projection: { _id: 0, title: 1, content: 1, slug: 1  }
	}
	try {
		await client.connect();
		const posts = await blogCollection.find({}, options).toArray();
		return posts;

	} catch (error) {
		console.log('Error getting all posts @getAllPostsFromDatabase', error)
	} finally {
		await client.close();
	}
}

export async function getPost(slug: string) {
	const options = {
		projection: { _id: 0, title: 1, content: 1  }
	}
	try {
		await client.connect();
		const post  = await blogCollection.findOne({slug: slug}, options);
		return post;
	} catch (error) {
		console.log('Error getting a post @getPostFromDatabase', error);

	} finally {
		await client.close();
	}
}
