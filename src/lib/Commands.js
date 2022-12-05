import Help from '$lib/commands/Help.svelte';
import Welcome from '$lib/commands/Welcome.svelte';
import Tech from '$lib/commands/Tech.svelte';
import Skills from '$lib/commands/Skills.svelte';
import Whoami from '$lib/commands/Whoami.svelte';
import Courses from '$lib/commands/Courses.svelte';
import Social from '$lib/commands/Social.svelte';
import Dino from '$lib/commands/Dino.svelte';

let commands = {}
const Component = (cmd, component) => {
  const isComponent = true
  commands[cmd] = { component, isComponent }
}
const Text = (cmd, text) => {
  const isText = true
  commands[cmd] = { text, isText }
}
const Function = (cmd, fn) => {
  const isFunction = true
  commands[cmd] = { fn, isFunction }
}

const alias = (cmd, dest) => {
  commands[cmd] = dest
}

Component('welcome', Welcome)
Component('tech', Tech)
Component('whoami', Whoami)
Component('help', Help)
Component('skills', Skills)
Component('courses', Courses)
Component('social', Social)
Component('dino', Dino)

alias('h', 'help')
alias('?', 'help')

Text('hello', 'world')

Function('clear', 'clear')
alias('cls', 'clear')



export function command(c) {
  // console.log({ commands, c })
  if (!commands[c]) {
    return false
  }
  if (typeof (commands[c]) == 'string') {
    return command(commands[c])
  }
  
  return commands[c]
}