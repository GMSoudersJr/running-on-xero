<script lang="ts">
  import BlogCard from "$lib/components/BlogCard.svelte";
import type { PageData } from "../$types";

  export let data: PageData;
</script>

<h1>Running on Xero</h1>
{#await data.posts}
  Loading posts...
{:then posts}
  <section class="cards-grid-container">
  {#each posts as post }
    <BlogCard
      title={post.title}
      imageUrl={post.imageUrl}
      slug={post.slug}
      alt={post.alt}
    />
  {/each}
</section>
{:catch error}
  <p>error loading the posts: {error.message}</p>
{/await}

<style>
  .cards-grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto-fill;
    gap: 4px;
  }
</style>
