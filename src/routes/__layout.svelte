<script>
	import '../app.scss';
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<svelte:head>
  <title>ranierivalenca.dev</title>
</svelte:head>

<div id="app">
  <Header></Header>
  <main>
    <slot />
  </main>
  <Footer></Footer>
</div>

<style type="text/scss">
#app {
  @apply font-mono;
  @apply h-screen flex flex-col justify-between;
  @apply p-0;
  @apply overflow-hidden;

  main {
    @apply bg-gray-800;
    @apply h-full w-full;
  }
}
</style>