<template>
    <v-container>
        <v-layout>
            <v-flex xs12>
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
  name: 'selecionado',
  computed: {
    produto () {
      return this.$store.getters.produtoSelecionado(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>
