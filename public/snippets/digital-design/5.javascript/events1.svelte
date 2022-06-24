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

<button on:click={clicked}>Klik her</button>

<button on:animationend={animationEnded}>Eller her</button>

<button on:transitionend={transitionEnded}>Eller her</button>
