<script lang="ts">
	import {createEventDispatcher, onMount} from "svelte";

  export let title: string;
  export let imageUrl: string;
  export let imageAlt: string;
  export let content: string;

  const dispatch = createEventDispatcher();

  let xDown: number;
  let yDown: number;

  function getTouches(event: TouchEvent) {
    return event.touches
  }

  function handleStart(event: TouchEvent) {
    event.preventDefault();
    const firstTouch = getTouches(event)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleEnd(event: TouchEvent) {
    if ( !xDown || !yDown ) {
      return;
    }

    let direction = "";

    let xUp = event.changedTouches[0].clientX;
    let yUp = event.changedTouches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
      if ( xDiff > 0 ) {
        direction = "older";
      } else {
        direction = "newer";
      }
    } else {
      if ( yDiff > 0 ) {
        direction = "older";
      } else {
        direction = "newer";
      }
    }

    dispatch('swipe', direction);
  }

  onMount(async () => {
    let blogImage = document.getElementById("blog-image");
    blogImage?.addEventListener("touchstart", handleStart);
    blogImage?.addEventListener("touchend", handleEnd);
  });
</script>

<section id="blog-post" >
  <h1 class="title">{title}</h1>
  <img id="blog-image" class="image" src={imageUrl} alt={imageAlt}>
  <div class="content">{@html content}</div>
</section>


<style>
  img {
    width: 100%;
    aspect-ratio: 1.618 / 1;
    object-fit: cover;
  }
  section {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows:  repeat(2, min-content);
    gap: 0.5rem;
  }
  .title {
    view-transition-name: blog-post-title;
  }
  .title, .content {
    padding: 0 1rem;
  }
  .content {
    font-family:  'Outfit', 'Noto Color Emoji', sans-serif;
    line-height: 1.5;
    height: 20dvh;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .content::-webkit-scrollbar {
    display: none;
  }
</style>
