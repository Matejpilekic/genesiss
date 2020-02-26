<template>
  <div id="app">
    <header>
      <a href="/">
        <div class="logo"></div>
      </a>
    </header>
    <div class="image"></div>

    <router-view />
  </div>
</template>

<script>
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueSpinners from 'vue-spinners'

Vue.use(BootstrapVue);
Vue.use(VueSpinners);

export default {
  name: "app",
  components: {
    //  InputData
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
  max-width: 290px;
  height: 75px;
  margin: 0 auto;
  background-image: url("./assets/fsr.png");
  background-repeat: no-repeat;
  background-size: contain;
}

form {
  max-width: 1000px;
  margin: 0 auto;
}
header{
  background-color: #004278;
  width: 100%;
}
.image{
  display: block;
  max-width: 100%;
  height: 100px;
  background-image: url("./assets/image.png");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
