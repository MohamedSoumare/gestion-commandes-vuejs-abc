<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-4">
    <div class="container ">
      <div id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-4">
            <router-link class="nav-link" to="/" active-class="active">
              <i class="fas fa-users"></i> Customers
            </router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="nav-link" to="/products" active-class="active">
              <i class="fas fa-box"></i> Products
            </router-link>
          </li>
          <li class="nav-item mx-4">
            <router-link class="nav-link" to="/orders" active-class="active">
              <i class="fas fa-shopping-cart"></i> Orders
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>


.navbar-nav {
  display: flex;
  padding: 0;
  list-style: none;
  
}



/* Style for the navbar links */
.nav-link {
  text-decoration: none;
  color: #4b0082; /* Default Indigo color */
  transition: color 0.3s ease; /* Smooth color transition */
}

/* Spacing between icon and text */
.nav-link i {
  margin-right: 8px;
}

/* Change color on hover */
.nav-link:hover {
    color: #0000FF; /* Blue on hover */
  }
  
  /* Active link color */
  .nav-link.active {
    color: #0000FF; /* Blue when active */
    font-weight: bold;
  }
</style>

<script setup>

</script>  