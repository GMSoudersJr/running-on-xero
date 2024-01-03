<script lang="ts">
  // TODO - add a carousel
  import type { PageData } from "./$types";
	import Carousel from "$lib/components/Carousel.svelte";

  export let data: PageData;
  $: posts = data.posts;
</script>

<div class="page-container">
  <h1>Running on Xero</h1>
  <Carousel {posts}/>
  <p>It started with a little rubber!</p>
</div>

<style>
  .page-container {
    text-align: center;
    height: 100%;
    width: 100%;
  }
</style>
