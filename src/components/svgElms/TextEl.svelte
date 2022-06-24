<script>
  export let data;
  const { x, y, text, classes = "" } = data;
</script>

<text {x} {y} class={classes}>{text}</text>
