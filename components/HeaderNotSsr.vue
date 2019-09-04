<template>
  <header v-scroll="myScroll">
    <nav>
      <n-link to="/">О модели</n-link>
      <n-link to="instruction">Инструкция</n-link>
      <n-link to="contacts">Контакты</n-link>
    </nav>
  </header>
</template>

<script>
import Vue from 'vue'

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

export default {
  data() {
    return {
      scrollPrev: 0,
    }
  },
  methods: {
    myScroll(evt, el) {
      var scrolled = window.scrollY; // Высота скролла в px

      // Если скроллим
      if ( scrolled > 0 ) {
        // Если скроллим вниз
        if ( scrolled > this.scrollPrev ) {
          // Если меню видно
          if ( scrolled < el.scrollHeight + el.offsetTop ) {
            el.setAttribute(
              "style", 
              "position: fixed; top: 0"
            )
          // Если меню НЕ видно
          } else {
            // Позиционируем меню фиксированно вне экрана
            el.setAttribute(
              "style", 
              "position: fixed; top: -" + el.scrollHeight + "px; transition: all 0.3s ease-in-out"
            )
          }
        // Если скроллим вверх
        } else {
          // Если меню не видно
          if ( scrolled > el.offsetTop ) {
            el.setAttribute(
              "style", 
              "position: fixed; top: 0; transition: all 0.3s ease-in-out"
            )
          } else {
            // Убираем все стили
            this.header.removeAttr("style");
          }
        }
        // Присваиваем текущее значение скролла предыдущему
        this.scrollPrev = scrolled;
      }
    }
  }
}
</script>

<style lang="scss" scoped>

header {
  position: fixed;
  top: 0;
  width: 100%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  background: $color-main;
  background: $color-main-gradient;
  font-family: head;
}

a {
  text-decoration: none;
  color: white;
  padding: 10px;
}

a:hover {
  color: $color-additional-dark;
}

</style>