<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from '$app/stores';
	import BlogPost from "$lib/components/BlogPost.svelte";
	import {goto} from "$app/navigation";

  export let data: PageData;

  async function handleSwipe(event: CustomEvent) {
    const swipeDirection = event.detail;
    if ( swipeDirection === 'next' && next ) {
      await goto(`/blog/${next.slug}`)
    }
    if ( swipeDirection === 'prev' && previous && index > 0) {
      await goto(`/blog/${previous.slug}`)
    }
  }
  $: index = data.posts?.findIndex(post => post.slug === $page.params.slug);
  $: post = data.posts?.at(index);
  $: previous = data.posts?.at(index - 1);
  $: next = data.posts?.at(index + 1);
  let width: number;

  $: rem = width / 16;

</script>

<svelte:window bind:innerWidth={width}/>
<div class="page-container">
{#if post}
  <BlogPost
    title={post.title}
    imageUrl={post.imageUrl}
    imageAlt={post.imageAlt}
    content={post.content}
    on:swipe={handleSwipe}
  />
{/if}
  <section class="navigation-directions">
    <div class="swipe">
      <p>swipe the picture to navigate 🧭</p>
    </div>
    <p>{rem}rem</p>
    <div class="buttons">
      <div class="previous-navigation">
        {#if previous && index > 0}
          <a href={`/blog/${previous.slug}`}>⏮ Previous</a>
        {/if}
      </div>
      <div class="next-post">
        {#if next}
          <a href={`/blog/${next.slug}`}>Next ⏭</a>
        {/if}
      </div>
    </div>
  </section>
</div>

<style>
  .swipe {
    background-color: var(--whiteStripe);
    padding: 4px 8px;
    border-radius: 8px;
  }
  .page-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, min-content);
    gap: 4px;
  }
  .navigation-directions {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: min-content;
    justify-items: center;
  }
  .buttons {
    display: none;
  }
  @media screen and (min-width: 40em) {
    .page-container {
      width: 600px;
    }
    .swipe {
      display: none;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: min-content;
      justify-items: center;
      gap: 3rem;
    }
    .buttons div a {
      text-decoration: none;
    }

  }
</style>
