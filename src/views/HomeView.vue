<template>
  <div class="home">
    <div class="container">
      <NavbarMenu />
      <HeroFood />
      <div class="row mt-4">
        <div class="col-md-12">
          <h1 class="text-center">Makanan <i class="text-success">Favorit !! </i></h1>
        </div>
        <!-- <div class="col">
          <router-link to="/foods" class="btn btn-success mx-auto">
            Lihat Semua</router-link          >
        </div> -->
      </div>
      <div class="row mb-5">
        <div class="col-md-3 mt-4" v-for="Product in Products" :key="Product.id">
          <CardProduct :Product="Product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarMenu from "@/components/NavbarMenu.vue";
import HeroFood from "@/components/HeroFood.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";

export default {
  name: "HomeView",
  components: {
    NavbarMenu,
    HeroFood,
    CardProduct,
  },
  data() {
    return {
      Products: [],
    };
  },
  methods: {
    setProduct(data) {
      this.Products = data;
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/best-products")
      .then((response) => this.setProduct(response.data))
      .catch(function (error) {
        // handle error
        console.log("gagal", error);
      });
  }
};
</script>
