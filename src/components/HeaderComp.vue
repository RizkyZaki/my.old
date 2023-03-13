<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container">
      <!-- <a class="navbar-brand" href="#">Zach</a> -->
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
        <div class="navbar-nav mx-auto">
          <ul class="navbar-nav">
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
};
</script>

<style lang="scss" scoped>
nav {
  li {
    padding-right: 30px;
  }
}
</style>