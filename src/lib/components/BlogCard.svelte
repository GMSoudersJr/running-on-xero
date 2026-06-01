<script lang="ts">
	import { goto } from '$app/navigation';

	async function handleClick(event: MouseEvent) {
		const image = event.target as HTMLImageElement;
		await goto(`blog/${image.id}`);
	}

	interface Props {
		imageUrl: string;
		title: string;
		slug: string;
		alt: string;
	}

	let { imageUrl, title, slug, alt }: Props = $props();
</script>

<button type="button" onclick={handleClick}>
	<img src={imageUrl} {alt} id={slug} />
</button>

<style>
	button {
		display: grid;
		margin: 0;
		padding: 0;
		border: none;
	}
	img {
		width: 100%;
		aspect-ratio: 1/1;
		object-fit: cover;
	}
</style>
