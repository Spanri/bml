<template>
  <div class="instruction">
    <div style="margin-bottom: 80px;"></div>
    <h2>Инструкция</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil nam modi dicta hic id inventore fugiat recusandae! Quisquam alias reprehenderit aperiam numquam quae voluptatum voluptates laudantium vel recusandae delectus.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nihil nam modi dicta hic id inventore fugiat recusandae! Quisquam alias reprehenderit aperiam numquam quae voluptatum voluptates laudantium vel recusandae delectus.</p>
  </div>
</template>

<script>

export default {
  components: {
  },
  head() {
    return {
      title: 'Инструкция'
    }
  },
}
</script>

<style lang="scss" scoped>

.instruction {
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 750px) {
    margin: 0 30px;
  }
}

</style>