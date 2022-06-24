<script>
  //TODO: would like to use <slot> for the content maybe? but didn't work
  //would like to have svg element components, but i can even import a stupid <p> tag
  //OK, canm import, but it has to be called RectEl or similar, Rect fails
  //TODO: pass custom css to els
  //TODO: <g> elements around some stuff to animate in groups?
  import RectEl from "./svgElms/RectEl.svelte";
  import TextEl from "./svgElms/TextEl.svelte";
  import ArrowEl from "./svgElms/ArrowEl.svelte";

  export let data = [];
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  class="explanation"
  width="1000"
  height="600"
  style="top:0;"
>
  <defs>
    <marker
      id="arrow"
      markerWidth="13"
      markerHeight="13"
      refx="2"
      refy="6"
      orient="auto"
    >
      <path d="M2,2 L2,11 L10,6 L2,2" />
    </marker>
  </defs>

  {#each data as obj, index (index)}
    {#if obj.type === "text"}
      <TextEl data={obj} />
    {:else if obj.type === "rect"}
      <RectEl data={obj} />
    {:else if obj.type === "arrow"}
      <ArrowEl data={obj} />
    {/if}
  {/each}
</svg>
