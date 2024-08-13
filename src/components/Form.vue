<template>
  <div>
    <h2>Meu Formulário:</h2>
    <form action="" @submit="enviarFormulario($event)">
      <div>
        <input type="text" v-model="name">
      </div>
      <div>
        <input type="text" v-model="email">
      </div>
      <div>
        <Submit />
      </div>
    </form>
    <p>Conteúdo</p>
    <p>Conteúdo</p>
    <p>Conteúdo</p>
  </div>
</template>

<script>
import Submit from './form/Submit.vue'

export default {
  name: 'FormComponent',
  components: {
    Submit
  },
  data () {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    enviarFormulario (e) {
      e.preventDefault()

      const name = this.name
      const email = this.email

      console.log('Formulário enviado')
      console.log('O nome é: ' + name)
      console.log('O e-mail é : ' + email)

      // Requisição Ajax

      // Inserir no banco de dados
    }
  }
}
</script>

<style scoped>
  p {
    margin: 50px;
  }
</style>
