<script lang="ts">
  import { thisYear } from '$lib/utils.js';

  const copyrightString = `©${thisYear()} by Gerald M. Souders Jr.`
</script>

<footer>
  <p>{copyrightString}</p>
</footer>

<style>
  footer {
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    padding: 3px;
  }

  footer p {
    font-size: 16px;
    line-height: 24px;
  }
</style>
