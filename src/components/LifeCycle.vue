<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: 'LifeCycle',
  data () {
    return {
      nome: 'Ainda não sei'
    }
  },
  created () {
    setTimeout(() => {
      this.nome = 'Maria de Fátima'
    }, 2000)
    this.LifeCycle()
  },
  methods: {
    LifeCycle () {
      console.log('Executou')
    }
  },
  mounted () {
    this.nome = 'Maria'
  }
}
</script>
