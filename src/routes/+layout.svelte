<script lang="ts">
	import Footer from "$lib/components/Footer.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import '../app.css';

  interface LayoutData {
    bannerPhoto: {
      imgUrl: string;
      alt: string;
      id: string;
    }
    posts: {
      title: string;
      content: string;
      slug: string;
    }[]
  }
  export let data: LayoutData;
</script>
<div class="layout-container">
  <nav>
    <Navbar />
  </nav>

  <main>
    <slot />
  </main>

  <aside>
    <h2>More posts</h2>
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
  .layout-container {
    background-color: var(--whiteStripe);
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
    grid-area: aside;
    place-self: bottom;
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
      grid-template-columns: 1fr max-content;
      grid-template-rows: 60px 1fr min-content;
      gap: 1em;
      padding-left: 1em;
      padding-right: 1em;
      grid-template-areas:
      "nav nav"
      "main aside "
      "footer footer";
    }
    main {
      place-self: start;
    }
    aside {
      place-self: center;
    }
  }

</style>

