<script>
  import { beforeUpdate, afterUpdate, onMount, tick } from "svelte";

  import Help from '$lib/commands/Help.svelte';
  import Welcome from '$lib/commands/Welcome.svelte';
  import Tech from '$lib/commands/Tech.svelte';
  import Skills from '$lib/commands/Skills.svelte';
  import Whoami from '$lib/commands/Whoami.svelte';
  import Courses from '$lib/commands/Courses.svelte';
  import Social from '$lib/commands/Social.svelte';

  import HelpMenu from '$lib/components/HelpMenu.svelte'
  import Scrollable from '$lib/components/Scrollable.svelte'
  import Landing from '$lib/Landing.svelte'

  const commands = {
    'welcome': {
      'component': Welcome
    },
    'tech': {
      'component': Tech
    },
    'whoami': {
      'component': Whoami
    },
    'help': {
      'component': Help,
    },
    'skills': {
      'component': Skills
    },
    'courses': {
      'component': Courses
    },
    'social': {
      'component': Social
    },
    'h': 'help',
    'hello': {
      'text': 'world?'
    }
  };

  function command(c) {
    console.log({commands, c})
    if (!commands[c]) {
      return false
    }
    if (typeof(commands[c]) == 'string') {
      return command(commands[c])
    }
    return commands[c]
  }



  onMount(async () => {
    // input.focus();
    // terminal.scrollTo(0, 0);
    // console.log('oiii')
    await sleep(500);
    execCommand('welcome');
    await sleep(500);
    execCommand('h');
  })

	afterUpdate(() => {
    inputEl.focus()
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
    execCommand(evt.detail.cmd);
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
    execCommand(cmd)
  }



  let inputing = false
  let execCommand = async (cmd) => {
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

  let exec = async (evt) => {
    console.log({commandInput});
    log = [
      ...log,
      {
        input: commandInput,
        text: commandInput
      },
      {
        cmd: commandInput
      },
    ];
    commandInput = '';
    await tick();
  }

</script>

<style type="text/scss">
  #terminal {
    @apply p-4 font-mono text-xl;
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
          {:else if row.cmd in commands}
            <div class="command-result">
              {#if command(row.cmd).component}
                <svelte:component this={command(row.cmd).component} />
              {:else if command(row.cmd).text}
                {command(row.cmd).text}
              {/if}
            </div>
          {:else if row.cmd}
            <strong>Command not found!</strong>
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