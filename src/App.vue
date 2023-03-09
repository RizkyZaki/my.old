<template>
  <Header />
  <h1 class="text-base">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum quasi
    alias? Fugiat fuga sapiente, vitae cumque quam sed ad vero accusamus
    reiciendis dolorum mollitia labore soluta molestias voluptates. Commodi.
  </h1>
  <Footer />
</template>

<script>
import Header from "./components/HeaderComp.vue";
import Footer from "./components/FooterComp.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@300;400;500;600;700&display=swap");
$text-primary: #8695a9;
$text-secondary: #4e6e81;
$dark-bg: #0f172a;
$light-bg: #ecf2ff;

#app {
  font-family: "Lexend";
  background: $light-bg;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.text-base {
  color: $text-secondary;
}
</style>
