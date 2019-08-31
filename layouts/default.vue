<template>
  <div class="container-fluid default">
    <Header />
    <div class=".container-fluid a">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">

@font-face {
  font-family: 'head';
  src:
    url("../assets/font/head.ttf") format("ttf"),
    url("../assets/font/head.woff") format("woff");
  font-weight: normal;
  font-size: 35px;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container-fluid {
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
}

.default {
  min-height: 100vh;
  background-color: $color-background;
}

.a {
  flex: 100%;
  justify-content: center;
  width: 100%;

  h2 {
    margin: 30px;
  }

  button {
    margin-bottom: 10px;
    background-color: $color-button;
    border: solid $color-main;
    border-width: 0 3px 3px 0;
    padding: 3px 10px;
  }

  button:active {
    border-color: $color-background;
    border-width: 3px 0 0 3px;
  }
}

</style>
