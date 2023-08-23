<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"
          ><img
            class="logo"
            src="https://i.postimg.cc/Bv4HVcp6/fine-1-removebg-preview.png g"
            alt="Logo"
        /></router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><i class="bi bi-list"></i></span>
        </button>
        <div class="head">
          <!-- <h1 class="head-logo mx-auto">FINE ARTS</h1> -->
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link class="nav-link bi-house" to="/"> HOME</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-person-fill" to="/about">
                ABOUT</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-pencil-square" to="/products">
                PRODUCTS</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-file-earmark" to="/admin">
                ADMIN</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link bi-telephone-fill" to="/contact">
                CONTACT</router-link
              >
            </li>
          </ul>
        </div>
        <router-link class="navbar-brand" to="/"
          ><img
            class="logo"
            src="https://i.postimg.cc/Bv4HVcp6/fine-1-removebg-preview.png"
            alt="Logo"
        /></router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>
<style scoped>
.navbar {
  background-color: #435334;
}

.head {
  display: flex;
  justify-content: center;
}
</style>
