<template>
    <div class="row mt-4">
        <div class="col-md-6">
            <div class="d-flex h-100">
                <div class="justify-content-center align-self-center">
                    <h1>hello , Digitalent </h1>
                    <p> <strong>Pesan Sekarang Makanan Favorit Anda</strong></p>
                    <button class="btn btn-lg btn-success">
                        <router-link to="/FoodMakanan" style="text-decoration: none; color: white;"> Pesan Sekarang</router-link>
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <img src="../assets/m.svg" alt="" srcset="" width="90%" class="mt-4">
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroFood'

}
</script>

<style>

</style>