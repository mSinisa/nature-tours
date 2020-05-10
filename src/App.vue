<template>
  <div id="app">
    <div class="page" v-if="getShowSpinner">
      <b-spinner class="spinner" variant="primary" key="primary"></b-spinner>
    </div>
    <Navbar />
    <router-view class="pt-3" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getShowSpinner'])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.page {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  z-index: 25;
  width: 100%;
  height: 100%;
}

.spinner {
  position: relative;
  top: 50%;
}
</style>
