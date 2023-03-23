<template>
  <nav class="navbar navbar-expand-lg nav-dark">
    <div class="container">
      <h3 class="Zach">ZACH</h3>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <router-link class="nav-link" aria-current="page" to="/"
              >Me</router-link
            >
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/project">Project</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/contact">Contact</router-link>
          </li>
        </ul>
        <div class="nav-item">
          <div class="toggle-theme" @click="changeTheme()">
            <i v-if="theme === 'dark'" class="fa-solid fa-sun dark-btn"></i>
            <i v-else class="fa-solid fa-moon light-btn"></i>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    message: String,
  },
  data() {
    return {
      theme: "",
    };
  },
  methods: {
    changeTheme() {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  li {
    padding-right: 30px;
  }
}
</style>