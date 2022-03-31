<script>
  import CommandLink from '$lib/CommandLink.svelte';
</script>

<div>
  <p>
    Available commands:
  </p>
  <ul>
    <li>
      <CommandLink cmd="help" />      show this help
    </li>
    <li>
      <CommandLink cmd="whoami" />    more information about me
    </li>
    <li>
      <CommandLink cmd="skills" />    about my soft skills
    </li>
    <li>
      <CommandLink cmd="tech" />      languages, frameworks and technologies I have worked with
    </li>
    <li>
      <CommandLink cmd="courses" />   about my [formal] education
    </li>
    <li>
      <CommandLink cmd="social" />    where you can find me
    </li>
  </ul>

</div>

<style type="text/scss">
  li {
    @apply whitespace-pre-wrap;
    &:before {
      content: '   '
    }
  }
</style>