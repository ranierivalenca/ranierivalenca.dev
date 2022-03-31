<script>
  let klass = null;
  export {klass as class};
</script>

<div class="scrollable {klass ?? ''}">
  <slot />
</div>

<style type="text/scss">
  .scrollable {
    @apply overflow-y-scroll overflow-x-hidden h-full;
    @apply bg-gray-900;
    @include scrollbars;
  }
</style>