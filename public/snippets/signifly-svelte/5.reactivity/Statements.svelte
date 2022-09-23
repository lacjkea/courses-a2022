<script>
  let count = 1;
  $: doubled = count * 2;

  $: if (count >= 10) {
    console.warn("count is dangerously high!");
    count = 9;
  }
</script>

<button on:click={() => (count += 1)}>count * 2 is {doubled}</button>
