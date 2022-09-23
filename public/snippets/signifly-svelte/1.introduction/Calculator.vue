<template>
  <div>
    <input type="number" v-model.number="a" />
    <input type="number" v-model.number="b" />

    <p>{{ a }} + {{ b }} = {{ a + b }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      a: 1,
      b: 2,
    };
  },
};
</script>
