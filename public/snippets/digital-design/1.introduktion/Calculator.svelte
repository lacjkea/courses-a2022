<main>
    <h1>Calculator</h1>
    <input type="number" bind:value={val1} /> +
    <input type="number" bind:value={val2} /> = <span>{out}</span>
</main>
<script>
    $: out = val1 + val2;
    let val1 = 0;
    let val2 = 0;
</script>