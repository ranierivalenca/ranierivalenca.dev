<script>
  import CommandLink from "$lib/CommandLink.svelte";
</script>

<p>
  Hey there, I am <strong>Ranieri Valença de Carvalho</strong> 👋🏼! As I stated on my <a target="_blank" href="https://www.linkedin.com/in/ranierivalenca/">LinkedIn</a> account, since <span>2007</span>, when I was just an internal on a local company, I'm a challenge driven <strong>Full Stack Web Developer</strong> and since <span>2015</span> I'm also a <strong>Web Development Teacher</strong> who loves to program and automate stuffs around just for fun.
</p>
<p>
  I'm also eager for knowledge in diverse fields like mathematics, phylosophy, psicology, physics, biology, biochemistry, ...
</p>
<p>
  Currently I work as a full-time teacher at <a target="_blank" href="https://www.ifpe.edu.br/campus/igarassu">IFPE - Instituto Federal de Pernambuco</a>, a Brazilian Federal public institution, teaching courses like <span>Web Development I</span>, <span>Web Development II</span>, <span>Advanced Topics in Web Development</span> and <span>Distributed Systems</span>. I also keep creating softwares in order to improve my knowledge and learn new technologies / stacks.
</p>
<p>
  If you want to know more about my skills, type <CommandLink cmd="skills" /> (or just click here). You can also check languages, frameworks and technologies I have worked with by typing <CommandLink cmd="tech" /> or my education typing <CommandLink cmd="courses" />.
</p>

<style type="text/scss">
  @include anchors;
  p {
    @apply whitespace-pre-wrap;
    @apply mt-3;
    &:before {
      content: '    ';
    }
  }
  span {
    @apply text-violet-500;
  }
</style>