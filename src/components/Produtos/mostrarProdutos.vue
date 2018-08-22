<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs4 md3 sm6
                    v-for="produto in produtos"
                    :key="produto.id">
                <v-card>
                    <v-card-media
                            :src="produto.img"
                            height="200px"
                    ></v-card-media>

                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0" v-text="produto.nome"></h3>
                            <div>R$ <span v-text="produto.preco"></span></div>
                        </div>
                    </v-card-title>

                    <v-card-actions>
                        <v-btn :to="'produto/'+produto.id"
                               flat class="success">Comprar
                        </v-btn>
                        <v-btn flat class="error"> Carrinho</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'mostrarProdutos',
  computed: {
    produtos () {
      return this.$store.getters.produtos
    }
  }
}
</script>

<style scoped>

</style>
