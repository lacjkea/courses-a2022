<script>
  export let data;
  const { d, classes = "" } = data;
</script>

<path class={`arrow ${classes}`} {d} />
