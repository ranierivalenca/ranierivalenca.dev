<script>
  // https://dev.to/mohamadharith/workaround-for-bubbling-custom-events-in-svelte-3khk
  import { custom_event } from "svelte/internal";

  let klass = null;
  export {klass as class};

  let open = false;

  let ref;

  let dispatchEvent = (cmd) => {
    console.log('dispatching...', cmd)
    let evt = custom_event('type-command', cmd, true);
    ref.dispatchEvent(evt)
  }
</script>


<style type="text/scss">
  .help-top-container {
    $total_icons: 6;
    $radius: 8rem;
    @apply container left-1/2 -translate-x-1/2 absolute z-20;
    .help-right-container {
      @apply absolute h-screen right-6;
      .help-menu {
        @apply text-white;
        @apply font-mono;
        @apply absolute top-1/3 right-0;
        * {
          @apply transition-all duration-500;
        }
        .connected-icon {
          @for $i from 1 through $total_icons {
            $angle: calc(($i - 1) * 180deg / ($total_icons - 1));
            &:nth-child(#{$i}) {
              &.active .icon {
                @apply opacity-100;
                transform: translateY(cos($angle) * -$radius) translateX(sin($angle) * -$radius);
                &:hover {
                  @apply z-30 outline-offset-0;
                  transform: translateY(cos($angle) * -$radius) translateX(sin($angle) * -$radius) scale(2);
                }
              }
              &::before {
                content: ' ';

                @apply transition-all duration-500;
                @apply bg-slate-200 opacity-30;
                @apply absolute top-6 right-6 -z-10;

                height: 1px;
                width: 0;
                transform-origin: right;
                transform: rotate(90 - $angle);
              }
              &.active::before {
                width: $radius;
              }
            }
          }
        }
        .icon {
          // @apply transition-all;
          @apply w-12 h-12 rounded-full;
          // @apply text-center leading-10;
          @apply flex justify-center items-center;
          // @apply bg-gradient-to-t from-violet-600 via-violet-700 to-violet-600;
          @apply text-slate-800 bg-slate-200;
          @apply cursor-pointer;
          @apply opacity-0;
          // @apply mix-blend-multiply shadow-md shadow-gray-400;
          @apply outline outline-offset-2 outline-pink-500;
          @apply absolute z-10 right-0;

          span.full {
            @apply hidden;
            @apply text-xs;
            // @apply bg-gradient-to-r from-violet-600 to-violet-800;
            // @apply text-white absolute right-0 px-2;
          }

          &:hover {
            // @apply shadow-lg shadow-gray-400;
            @apply opacity-100;
            span.short {
              @apply hidden;
            }
            span.full {
              @apply block;
            }
          }
          &.main {
            // @apply bg-gradient-to-t from-emerald-600 via-emerald-700 to-emerald-600;
            // @apply bg-gray-200 text-slate-800;
            @apply text-3xl font-bold;
            @apply z-20;
            @apply opacity-100;
            @apply scale-110;
            &:hover {
              @apply scale-150;
              // @apply bg-gradient-to-t from-emerald-700 via-emerald-800 to-emerald-700;
            }
          }
        }
      }
    }
  }
</style>

<div class="help-top-container" bind:this={ref}>
  <div class="help-right-container">
    <div class="help-menu">
      <div class="icon main" on:click={() => open = !open}>?</div>
      <div>
        <div class="connected-icon" class:active={open}>
          <div class="icon" on:click|preventDefault={() => dispatchEvent('help')}>
            <span class="short">hlp</span>
            <span class="full">help</span>
          </div>
        </div>
        <div class="connected-icon" class:active={open}>
          <div class="icon" on:click|preventDefault={() => dispatchEvent('whoami')}>
            <span class="short">who</span>
            <span class="full">whoami</span>
          </div>
        </div>
        <div class="connected-icon" class:active={open}>
          <div class="icon" on:click|preventDefault={() => dispatchEvent('skills')}>
            <span class="short">skl</span>
            <span class="full">skills</span>
          </div>
        </div>
        <div class="connected-icon" class:active={open}>
          <div class="icon" on:click|preventDefault={() => dispatchEvent('tech')}>
            <span class="short">tec</span>
            <span class="full">tech</span>
          </div>
        </div>
        <div class="connected-icon" class:active={open}>
          <div class="icon" on:click|preventDefault={() => dispatchEvent('courses')}>
            <span class="short">crs</span>
            <span class="full">courses</span>
          </div>
        </div>
        <div class="connected-icon" class:active={open}>
          <div class="icon" on:click|preventDefault={() => dispatchEvent('social')}>
            <span class="short">soc</span>
            <span class="full">social</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>