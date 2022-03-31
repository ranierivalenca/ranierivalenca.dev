<script>
  import HelpMenu from '$lib/components/HelpMenu.svelte'
  import Scrollable from '$lib/components/Scrollable.svelte'
  import Terminal from '$lib/Terminal.svelte'
  import Landing from '$lib/Landing.svelte'
</script>

<style type="text/scss">
  .app-container {
    @apply container h-full m-auto overflow-hidden;
    @apply text-gray-300 text-lg;
    @apply bg-slate-900;
  }
</style>

<div class="app-container">
  <HelpMenu></HelpMenu>
  <Scrollable class="p-2">
    <Landing></Landing>
    <Terminal></Terminal>
  </Scrollable>
</div>