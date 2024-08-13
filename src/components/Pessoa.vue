<template>
  <div>
    <!-- <h2>Esta é a descrição da pessoa: {{ nome }}</h2> -->
    <Info :email="email" :esta_trabalhando=true />
    <Form />
  </div>
</template>

<script>
import Info from './info.vue'
import Form from './Form.vue'

export default {
  name: 'PessoaDetalhes',
  components: {
    Info,
    Form
  },
  data () {
    return {
      nome: 'Maria de Fátima',
      email: 'mnunesalves334@gmail.com'
    }
  }
}
</script>
