<script lang="ts">
  import BlogCard from "$lib/components/BlogCard.svelte";
  import type { PageData } from "../$types";

  export let data: PageData;
  $: ({ posts } = data);
  let width: number;
  $: rem = width / 16;
</script>

<svelte:window bind:innerWidth={width} />
<h1 class="title">Running on Xero</h1>
<section class="cards-grid-container">
  {#each posts as post }
    <BlogCard
      title={post.title}
      imageUrl={post.imageUrl}
      slug={post.slug}
      alt={post.imageAlt}
    />
  {/each}
</section>

<style>
  .title {
    text-align: center;
  }
  .cards-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    max-height: 512px;
    gap: 4px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .cards-grid-container::-webkit-scrollbar {
    display: none;
  }
  @media screen and (min-width: 48rem) {
    .cards-grid-container {
      grid-template-columns: repeat(5, 1fr);
    }
  }
</style>
