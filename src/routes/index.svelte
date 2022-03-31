<script>

  import Terminal from '$lib/Terminal.svelte'

</script>

<style type="text/scss">
  .app-container {
    @apply container h-full m-auto overflow-hidden;
    @apply text-gray-300 text-lg;
    @apply bg-slate-900;
  }
</style>

<div class="app-container">
  <Terminal></Terminal>
</div>