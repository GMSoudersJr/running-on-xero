<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from '$app/stores';

  export let data: PageData;
  $: index = data.posts?.findIndex(post => post.slug === $page.params.slug);
  $: next = data.posts?.at(index - 1);

</script>

{#await data.post}
  Loading post...
{:then post}
  <section>
    <h1 class="title">{post?.title}</h1>
    <img class="image" src={post?.imageUrl} alt={post?.alt}>
    <div class="content">{@html post?.content}</div>
  </section>
{:catch error}
  <p>error loading the post: {error.message}</p>
{/await}

{#if next}
  <p>Next post: <a href="/blog/{next.slug}">{next.title}</a></p>
{/if}

<style>
  img {
    width: 100%;
  }
  section {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows:  repeat(2, min-content);
    gap: 0.5rem;
  }
  .title, .content {
    padding: 0 1rem;
  }
</style>
