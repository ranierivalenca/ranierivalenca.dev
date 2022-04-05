<div id="landing">
  <img alt="ranieri" src="photo.jpg">
  <h1>Ranieri Valença de Carvalho</h1>
  <h2>Full Stack Web Developer and Teacher</h2>
</div>

<style type="text/scss">
  #landing {
    @apply flex flex-col justify-center p-6 font-mono;
    img {
      @apply block m-auto mb-2;
      @apply w-60 rounded-full border-2 shadow-lg border-white;
    }
    h1, h2 {
      @apply block m-auto;
      @apply text-2xl;
    }
    h2 {
      @apply text-xl;
    }
    @apply border-b ml-4 mr-20;
  }
</style>