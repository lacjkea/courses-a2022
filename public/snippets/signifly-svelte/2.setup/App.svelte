<script>
  let count = 0;
  function countUp() {
    count = count + 1;
  }
</script>

<h1>You have pressed the button {count} times</h1>
<button on:click={countUp}>Click me!</button>
