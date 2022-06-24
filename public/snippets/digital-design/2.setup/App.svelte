<script>
  let count = 0;
  function countUp() {
    count = count + 1;
  }
</script>

<h1>Du har trykket {count} gange på knappen</h1>
<button on:click={countUp}>Klik på mig!</button>
