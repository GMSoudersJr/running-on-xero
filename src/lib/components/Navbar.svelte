<script lang="ts">
  import Hamburger from './Hamburger.svelte';

  const navItems = [
    {
      name: "Home",
      id: "nav-home",
      href: "/",
      class: "nav-item nav-left",
      emoji: "👣"
    },
    {
      name: "About",
      id: "nav-about",
      href: "/about",
      class: "nav-item nav-right"
    },
    {
      name: "Blog",
      id: "nav-blog",
      href: "/blog",
      class: "nav-item nav-right"
    },
  ];

  function handleClick(event: MouseEvent) {
    //let clicked = event?.target?.id;
    console.log(event.target);
    let clicked = event?.target?.id;
    let navItem = document.getElementById(clicked)?.parentElement;
    let allNavItemsNew = document.querySelectorAll(".navItem")
    allNavItemsNew.forEach(( item ) => {
      if ( item.classList.contains("active") && item.id != navItem?.id ) {
        item.classList.remove("active");
      }
    })
    navItem?.classList.add("active");
  }

</script>

<nav>
  <ul class="navbarUl" id="navbarUl">
     {#each navItems as navItem (navItem.id)}
     <li
       class={`${navItem.class}`}
       id={`li-${navItem.id}`}
     >
       <a
         id={navItem.id}
         on:click={handleClick}
         href={navItem.href}
       >
         {#if navItem.name === 'Home'}
           {navItem.emoji}
         {:else}
           {navItem.name}
         {/if}
       </a>
     </li>
     {/each}
     <li class="hamburger">
       <Hamburger />
     </li>
  </ul>
</nav>

<style>
  ul {
    background-color: var(--whiteStripe);
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr repeat(3, fit-content(160px));
    justify-items: end;
    align-items: center;
  }

  .nav-left {
    justify-self: start;
  }

  li {
    float: left;
    font-size: 1.5em;
  }

  li a {
    display: block;
    text-align: center;
    text-decoration: none;
    padding: 14px 16px;
  }

  li a:hover {
    color: white;
  }

  .active > a {
    color: silver;
  }

  ul .hamburger {
    display: none;
  }

  @media screen and (max-width: 80em) {
    ul {
      background-color: var(--whiteStripe);
      background-color: red;
    }
  }
  @media screen and (max-width: 64em) {
    ul {
      background-color: var(--whiteStripe);
      background-color: white;
    }
  }
  @media screen and (max-width: 48em) {
    ul {
      width: 100vw;
      background-color: var(--whiteStripe);
    }

    .nav-right {
      display: none;
    }

    ul .hamburger {
      position: absolute;
      top: 7px;
      right: 14px;
      display: block;
    }

    .navbarUl.responsive {
      grid-template-columns: 1fr;
    }

    .nav-right.show, .nav-left{
      display: block;
      justify-self: center;
      width: 100%;
    }

  }
  @media screen and (max-width: 40em) {
    ul {
      width: 100vw;
      background-color: var(--whiteStripe);
    }
  }
</style>
