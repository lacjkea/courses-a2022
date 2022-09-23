<script>
  function clicked() {
    console.log("I was clicked");
  }
  function animationEnded() {
    console.log("Animation ended");
  }
  function transitionEnded() {
    console.log("some transition ended");
  }
</script>

<button on:click={clicked}>Click here</button>

<button on:animationend={animationEnded}>Or here</button>

<button on:transitionend={transitionEnded}>Or here</button>
