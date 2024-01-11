<script lang="ts">
  // TODO - add a carousel
  import type { PageData } from "./$types";
	import Carousel from "$lib/components/Carousel.svelte";

  export let data: PageData;
  $: posts = data.posts;
</script>

<svelte:head>
  <title>
    Running on Xero
  </title>
  <meta
    name="description"
    content="A Blog about Running in Xero Shoes and the benefits of minimalist running by Gerald Souders"
  >
</svelte:head>

<div class="page-container">
  <h1>Running on Xero</h1>
  <Carousel {posts}/>
  <p>It started with a little rubber!</p>
</div>

<style>
  .page-container {
    text-align: center;
    height: 100%;
    width: 100vw;
  }

  @media screen and (min-width: 40em) {
    .page-container {
      width: 600px;
    }
  }
</style>
