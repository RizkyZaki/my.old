<template>
  <div class="container">
    <h2 class="text-center fw-bolder mb-5">My Project 🖥️</h2>
    <div class="row">
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="../assets/img/find.png" alt="" />
          <div class="container">
            <h6 class="mt-3">Find Person Github</h6>
            <p class="mt-4 mb-2">
              You can search for a user's github profile on this website,this website was made with the next js framework
              and the rest api from github
            </p>
            <a href="https://github.com/RizkyZaki/find-person"><i class="fa-brands fa-square-github icon-link"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="../assets/img/news.png" alt="" />
          <div class="container">
            <h6 class="mt-3">Tenews - News Website</h6>
            <p class="mt-4 mb-2">
              news website created using codeigniter, and there is admin
              management
            </p>
            <a href="https://github.com/RizkyZaki/Codeigniter4-Crud"><i
                class="fa-brands fa-square-github icon-link"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="../assets/img/spp.png" alt="" />
          <div class="container">
            <h6 class="mt-3">E-SPP - School Payments</h6>
            <p class="mt-4 mb-2">
              website that facilitates the school in administrative payments
            </p>
            <a href="https://github.com/RizkyZaki/project_ukk"><i class="fa-brands fa-square-github icon-link"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="../assets/img/mamaD.png" alt="" />
          <div class="container">
            <h6 class="mt-3">Mama D Cookies - E-Commerce Cake</h6>
            <p class="mt-4 mb-2">
              digital cake sales website with VUE & REST API Laravel
            </p>
            <a href="https://github.com/RizkyZaki/mamaDcookies"><i class="fa-brands fa-square-github icon-link"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="../assets/img/inv.png" alt="" />
          <div class="container">
            <h6 class="mt-3">Inventory Admin</h6>
            <p class="mt-4 mb-2">
              website to manage bookkeeping, stock, expenditure of an item
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="../assets/img/e-learn.png" alt="" />
          <div class="container">
            <h6 class="mt-3">School APP</h6>
            <p class="mt-4 mb-2">
              a project to manage existing learning materials in schools
            </p>
            <a href="https://github.com/RizkyZaki/school-app"><i class="fa-brands fa-square-github icon-link"></i></a>
          </div>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="card-project">
          <img src="../assets/img/book.png" alt="" />
          <div class="container">
            <h6 class="mt-3">My BOOK</h6>
            <p class="mt-4 mb-2">book e-commerce with PHP Native</p>
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

  .icon-link {
    font-size: 27px;
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