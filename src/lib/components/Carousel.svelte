<script>
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
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV87F60DUxPm_Y_ksXrhGodUhc4UcYQQR5FNVwe2nBNJ2vq7LNdiUS-Uf60bfPZzMFT9rhLuR0pS2LxoOrX6uOTtHRO-qCwG1bGWK86Va9NH4-02g6X3ROs1Xp1bDHKOzLOGKO6BodWgx0eHv-_EKbjGpOg=w531-h979-s-no-gm?authuser=0",
      imageAlt: "image 3"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV85iU3z0XsW5cov_qxEPpXHeqF7m_6BhbiXK4_fj-qRO8suTxPFnmr39RFcRWBHetAyZZav1k0Zw3E0KDIbrnmW0YoY2LpUVRGq-Mu9AnL3ww33nuFfE18PhDgIleT2xGKg22ZlUik73uxUkey5JslmVhQ=w800-h533-s-no-gm?authuser=0",
      imageAlt: "image 4"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV87shZIbaNmhjj6SBEDVUX9iInUIT_2I0WOVmQcJVsWTopGOgjaEmYWBOB4yLZbWaEZdnvIVzvJsKGvsXE4HZyNC_OIOpt5xt662EsKD9oSKvy__xRQvzbChwqfUTl4O5GBb2MTasJ-FpCFF8IZyntO-qQ=w960-h540-s-no-gm?authuser=0",
      imageAlt: "image 5"
    },
    {
      imageUrl: "https://lh3.googleusercontent.com/pw/ABLVV86cNXWEIGqghsQmLUp1Gi0Yihhm7PzMwkJA7rOa9eAydLIdVPY_nfMe1TK5p-V15vfMsevNxngr01Z8TIKL1TAEexERxQNylXfbrhI6NvFu3j2eJ1n8PdCc5WXR_YT2CHsBShQgTvJ8v5CrLugYBgoIow=w965-h626-s-no-gm?authuser=0",
      imageAlt: "image 6"
    },
  ];
</script>

<Splide
  aria-label="Intro Carousel"
  options={{
    rewind: true,
    width: '100vw',
    trimSpace: true,
  }}
>
  {#each carouselImages as image}
  <SplideSlide>
    <img src={image.imageUrl} alt={image.imageAlt}/>
  </SplideSlide>
  {/each}
</Splide>

<style>
  img {
    width: 100%
  }
</style>
