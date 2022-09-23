<script>
  function addNumberWrong() {
    numbers.push(numbers.length + 1);
  }

  function addNumberCorrect1() {
    numbers.push(numbers.length + 1);
    numbers = numbers;
  }

  function addNumberCorrect2() {
    numbers = [...numbers, numbers.length + 1];
  }
</script>
