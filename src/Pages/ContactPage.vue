<template>
  <div class="container">
    <h2 class="text-center fw-bolder mb-2">Reach Me!💡</h2>
    <div class="d-flex justify-content-center">
      <div class="mt-5 contact">
        <div class="mb-2">
          <i class="fa-brands fa-instagram"></i>
          <a class="text-center" href="https://www.instagram.com/_fuyuko01/">
            @fuyuko01
          </a>
        </div>
        <div class="mb-2">
          <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/rizky-zaki-19461824a/"
            >Rizky Zaki</a
          >
        </div>
        <div class="mb-2">
          <i class="fa-solid fa-envelope"></i>
          <a href="#">rizkyzaki682@gmail.com</a>
        </div>
        <div class="mb-2">
          <i class="fa-brands fa-github"></i>
          <a href="https://github.com/RizkyZaki">RizkyZaki / Zach</a>
        </div>
      </div>
    </div>
    <h3 class="text-center mb-3 mt-5 fw-semibold">Let's Talk 💬</h3>
    <p class="text-center" style="font-size: 20px">
      If you have any questions, feel free to contact me. I am always open to
      discussing.
    </p>
    <div class="">
      <label for="exampleFormControlInput1" class="form-label fw-bold"
        >Your Name</label
      >
      <input type="text" class="form-control" id="exampleFormControlInput1" />
    </div>
    <div class="">
      <label for="exampleFormControlInput1" class="form-label fw-bold"
        >Your Email</label
      >
      <input type="text" class="form-control" id="exampleFormControlInput1" />
    </div>
    <div class="">
      <label for="exampleFormControlTextarea1" class="form-label fw-bold"
        >Your Message</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <button class="btn btn-send mt-3">
      Send <i class="fa-solid fa-paper-plane"></i>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  font-size: 18px;
}
.contact {
  i {
    padding-right: 12px;
  }

  .fa-instagram {
    color: #e4405f;
  }

  .fa-linkedin {
    color: #0a66c2;
  }
  .fa-envelope {
    color: #ea4335;
  }
  .fa-github {
    color: #181717;
  }
}
</style>

<script>
export default {
  data() {
    return {
      bDark: "",
    };
  },
  created() {
    if (document.body.classList.contains("dark-theme")) {
      this.bDark = true;
    } else {
      this.bDark = false;
    }
  },
};
</script>