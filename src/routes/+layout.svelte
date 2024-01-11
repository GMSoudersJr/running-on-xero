<script lang="ts">
  import ViewTransition from './navigation.svelte';
	import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import '../app.css';
  import { page } from '$app/stores';

  interface LayoutData {
    posts: {
      title: string;
      content: string;
      slug: string;
      imageUrl: string;
      imageAlt: string;
      descriptiong: string;
    }[]
  }

  export let data: LayoutData;
  let width: number;
  $: currentSlug = $page.params?.slug;
  $: desktopRecentPosts = data.posts;
  $: mobileRecentPosts = data.posts.slice(-3);
  $: rem = width / 16;
</script>

<svelte:window bind:innerWidth={width} />
<div class="layout-container">
  <ViewTransition />
  <nav>
    <Navbar />
  </nav>

  <main>
    <slot />
  </main>

  <aside>
    <h3>Recent posts</h3>
    <ul>
      {#if rem <= 48}
        {#each mobileRecentPosts as post}
          {#if post.slug === currentSlug}
          <li class="current">
            <a href="/blog/{post.slug}">
              {post.title}
            </a>
          </li>
        {:else}
          <li class="no-bullet">
            <a href="/blog/{post.slug}">
              {post.title}
            </a>
          </li>
          {/if}
        {/each}
      {:else}
        {#each desktopRecentPosts as post}
          {#if post.slug === currentSlug}
          <li class="current">
            <a href="/blog/{post.slug}">
              {post.title}
            </a>
          </li>
        {:else}
          <li class="no-bullet">
            <a href="/blog/{post.slug}">
              {post.title}
            </a>
          </li>
          {/if}
        {/each}
      {/if}
    </ul>
  </aside>

  <footer>
    <Footer />
  </footer>
</div>

<style>
  li.current a {
    color: var(--shortsColor);
  }
  li.no-bullet {
    list-style: none;
  }
  a {
    font-family:  'Outfit', 'Noto Color Emoji', sans-serif;
    text-decoration: none;
    color: var(--darkYellow);
  }
  .layout-container {
    height: calc(100svh);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows:  60px max-content 1fr min-content;
    grid-template-areas:
    "nav"
    "main"
    "aside"
    "footer";
  }
  nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-area: nav;
  }
  aside {
    color: var(--charcoalGray);
    grid-area: aside;
    align-self: end;
    padding-bottom: 0.5em;
    padding-left: 1em;
    view-transition-name: aside-recent-posts;
  }
  main {
    place-self: center;
    grid-area: main;
  }
  footer {
    grid-area: footer;
    justify-content: end;
  }

  @media screen and (min-width: 37.5em) {
    aside {
      width: 600px;
      padding-left: 0;
      padding-top: 2rem;
      justify-self: center;
    }
  }

  @media screen and (min-width: 50em) {
    .layout-container {
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: 60px 1fr min-content;
      gap: 1em;
      padding-left: 1em;
      padding-right: 1em;
      align-items: baseline;
      grid-template-areas:
      "nav nav nav"
      ". main aside "
      "footer footer footer";
    }
    main {
      place-self: start;
      justify-self: center;
    }
    aside {
      place-self: start;
      width: auto;
    }
  }
</style>

