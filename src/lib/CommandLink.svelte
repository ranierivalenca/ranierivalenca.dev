<script>
  // https://dev.to/mohamadharith/workaround-for-bubbling-custom-events-in-svelte-3khk
  import { custom_event } from "svelte/internal";

  export let cmd;
  export let text = null;
  let klass = null;
  export {klass as class};

  let ref;

  let commandClick = () => {
    console.log('dispatching...', cmd)
    let evt = custom_event('command-click', cmd, { bubbles: true });
    ref.dispatchEvent(evt)
    // dispatch('command', cmd)
  }
</script>

<a
  href="#cmd:{cmd}"
  data-cmd="{cmd}"
  class={klass ?? ''}
  bind:this={ref}
  on:click|preventDefault={commandClick}
>
  {text ?? cmd}
</a>

<style type="text/scss">
  a {
      @apply bg-emerald-200 text-slate-800 font-bold cursor-pointer;
      &:hover {
        @apply bg-emerald-400;
      }
      &:before, &:after {
        content: ' '
      }
    }
</style>