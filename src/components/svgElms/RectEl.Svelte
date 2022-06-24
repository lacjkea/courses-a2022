<script>
  export let data;
  const {
    x,
    y,
    width,
    height,
    classes = "",
    animation = "",
    pathLength = 1,
  } = data;
</script>

<rect
  {x}
  {y}
  {width}
  {height}
  class={classes}
  data-animation={animation}
  {pathLength}
/>
