<!-- Button.svelte -->
<script>
  //if type is not set, it becomes "primary"
  export let type = "primary";
</script>

<button><slot /></button>
