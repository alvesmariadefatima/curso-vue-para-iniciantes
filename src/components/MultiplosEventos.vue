<template>
  <div>
    <button @click="ativarEventos">Ativar múltiplos</button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: 'MultiplosEventos',
  data () {
    return {
      multiplos_eventos: ''
    }
  },
  methods: {
    ativarEventos (e) {
      this.primeiro(e)
      this.segundo(e)
    },
    primeiro (e) {
      this.multiplos_eventos = 'Primeiro evento ativado!'
    },
    segundo (e) {
      setTimeout(() => {
        this.multiplos_eventos = 'Segundo evento!'
      }, 500)
    }
  }
}
</script>

<style scoped>
  div {
    margin: 100px;
  }
</style>
