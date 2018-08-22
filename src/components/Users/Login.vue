<template>
    <v-container>
        <v-layout>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="cadastrarUser">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name="email"
                                        label="Email"
                                        id="email"
                                        v-model="email"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                                name="senha"
                                                label="Senha"
                                                id="senha"
                                                v-model="senha"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-btn type="submit">Logar</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    cadastrarUser () {
      this.$store.dispatch('novoUser', {email: this.email, senha: this.senha})
    }
  }
}
</script>

<style scoped>

</style>
