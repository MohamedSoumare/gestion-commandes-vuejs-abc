<template>
    <div class="container-fluid mt-3">
      <h1 class="mb-4 custom-margin-top" custom-margin-top>Edit Order {{ orderId }}</h1>
      
      <form class="row g-3">
        <!-- Boutons d'action -->
        <div class="btn-right-action mt-4 mb-4 d-flex justify-content-end">
          <RouterLink
            type="button"
            class="btn btn-secondary mx-4"
            :to="{ name: 'orders' }"
          >
          Return to Orders List
          </RouterLink>
          <button type="button" class="btn btn-primary" @click="submitEdit">
            Submit
          </button>
        </div>
        
        <!-- Détails de la commande à modifier -->
        <div class="col-md-6">
          <label for="date" class="form-label">Date</label>
          <input type="date" v-model="order.date" class="form-control" id="date" />
        </div>
        <div class="col-md-6">
          <label for="address" class="form-label">Delivery Address</label>
          <input type="text" v-model="order.deliveryAddress" class="form-control" id="address" />
        </div>
        <div class="col-md-6">
          <label for="name" class="form-label">Customer Name</label>
          <input type="text" v-model="order.customerName" class="form-control" id="name" />
        </div>
        <div class="col-md-6">
          <label for="trackNumber" class="form-label">Tracking Number</label>
          <input type="text" v-model="order.trackNumber" class="form-control" id="trackNumber" />
        </div>
        <div class="col-md-6 offset-6">
          <label for="status" class="form-label">Order Status</label>
          <select v-model="order.status" class="form-select" id="status">
            <option value="Processing">Processing</option>
            <option value="Shipped">Shipped</option>
            <option value="Delivered">Delivered</option>
          </select>
        </div>
      </form>
  
      <!-- Détails des produits de la commande -->
      <div class="row mt-5 mx-1">
        <h2 class="mx-0">Order Details</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(detail, index) in orderDetails" :key="index">
              <td>
                <select class="form-select" v-model="detail.product" aria-label="Product select">
                  <option v-for="product in products" :value="product" :key="product">{{ product }}</option>
                </select>
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.quantity" />
              </td>
              <td>
                <input type="number" class="form-control" v-model="detail.price" />
              </td>
              <td>
                <button @click="removeDetail(index)" class="btn btn-danger">Remove</button>
              </td>
            </tr>
            <tr>
              <td colspan="4">
                <button @click="addDetail" class="btn btn-success">Add New Detail</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Accéder à l'ID de la commande à partir de l'URL
  const route = useRoute();
  const orderId = ref(route.params.id); 

  const order = ref({
    date: '',
    deliveryAddress: '',
    customerName: '',
    trackNumber: '',
    status: 'Processing'
  });
  
  const orderDetails = ref([
    { product: 'Product 1', quantity: 1, price: 10 },
  ]);
  
  const products = ref(['Product 1', 'Product 2', 'Product 3']); 

  onMounted(() => {
   
    order.value = {
      date: '2024-09-15',
      deliveryAddress: '123 Main St, Springfield',
      customerName: 'John Doe',
      trackNumber: 'TRK123456789',
      status: 'Processing'
    };
  });
  
  // Soumettre les modifications de la commande
  function submitEdit() {
    
    alert('Order updated!');
  }
  
  // Ajouter un nouveau détail de commande
  function addDetail() {
    orderDetails.value.push({ product: '', quantity: 1, price: 0 });
  }
  
  // Supprimer un détail de commande
  function removeDetail(index) {
    orderDetails.value.splice(index, 1);
  }
  </script>
  
  <style scoped>
  /* Ajouter des styles pour ajuster l'affichage */
  .container-fluid {
    padding: 20px;
   width: 85%;
    
  }
  

  .custom-margin-top {
    margin-top: 30px;
    
  }


  </style>
  