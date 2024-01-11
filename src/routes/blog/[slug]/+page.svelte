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
  $: newer = data.posts?.at(index - 1);
  $: older = data.posts?.at(index + 1);

</script>

<svelte:head>
  <title>
    {post?.title}
  </title>
  <meta
    name="description"
    content={post?.description}
  />
</svelte:head>
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
      <p>🧭 Swipe the picture to navigate 🧭</p>
    </div>
    <div class="buttons">
      <div class="newer-navigation">
        {#if newer && index > 0}
          <a href={`/blog/${newer.slug}`}>⏮ Newer</a>
        {/if}
      </div>
      <div class="older-navigation">
        {#if older}
          <a href={`/blog/${older.slug}`}>Older ⏭</a>
        {/if}
      </div>
    </div>
  </section>
</div>

<style>
  .swipe {
    background-color: var(--whiteStripe);
    padding: 4px 10px;
    border-radius: 14px;
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
    padding-top: 1em;
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
