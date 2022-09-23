<script>
  //Card.svelte
  export let title;
  export let price;
  export let inStock;
</script>

<article>
  <h2>{title}</h2>
  <p>Only {price},-</p>
  <p>{inStock} left in stock</p>
</article>
