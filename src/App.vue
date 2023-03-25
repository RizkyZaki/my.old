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
#app {
  font-family: "Lexend";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  font-size: 22px;
}

body {
  background: $light-bg;
  color: $text-bg-light;
}

.dark-theme {
  background: $dark-bg !important;
  color: $text-bg-dark !important;
}

.content {
  margin: 35px 230px;
}

.toggle-theme {
  cursor: pointer;
}

router-link {
  cursor: pointer;
}

// .router-link-exact-active.router-link-active {
//   color: $text-bg-light;
// }
// .router-link-exact-active.router-dark.router-link-active {
//   color: $text-bg-dark;
// }

a {
  color: rgb(131, 131, 131);
}
a:hover {
  color: rgb(59, 59, 59);
}
nav {
  font-size: 0.9rem;
  li {
    padding-right: 30px;
  }
  .Zach {
    font-size: 1.6rem;
    font-weight: bolder;
    font-style: italic;
    margin-top: 11px;
  }
  a {
    position: relative;
    margin-bottom: 12px;
    font-size: 1em;
    color: $text-bg-light !important;
    letter-spacing: 0.5px;
    margin-left: 12px;
    padding: 0 10px;
    &.router-link-exact-active:after {
      width: 100%;
    }
  }

  a::after {
    content: "";
    position: absolute;
    background-color: $text-bg-light;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }
  a:hover {
    color: $text-bg-light;
  }
  a:hover:after {
    width: 100%;
  }
  .aDark {
    color: $text-bg-dark !important;
  }
  .aDark::after {
    content: "";
    position: absolute;
    background-color: $text-bg-dark;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }
}
.btn-send {
  font-size: 15px;
  background-color: $dark-bg;
  color: $text-bg-dark;
}

.btnDark {
  font-size: 15px;
  background-color: $light-bg !important;
  color: $text-bg-light !important;
}

@media (min-width: 350px) and (max-width: 767px) {
  * {
    font-size: 0.9rem;
  }

  .content {
    margin: 35px 1rem;
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
