<script>
  import { beforeUpdate, afterUpdate, onMount, tick } from "svelte";

  
  import HelpMenu from '$lib/components/HelpMenu.svelte'
  import Scrollable from '$lib/components/Scrollable.svelte'
  import Landing from '$lib/Landing.svelte'

  import { command } from "./Commands";


  onMount(async () => {
    // input.focus();
    // terminal.scrollTo(0, 0);
    // console.log('oiii')
    await sleep(500);
    typeCommand('welcome');
    await sleep(500);
    typeCommand('h');
  })

	afterUpdate(() => {
    // inputEl.focus()
	});



  let log = [];

  // https://blog.logrocket.com/svelte-actions-introduction/
  let inputEl;
  let commandInput = '';




  let sleep = ms => {
    return new Promise(res => {
      setTimeout(() => res(), ms)
    })
  }



  let handleHelpMenu = (evt) => {
    typeCommand(evt.detail.cmd);
  }

  let handleClick = (evt) => {
    inputEl.focus({
      preventScroll: true
    });
  }

  let handleCommandClick = async (evt) => {
    let cmd = evt.detail
    if (!cmd) {
      return
    }
    typeCommand(cmd)
  }



  let inputing = false
  let typeCommand = async (cmd) => {
    if (inputing) {
      return
    }
    inputing = true
    commandInput = ''
    for (let l of cmd) {
      commandInput += l
      await sleep(30)
    }
    await sleep(150)
    exec()
    inputing = false
  }


  const FUNCTIONS = {
    clear: () => {
      log = []
    }
  }

  const clearInput = () => {
    commandInput = ''
  }
  
  const _404 = async () => {
    const text = 'Command not found!'
    const input = commandInput
    const ok = true
    log = [...log, { input }, { ok, text }]
    clearInput()
    await tick()
  }

  const _component = async () => {
    const input = commandInput
    const component = command(input).component
    const ok = true
    log = [...log, { input }, { ok, component }]
    await tick()
  }
  
  const _text = async () => {
    const input = commandInput
    const ok = true
    const text = command(input).text
    log = [...log, { input }, { ok, text }]
    await tick()
  }

  const _run = async () => {
    const input = commandInput
    let cmd = command(input).fn
    if (!FUNCTIONS[cmd]) {
      _404()
      clearInput()
      return
    }
    FUNCTIONS[cmd]()
    clearInput()
    await tick()
  }

  let exec = async (evt) => {
    console.log({commandInput});
    console.log(command(commandInput))
    if (!command(commandInput)) {
      _404()
      return
    }
    if (command(commandInput).isComponent) {
      _component()
      clearInput()
      return
    }
    if (command(commandInput).isText) {
      _text()
      clearInput()
      return
    }
    if (command(commandInput).isFunction) {
      _run()
      return
    }
  }

</script>

<style type="text/scss">
  #terminal {
    @apply p-4 font-mono;
    // @apply h-full p-1 bg-gray-900 font-mono text-2xl mt-12;
    @apply relative pr-20;
    .row {
      @apply flex flex-row gap-3 w-full justify-between p-0 m-0;
      p, span {
        @apply whitespace-pre-wrap;
      }
      span {
        @apply text-green-500
      }
      strong {
        @apply text-cyan-50;
      }

      .command-result {
        @apply pb-8;
      }
    }
  }
</style>


<HelpMenu on:help-click={handleHelpMenu} />
<Scrollable class="p-2" on:click={handleClick} autoscroll={true}>
  <Landing />
  <div id="terminal" on:command-click={handleCommandClick}>
    {#each log as row}
      <div class="row">
        <div class="w-full">
          {#if row.input}
            <span class="text-green-500">&gt</span>
            <span>{row.input}</span>
          {:else if row.ok}
            <div class="command-result">
              {#if row.component}
                <svelte:component this={row.component} />
              {:else if row.text}
                {row.text}
              {/if}
            </div>
          <!-- {:else if row.}
            <strong>Command not found!</strong> -->
          {:else}
            <span>{row.text ?? row}</span>
          {/if}
        </div>
      </div>
    {/each}
    <div class="row">
      <span class="text-green-500">&gt</span>
      <form on:submit|preventDefault={exec} class="w-full relative whitespace-pre">
        <input
          type="text"
          id="input"
          autocomplete="off"
          class="
            w-full
            focus:outline-none
            border-transparent
            ring-transparent
            bg-transparent
            text-green-500
            font-bold
          "
          bind:this={inputEl}
          bind:value={commandInput}
        >
      </form>
    </div>
  </div>
</Scrollable>