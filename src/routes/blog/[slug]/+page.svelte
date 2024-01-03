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
  $: previous = data.posts?.at(index - 1);
  $: next = data.posts?.at(index + 1);

</script>

{#await data.post}
  Loading post...
{:then post}
  <BlogPost
    title={post.title}
    imageUrl={post.imageUrl}
    imageAlt={post.imageAlt}
    content={post.content}
    on:swipe={handleSwipe}
  />
{:catch error}
  <p>error loading the post: {error.message}</p>
{/await}
