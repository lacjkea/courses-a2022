<script>
  let SvelteIsAwesome = true;
  let awesomeClass = "";

  if (SvelteIsAwesome) {
    awesomeClass = "highlight";
  }
</script>

<div class={awesomeClass} />

<style>
  .highlight {
    outline: 2px solid hotpink;
  }
</style>
