<script lang="ts">
	import {goto} from "$app/navigation";

  async function handleClick(event: MouseEvent) {
    const image = event.target as HTMLImageElement;
    await goto(`blog/${image.id}`);
  }

  export let imageUrl: string;
  export let title: string;
  export let slug: string;
  export let alt: string;
</script>

<button
  type="button"
  on:click={handleClick}
>
  <img
    src={imageUrl}
    alt={alt}
    id={slug}
  >
</button>

<style>
  button {
    display: grid;
    margin: 0;
    padding: 0;
    border: none;
  }
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
</style>
