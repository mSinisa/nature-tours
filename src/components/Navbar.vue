<template>
  <div>
    <b-navbar toggleable="sm" variant="info" type="dark">
      <b-navbar-brand href="#">
        <b-icon-map class="mr-1"></b-icon-map>NaTours
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
          <b-nav-item :to="{ name: 'About' }">About</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form
            v-if="this.$route.name == 'Home'"
            class="d-none d-sm-inline"
            @submit.prevent="search"
          >
            <b-form-input
              size="sm"
              class="mr-sm-2 gray"
              placeholder="Search our tours"
              v-model="searchText"
            >
            </b-form-input>
            <b-button
              size="sm"
              class="my-2 my-sm-0 btn btn-outline-light"
              type="submit"
            >
              Search
            </b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { BIconMap } from 'bootstrap-vue';
export default {
  components: {
    BIconMap
  },
  data() {
    return {
      searchText: ''
    };
  },
  methods: {
    search() {
      this.$store.dispatch('search', { text: this.searchText });
      this.searchText = '';
    }
  }
};
</script>

<style scoped>
.gray {
  background-color: rgba(221, 231, 222, 0);
  color: white;
  border: 1px solid white;
}

.router-link-exact-active {
  color: white !important;
  font-weight: bolder;
  text-decoration: underline;
}

.btn-outline-light {
  background-color: rgba(0, 128, 128, 0);
}

.btn-outline-light:hover {
  background-color: rgb(255, 255, 255);
  color: #17a2b8;
}
.btn-outline-light:focus {
  border: none;
}
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: lightgray;
  opacity: 1; /* Firefox */
}
</style>
