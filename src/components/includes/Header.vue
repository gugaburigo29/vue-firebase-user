<template>
    <v-toolbar>
        <v-toolbar-title>AuthUser</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
            <div v-if="!this.$store.state.user.id">
                <v-btn flat to="/">Inicio</v-btn>
                <v-btn flat to="/login">Login</v-btn>
            </div>
            <div v-else>
                <v-btn flat to="/produtos">Mostrar Produtos</v-btn>
                <v-btn flat to="/cadastrar-produto">Cadastrar</v-btn>
            </div>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
