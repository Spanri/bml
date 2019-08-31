<template>
  <div class="contacts">
    <h2>Контакты</h2>
    <p>Леша: какие-то контакты</p>
    <p>Аня: какие-то контакты</p>
    <p>А вообще, пишите мне на почту! {{email}}</p>
    <button @click="copy()">Скопировать почту</button>
    <p v-show="copyResult">{{copyResult}}</p>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      email: 'kozlova9v@mail.ru',
      copyResult: ''
    }
  },
  head() {
    return {
      title: 'О модели'
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.email)
      .then(() => {
        if (this.copyResult !== 'Скопировано!') {
          this.copyResult = 'Скопировано!';
          setTimeout(() => {
            this.copyResult = '';
          }, 2000);
        }
      })
      .catch(err => {
        this.copyResult = 'Что-то пошло не так.';
        console.log('Что-то пошло не так', err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.contacts {
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 450px) {
    margin: 0 20px;
  }
}

</style>
