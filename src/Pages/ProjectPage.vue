<template>
  <div class="container">
    <h2 class="text-center fw-bolder mb-5">My Project 🖥️</h2>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="" alt="" />
          <div class="container">
            <h6>Name Project</h6>
            <p>Desc</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="" alt="" />
          <div class="container">
            <h6>Name Project</h6>
            <p>Desc</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="" alt="" />
          <div class="container">
            <h6>Name Project</h6>
            <p>Desc</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="" alt="" />
          <div class="container">
            <h6>Name Project</h6>
            <p>Desc</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="" alt="" />
          <div class="container">
            <h6>Name Project</h6>
            <p>Desc</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.card-project {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  font-size: 17px;

  transition: 0.3s;
  .container {
    padding: 2px 16px;
  }
  img {
    width: 100%;
    height: auto;
  }
}

body.dark-theme .card-project {
  background-color: #0a0615;
}

/* On mouse-over, add a deeper shadow */
.card-project:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

/* Add some padding inside the card container */
</style>


<script>
</script>