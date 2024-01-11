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

export async function addPost(post: object) {
	try {
		await client.connect();
		const addedPost = await blogCollection.insertOne(post);
		return addedPost.acknowledged;
	} catch (error) {
		console.log("Error adding post @addPost", error);
	} finally {
		client.close();
	}
}

export async function getAllPostsFromDatabase() {
	const options = {
		projection: {
			_id: 0,
			title: 1,
			content: 1,
			slug: 1,
			imageUrl: 1,
			imageAlt: 1,
			description: 1
		}
	}
	try {
		await client.connect();
		const posts = (await blogCollection.find({}, options).toArray()).reverse();
		return posts;

	} catch (error) {
		console.log('Error getting all posts @getAllPostsFromDatabase', error)
	} finally {
		await client.close();
	}
}

export async function getPost(slug: string) {
	const options = {
		projection: {
			_id: 0,
			title: 1,
			content: 1,
			slug: 1,
			imageUrl: 1,
			imageAlt: 1 ,
			description: 1
		}
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
