<script>
  let x = 1;
  function add() {
    x = x + 1;
  }
</script>

<button on:click={add}> +1 </button>
{#if x > 10}
  <p>{x} is bigger than 10</p>
{:else if 5 > x}
  <p>{x} is less than 5</p>
{:else}
  <p>{x} is between 5 and 10</p>
{/if}
