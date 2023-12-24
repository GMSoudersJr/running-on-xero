<script lang="ts">
  import type { PageData } from "./$types";
  import { page } from '$app/stores';

  export let data: PageData;
</script>

<h1>{data.title}</h1>
<div>{@html data.post.content}</div>


<style>
</style>
