<template>
  <div class="main-page">
    <div class="main-page__background">
      <div class="frame1">
        <h2>Модель движения по маршруту Бим-Миддлтон-Левин</h2>
        <div class="frame1__slogan">
          <h5>Почувствуйте (бес)порядок.</h5>
        </div>
      </div>
      <div class="frame2">
        <h2>Что это?</h2>
        <h5>Модель трафика Biham-Middleton-Levine - это самоорганизующаяся модель потока трафика сотового автомата. Состоит из нескольких автомобилей, представленных точками на решетке со случайной стартовой позицией, каждый из которых может быть одного из двух типов: те, которые двигаются только вниз (показаны синим цветом в этой статье), и те, которые двигаются только вправо (показаны красным цветом в этой статье). Оба типа автомобилей двигаются по очереди. В течение каждого поворота все автомобили соответствующего типа движутся на один шаг вперед, если они не заблокированы другим автомобилем. Его можно считать двухмерным аналогом более простой модели правила 184. Возможно, это самая простая система, демонстрирующая фазовые переходы и самоорганизацию.</h5>
      </div>
      <div class="frame3">
        <div class="frame3__block">
          <h2>История</h2>
          <h5>Модель дорожного движения в Бигем-Миддлтоне-Левине была впервые сформулирована Офером Бихэмом, Аланом Миддлтоном и Довом Левином в 1992 году. Biham et al. обнаружили, что по мере увеличения интенсивности движения, стабильный поток движения внезапно перешел от плавного к полному затору. В 2005 году Раисса д'Соуза обнаружила, что для некоторых плотностей движения существует промежуточный этап, характеризующийся периодическим расположением заторов и плавным течением. В том же году Ангел, Холройд и Мартин первыми убедительно доказали, что при плотности близкой к единице, система всегда будет заклинивать. Позже, в 2006 году, Тим Остин и Итай Бенджамини обнаружили, что для квадратной решетки стороны N, модель всегда будет самоорганизовываться для достижения полной скорости при наличии автомобилей меньше N/2.</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
  head() {
    return {
      title: 'Главная'
    }
  },
}
</script>

<style lang="scss" scoped>

.main-page {
  &__background {
    background-color: rgb(201, 215, 228);
    background-image: url('~static/img/background.png');
    background-attachment: fixed;
  }
}

.frame1 {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 44px);
  background-color: rgba(0, 0, 0, 0);
  color: white;

  h2 {
    text-shadow: 3px 3px 0px $color-additional-dark;
  }

  .frame1__slogan {
    position: relative;
    z-index: 1;
    margin: 30px 50% auto -30px;
    transform: skewX(-25deg);
    animation: 1.2s tremor ease-in-out infinite;

    @media (max-width: 650px) {
      margin: 30px 40% auto -30px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%; 
      height: 100%;  
      opacity: .8; 
      z-index: -1;
      background: $color-main-gradient;
    }

    h5 {
      text-align: right;
      padding: 15px 20px;
      margin: 0;
      transform: skewX(25deg);
      
      @media (max-width: 650px) {
        padding-left: 50px;
      }
    }

    @keyframes tremor {
      5%, 15%, 25% {
        transform: translateX(4px) skewX(-25deg);
        filter: blur(0.5px);
      }
      10%, 20% {
        transform: translateX(-4px) skewX(-25deg);
        filter: blur(1px);
      }
      30%, 100% {
        transform: translateX(0px) skewX(-25deg);
      }
    }
  }
}

.frame2 {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 44px);
  background-color: white;
  background-image: url('~static/img/backgroundFigure2.svg');
  background-repeat: no-repeat;
  background-position: bottom right;
  background-size: cover;

  h2 {
    @media (max-width: 500px) {
      margin: 30px auto auto;
    }
  }

  h5 {
    margin: 0 auto auto;
    max-width: 700px;
    padding: 30px 50px;

    @media (max-width: 550px) {
      padding: 30px;
    }
  }
}

.frame3 {
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 88px);
  background-color: rgba(0, 0, 0, 0);
  color: white;

  &__block {
    position: relative;
    z-index: 1;
    // background-color: $color-main;
    margin: 10% auto;
    max-width: 800px;

    @media (max-width: 800px) {
      margin: 10%;
    }

    @media (max-width: 550px) {
      margin: 10% 5%;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0; 
      left: 0;
      width: 100%; 
      height: 100%;  
      opacity: .9; 
      z-index: -1;
      background-color: rgba(0, 0, 0, 0);
      background-image: url('~static/img/backgroundFigure1.svg');
      background-repeat: no-repeat;
      background-position: bottom right;
      background-size: cover;
    }

    h2 {
      margin: 30px auto auto;
    }

    h5 {
      margin: 0 auto auto;
      max-width: 700px;
      padding: 50px;
      padding: 20px 40px 40px 50px;
    }
  }
}

h2 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: head;
  margin: auto auto 0;
  max-width: 600px;
  text-align: center;
  text-shadow: 4px 4px 0px $color-additional-light;

  @media (max-width: 650px) {
    margin: auto 30px 30px;
  }
}

</style>
