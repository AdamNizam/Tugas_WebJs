<template>
  <div class="card" style="width: 18rem">
    <img :src="'assets/images/'+ Product.gambar" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ Product.nama }}</h5>
      <p class="card-text">
        Harga Rp.{{ Product.harga }}
      </p>
      <router-link class="btn btn-success" :to="'FoodDetail/' + Product.id" >Tambah Keranjang</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["Product"],
};
</script>

<style>
</style>