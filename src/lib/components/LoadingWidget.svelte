<script lang="ts">
  const loadingString = "LOADING...";
</script>

<div class="center">
  {#each loadingString as letter}
  <div class="wave">
    <h4 class="loading">
      {letter}
    </h4>
  </div>
  {/each}
</div>

<style>
  .center {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loading {
    color: var(--charcoalGray);
  }
  .wave {
    width: 5px;
    margin: 5px;
    animation: wave 3s linear infinite;
    border-radius: 20px;
  }
  .wave:nth-child(2) {
    animation-delay: 0.1s;
  }
  .wave:nth-child(3) {
    animation-delay: 0.2s;
  }
  .wave:nth-child(4) {
    animation-delay: 0.3s;
  }
  .wave:nth-child(5) {
    animation-delay: 0.4s;
  }
  .wave:nth-child(6) {
    animation-delay: 0.5s;
  }
  .wave:nth-child(7) {
    animation-delay: 0.6s;
  }
  .wave:nth-child(8) {
    animation-delay: 0.7s;
  }
  .wave:nth-child(9) {
    animation-delay: 0.8s;
  }
  .wave:nth-child(10) {
    animation-delay: 0.9s;
  }
  .wave:nth-child(11) {
    animation-delay: 1s;
  }
  .wave:nth-child(12) {
    animation-delay: 1.1s;
  }
  .wave:nth-child(13) {
    animation-delay: 1.2s;
  }
  .wave:nth-child(14) {
    animation-delay: 1.3s;
  }
  .wave:nth-child(15) {
    animation-delay: 1.4s;
  }
  .wave:nth-child(16) {
    animation-delay: 1.5s;
  }

  @keyframes wave {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
</style>

