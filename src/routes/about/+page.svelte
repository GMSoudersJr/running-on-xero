<script lang="ts">
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="A Blog by Gerald Souders about running in Xero Shoes" />
</svelte:head>
<div class="page-container">
	<h1 class="title">About</h1>

	<section>
		<h2>My Story</h2>
		<p>
			I ran in conventional sneakers for years. Every training season brought a new injury: ankles
			one year, knees the next, then lower back. I figured that was just part of running. Then I
			tried to run an interval workout in minimal shoes without actually transitioning out of my
			arch-support mechanics. The result was a stress fracture in the outer bone of my left foot.
		</p>
		<p>
			Recovering from that forced me to slow down and pay attention. I had to relearn how to walk,
			how to move the way my body was built to, getting real feedback from the ground instead of
			padding it out. Reading <em>Born to Run</em> by Christopher McDougall pointed me in the right direction.
			I started walking, hiking, jogging, and eventually running barefoot on the trails along the coast
			in Haeundae, Busan, South Korea.
		</p>
		<p>
			A pebble lodged in my foot mid-run convinced me that minimalist sandals were a reasonable
			compromise. I have been running in them since. Now I am back to putting in real miles and
			keeping it up.
		</p>
	</section>

	<section>
		<h2>About This Blog</h2>
		<p>
			This is where I document runs in different places and what I notice along the way. Photos of
			the roads, trails, and sandals that get me there.
		</p>
	</section>
</div>

<style>
	.page-container {
		max-width: 600px;
		padding: 0 1rem;
		display: grid;
		grid-template-rows: repeat(auto-fill, min-content);
		gap: 2em;
		justify-content: center;
	}
	.title {
		justify-self: center;
	}
	section {
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}
	h2 {
		margin: 0;
	}
	p {
		margin: 0;
		line-height: 1.6;
	}
</style>
