<script lang="ts">
	import {goto} from '$app/navigation';

  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
  const carouselImages = [
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV86cNXWEIGqghsQmLUp1Gi0Yihhm7PzMwkJA7rOa9eAydLIdVPY_nfMe1TK5p-V15vfMsevNxngr01Z8TIKL1TAEexERxQNylXfbrhI6NvFu3j2eJ1n8PdCc5WXR_YT2CHsBShQgTvJ8v5CrLugYBgoIow=w965-h626-s-no-gm?authuser=0",
      imageAlt: "image 1"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV87Xizvc33TtcNVtHKy41EPF7CHjFB5MO0SbpMEfpKoK5f78uWD31kgRWbp2iDqQGRKPFZ3P8EXvdBOqIapOfr1lTvbZxCP8cExeDojdOb4A8uaAhqVHw3YBUqCbzo1mAZSGqQ_-cUs3gY5uvqtYIdTAaA=w800-h533-s-no-gm?authuser=0",
      imageAlt: "image 2"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV86BqgrrnKWpXPv0amwcVKfU04Ch-znp7fvER5VpPzqNqcqeWwImeAGIp7g46nsFK8MzUpWu5NkDlXIuit5qOotjlzunH-EqI3eoqs57q12Pw3ZTiW7QQtNlv-_al92vCRR5W1SPOcWVOsAydp2hdRIs4w=w643-h366-s-no-gm?authuser=0",
      imageAlt: "image 3"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV85iU3z0XsW5cov_qxEPpXHeqF7m_6BhbiXK4_fj-qRO8suTxPFnmr39RFcRWBHetAyZZav1k0Zw3E0KDIbrnmW0YoY2LpUVRGq-Mu9AnL3ww33nuFfE18PhDgIleT2xGKg22ZlUik73uxUkey5JslmVhQ=w800-h533-s-no-gm?authuser=0",
      imageAlt: "image 4"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV84qAT0yZK_P29hHNdbMSXM4LPVAFoLvoS6eShGQBHQx13wBR6Td4W0XtE4c9lxE4QH_0SPu4rhaH3KIw9C3mRO4pLA0k2juLtlxvbp3uoeTfDmYjI88w-54H6lwOYDdLkHg3Cf_o8t0o68wVsm4eD8WHA=w959-h958-s-no-gm?authuser=0",
      imageAlt: "image 6"
    },
  ];
  async function handleClick(event: MouseEvent) {
    const slideIndex = event.detail.Slide.index;
    const blogSlug = posts.at(slideIndex).slug;
    await goto(`/blog/${blogSlug}`);

  }

  export let posts;
</script>

<Splide
  aria-label="Intro Carousel"
  options={{
    rewind: true,
    speed: 1000,
    arrows: false,
    autoplay: true,
    cover: true,
    heightRatio: 0.618,
    pauseOnHover: true,
    updateOnMove: true,
    pagination: false,
    rewindByDrag: true,
    gap: 4,
    interval: 3500,
    easing: "cubic-bezier(0, 0.3, 0.7, 1)",
    waitForTransition: true,
  }}
  on:click={handleClick}
>
  {#each posts as post}
  <SplideSlide>
    <img src={post.imageUrl} alt={post.title}/>
  </SplideSlide>
  {/each}
</Splide>

<style>
  img {
    width: 100%
  }
</style>
