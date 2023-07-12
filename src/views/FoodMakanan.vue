<template>
  <div class="">
    <NavbarMenu />
    <div class="container">
      <div class="row mt-4">
        <div class="col">
          <h1>Daftar Makanan</h1>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
           <input
              type="text"
              class="form-control"
              placeholder="Cari Makanan "
              aria-label="Username"
              aria-describedby="Cari Makanan"
            />
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">Cari</span>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div
          class="col-md-3 mt-4"
          v-for="Product in Products"
          :key="Product.id"
        >
          <CardProduct :Product="Product" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarMenu from "@/components/NavbarMenu.vue";
import CardProduct from "@/components/CardProduct.vue";
import axios from "axios";
export default {
  name: "FoodMakanan",
  components: {
    NavbarMenu,
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
      .get("http://localhost:3000/products")
      .then((response) => this.setProduct(response.data))
      .catch(function (error) {
        // handle error
        console.log("gagal", error);
      });
  },
};
</script>

<style>
</style>