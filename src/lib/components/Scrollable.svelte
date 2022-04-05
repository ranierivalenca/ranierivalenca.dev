<script>
import { afterUpdate, beforeUpdate } from "svelte";

  let scrollable;
  let klass = null;

  export {klass as class};
  export let autoscroll = false;

  let scroll;
  if (autoscroll) {
    beforeUpdate(() => {
      // scroll = scrollable && (scrollable.offsetHeight + scrollable.scrollTop) > (scrollable.scrollHeight - 20);
      scroll = autoscroll
    });

    afterUpdate(() => {
      if (scroll) scrollable.scrollTo(0, scrollable.scrollHeight);
    });
  }
</script>

<div class="scrollable {klass ?? ''}" on:click on:dblclick on:mousedown bind:this={scrollable}>
  <slot />
</div>

<style type="text/scss">
  .scrollable {
    @apply overflow-y-scroll overflow-x-hidden h-full;
    @apply bg-gray-900;
    @include scrollbars;
  }
</style>