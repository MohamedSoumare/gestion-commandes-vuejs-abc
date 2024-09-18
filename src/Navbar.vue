<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-4">
      <div class="container ml-8">
        <div class="" id="navbarNav">
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
   
    /* Style des éléments de la navbar */
    .nav-item {
      margin-right: 20px;
    }
  
    /* Style pour les liens de la navbar */
    .nav-link {
      text-decoration: none; 
      color: #4b0082; /* Indigo par défaut */
      transition: color 0.3s ease; /* Transition douce de couleur */
    }
  
    /* Espace entre l'icône et le texte */
    .nav-link i {
      margin-right: 8px;
    }
  
    /* Changement de couleur au survol */
    .nav-link:hover {
      color: #0000FF; /* Bleu lors du survol */
    }
  
    /* Couleur du lien actif */
    .nav-link.active {
      color: #0000FF; /* Bleu lorsque le lien est actif */
      font-weight: bold; }
      
  </style>
<script setup>
</script>