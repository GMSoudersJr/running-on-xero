<script lang="ts">
  import BlogCard from "$lib/components/BlogCard.svelte";
  import type { PageData } from "../$types";

  export let data: PageData;
  $: ({ posts } = data);
</script>

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
    gap: 4px;
  }
</style>
