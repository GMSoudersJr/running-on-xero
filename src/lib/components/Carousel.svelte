<script lang="ts">
	import { goto } from '$app/navigation';

	interface Post {
		slug: string;
		imageUrl: string;
		title: string;
	}

	let { posts }: { posts: Post[] } = $props();

	const DELAY = 3500;
	const DURATION = 1400;

	let activeIndex = $state(0);
	let leavingIndex = $state<number | null>(null);
	let paused = $state(false);

	$effect(() => {
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

		const interval = setInterval(() => {
			if (!paused) advance();
		}, DELAY);
		return () => clearInterval(interval);
	});

	function advance() {
		leavingIndex = activeIndex;
		activeIndex = (activeIndex + 1) % posts.length;
		setTimeout(() => {
			leavingIndex = null;
		}, DURATION);
	}

	async function handleClick() {
		const slug = posts[activeIndex]?.slug;
		if (slug) await goto(`/blog/${slug}`);
	}
</script>

<div
	class="carousel"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	role="region"
	aria-label="Image carousel"
>
	{#each posts as post, i (post.slug)}
		<button
			type="button"
			class="slide"
			class:active={i === activeIndex}
			class:leaving={i === leavingIndex}
			aria-label="View post: {post.title}"
			aria-hidden={i !== activeIndex && i !== leavingIndex ? 'true' : undefined}
			tabindex={i === activeIndex ? 0 : -1}
			onclick={handleClick}
		>
			<img src={post.imageUrl} alt={post.title} />
		</button>
	{/each}

	<button
		type="button"
		class="pause-btn"
		aria-label={paused ? 'Play carousel' : 'Pause carousel'}
		onclick={() => (paused = !paused)}
	>
		{#if paused}▶{:else}⏸{/if}
	</button>
</div>

<style>
	.carousel {
		position: relative;
		overflow: hidden;
		aspect-ratio: 1 / 0.618;
	}
	/* Default: parked off-screen right, reset is instant */
	.slide {
		position: absolute;
		inset: 0;
		transform: translateX(100%);
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		transition: none;
	}
	/* Incoming: slides in from the right */
	.slide.active {
		transform: translateX(0);
		transition: transform 1400ms ease-in-out;
	}
	/* Outgoing: slides out to the left */
	.slide.leaving {
		transform: translateX(-100%);
		transition: transform 1400ms ease-in-out;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: block;
	}
	.pause-btn {
		position: absolute;
		bottom: 0.5rem;
		right: 0.5rem;
		z-index: 10;
		background: rgba(0, 0, 0, 0.45);
		color: white;
		border: none;
		border-radius: 4px;
		padding: 0.25rem 0.5rem;
		font-size: 0.75rem;
		cursor: pointer;
		opacity: 0;
		transition: opacity 200ms;
	}
	/* Show on hover or when carousel is keyboard focused */
	.carousel:hover .pause-btn,
	.carousel:focus-within .pause-btn {
		opacity: 1;
	}
	@media (prefers-reduced-motion: reduce) {
		.slide,
		.slide.active,
		.slide.leaving {
			transition: none;
		}
	}
</style>
