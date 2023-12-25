<script lang="ts">
  import type { PageData } from "../$types";

  export let data: PageData;
</script>

<h1>Running on Xero</h1>
{#await data.posts}
  Loading posts...
{:then posts}
  {#each posts as post }
    <a href="/blog/{post.slug}">{post.title}</a>
  {/each}
{:catch error}
  <p>error loading the posts: {error.message}</p>
{/await}

<style>
</style>
