<template>
  <VHeader />
  <div class="content">
    <router-view />
  </div>
  <VFooter />
</template>

<script>
import VFooter from "./components/FooterComp.vue";
import VHeader from "./components/HeaderComp.vue";
export default {
  components: {
    VFooter,
    VHeader,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap");
$text-bg-dark: #def5e5;
$text-bg-light: #301e67;
$dark-bg: #0f172a;
$light-bg: #ecf2ff;

* {
  font-size: 22px;
}

#app {
  font-family: "Lexend";
  background: $light-bg;
  color: $text-bg-light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.content {
  margin: 35px 230px;
}

.text-base {
  color: $text-bg-dark;
}
router-link {
  cursor: pointer;
}

.router-link-exact-active.router-link-active {
  color: $text-bg-light;
}

@media (min-width: 367px) and (max-width: 767px) {
  * {
    font-size: 1rem;
  }

  .content {
    margin: 35px 1.5rem;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  * {
    font-size: 1.1rem;
  }

  .content {
    margin: 35px 1.5rem;
  }
}
</style>
