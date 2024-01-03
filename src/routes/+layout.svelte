<script lang="ts">
  import { navigating } from '$app/stores';
  import ViewTransition from './navigation.svelte';
	import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import '../app.css';
	import LoadingWidget from '$lib/components/LoadingWidget.svelte';

  interface LayoutData {
    posts: {
      title: string;
      content: string;
      slug: string;
    }[]
  }
  export let data: LayoutData;
</script>
<div class="layout-container">
  <ViewTransition />
  <nav>
    <Navbar />
  </nav>

  <main>
    {#if $navigating}
      <LoadingWidget />
    {:else}
      <slot />
    {/if}
  </main>

  <aside>
    <h2>Recent posts</h2>
    <ul>
      {#each data.posts as post}
        <li>
          <a href="/blog/{post.slug}">
            {post.title}
          </a>
        </li>
      {/each}
    </ul>
  </aside>

  <footer>
    <Footer />
  </footer>
</div>

<style>
  a {
    font-family:  'Outfit', 'Noto Color Emoji', sans-serif;
    text-decoration: none;
    color: var(--darkYellow);
  }
  .layout-container {
    width: 100%;
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
    padding-left: 1em;
    padding-bottom: 1em;
  }
  main {
    place-self: center;
    grid-area: main;
  }
  footer {
    grid-area: footer;
    justify-content: end;
  }

  @media screen and (min-width: 40em) {
    .layout-container {
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: 60px 1fr min-content;
      gap: 1em;
      padding-left: 1em;
      padding-right: 1em;
      grid-template-areas:
      "nav nav nav"
      ". main aside "
      "footer footer footer";
    }
    main, aside {
      place-self: start;
      justify-self: center;
    }
  }

</style>

