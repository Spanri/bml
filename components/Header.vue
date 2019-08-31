<template>
  <header ref="h">
    <nav>
      <n-link to="/">О модели</n-link>
      <n-link to="instruction">Инструкция</n-link>
      <n-link to="contacts">Контакты</n-link>
    </nav>
  </header>
</template>

<script>
// :scroll="this.myScroll(this, scrollPrev)"
// import Sticky from '~/plugins/vue-sticky'

export default {
  // directives: {
  //   'sticky': this.sticky
  // },
  data() {
    return {
      scrollPrev: 0,
      header: this.$refs.h,
    }
  },
  methods: {
    myFun() {
      console.log(this.header);
      var scrolled = window.scrollTop(); // Высота скролла в px
      var firstScrollUp = false; // Параметр начала сколла вверх
      var firstScrollDown = false; // Параметр начала сколла вниз

      // Если скроллим
      if ( scrolled > 0 ) {
        // Если текущее значение скролла > предыдущего, т.е. скроллим вниз
        if ( scrolled > this.scrollPrev ) {
          firstScrollUp = false; // Обнуляем параметр начала скролла вверх
          // Если меню видно
          if ( scrolled < this.header.height() + this.header.offset().top ) {
            // Если только начали скроллить вниз
            if ( firstScrollDown === false ) {
              var topPosition = this.header.offset().top; // Фиксируем текущую позицию меню
              this.header.css({
                "top": topPosition + "px"
              });
              firstScrollDown = true;
            }
            // Позиционируем меню абсолютно
            this.header.css({
              "position": "absolute"
            });
          // Если меню НЕ видно
          } else {
            // Позиционируем меню фиксированно вне экрана
            this.header.css({
              "position": "fixed",
              "top": "-" + this.header.height() + "px"
            });
          }

        // Если текущее значение скролла < предыдущего, т.е. скроллим вверх
        } else {
          firstScrollDown = false; // Обнуляем параметр начала скролла вниз
          // Если меню не видно
          if ( scrolled > this.header.offset().top ) {
            // Если только начали скроллить вверх
            if ( firstScrollUp === false ) {
              var topPosition = this.header.offset().top; // Фиксируем текущую позицию меню
              this.header.css({
                "top": topPosition + "px"
              });
              firstScrollUp = true;
            }
            // Позиционируем меню абсолютно
            this.header.css({
              "position": "absolute"
            });
          } else {
            // Убираем все стили
            this.header.removeAttr("style");
          }
        }
        // Присваеваем текущее значение скролла предыдущему
        scrollPrev = scrolled;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// nav.vue-fixed-header {
//   position: fixed;
//   left: 0;
//   top: 0;
//   // width: 100vw;
// }

header {
  z-index: 2;
  position: sticky;
  top: 0;
  width: 100%;
}

nav {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  background-color: $color-main;
  font-family: head;
}

a {
  text-decoration: none;
  color: white;
  padding: 10px;
}

a:hover {
  color: #114068;
}

</style>
