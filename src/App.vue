<template>
  <VHeader />
  <router-view />
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

#app {
  font-family: "Lexend";
  background: $light-bg;
  color: $text-bg-light;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
</style>
