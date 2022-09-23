<script>
  import { onMount } from "svelte";

  let photos = [];

  onMount(async () => {
    const res = await fetch(`/tutorial/api/album`);
    photos = await res.json();
  });
</script>
