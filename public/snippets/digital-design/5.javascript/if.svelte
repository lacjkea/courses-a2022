<script>
  let x = 1;
  function add() {
    x = x + 1;
  }
</script>

<button on:click={add}> +1 </button>
{#if x > 10}
  <p>{x} er større end 10</p>
{:else if 5 > x}
  <p>{x} er mindre end 5</p>
{:else}
  <p>{x} er mellem 5 og 10</p>
{/if}
