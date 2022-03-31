<script>
  let klass;
	export { klass as class };
  export let style = null;
</script>
<div id="header" class="{klass ?? ''}" style="{style ?? ''}">
	<div class="flex items-center gap-1">
		<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
    </svg>
		<span class="font-bold">ranierivalenca.dev</span>
	</div>
	<div class="flex items-center gap-1">
	</div>
</div>

<style type="text/scss">
	#header {
		@apply w-full flex items-center p-2 justify-between fixed z-10;
    @apply bg-gradient-to-b from-violet-600 to-violet-800 text-white;
	}
</style>