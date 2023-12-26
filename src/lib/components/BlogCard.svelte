<script lang="ts">
  export let imageUrl: string;
  export let title: string;
  export let slug: string;
  export let alt: string;
</script>

<figure>
  <img src={imageUrl} alt={alt}>
  <figcaption>{title}</figcaption>
</figure>

<style>
  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    background-color: #FFF;
    border: 1px solid var(--brightYellow);
    border-radius: 8px;
  }
  figcaption {
    display: none;
  }
</style>
