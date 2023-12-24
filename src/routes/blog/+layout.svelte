<script lang="ts">
  interface LayoutData {
    posts: {
      title: string,
      content:string,
      slug: string
    }[]
  }
  export let data: LayoutData;
</script>

<slot></slot>

<div class="submenu">
  {#each data.posts as post}
    <a href={`/blog/${post.slug}`}>{post.title}</a>
  {/each}
</div>
