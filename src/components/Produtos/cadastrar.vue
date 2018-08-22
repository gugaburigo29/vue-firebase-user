<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
                <h2>Cadastrar Produto</h2>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="criarProduto">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field
                                    v-model="nome"
                                    name="nome"
                                    label="Nome"
                                    id="nome"
                                    required></v-text-field>
                            <v-text-field
                                    v-model="preco"
                                    name="preco"
                                    label="Preco"
                                    id="preco"
                                    required></v-text-field>
                            <v-textarea
                                    v-model="img"
                                    name="img"
                                    label="Imagem"
                                    id="img"
                                    required></v-textarea>
                            <v-layout row>
                                <v-flex xs12>
                                    <img :src="img">
                                </v-flex>
                            </v-layout>
                            <v-btn class="primary"
                                   type="submit"
                                    :disabled="!formValido">Cadastrar Produto</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'cadastrar',
  data: function () {
    return {
      nome: '',
      preco: '',
      img: ''
    }
  },
  computed: {
    formValido () {
      return this.nome !== '' && this.preco !== '' && this.img !== ''
    }
  },
  methods: {
    criarProduto () {
      const produto = {
        nome: this.nome,
        preco: this.preco,
        img: this.img,
        id: Math.floor(Math.random() * 10000) + 2
      }
      this.$store.dispatch('novoProduto', produto).then(function (res) {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
