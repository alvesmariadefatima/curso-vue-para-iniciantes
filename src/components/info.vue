<template>
  <div>
    <p>{{ compEmail }} {{ email }}</p>
    <h2>Esta é a descrição da pessoa: {{ nome }}</h2>
    <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
    <p v-else>Estou em busca de novas oportunidades!</p>
    <p>Utilizo as seguintes tecnologias para backend:</p>
    <ul>
      <li v-for="(technology, index) in backend_technologies" :key="index">
        {{ technology }}
      </li>
    </ul>
    <p>Utilizo as seguintes tecnologias para front-end:</p>
    <ul>
      <li v-for="technology in frontend_technologies" :key="technology.id">
        {{ technology.language }}
      </li>
    </ul>
    <div>
      <button @click="showEmail">{{ textoBotao }}</button>
    </div>
    <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
    <p class="teste">Para acessar meu portfólio, <a :href="meu_link" target="_blank">basta clicar aqui</a></p>
    <Picture />
  </div>
</template>

<script>
import Picture from './Picture.vue'

export default {
  name: 'InfoCard',
  components: {
    Picture
  },
  props: {
    email: String,
    esta_trabalhando: Boolean
  },
  data () {
    return {
      nome: 'Maria de Fátima',
      mostrar_email: false,
      meu_link: 'https://my-website-portfolio-two.vercel.app/',
      textoBotao: 'Mostrar e-mail',
      backend_technologies: ['Javascript', 'PHP', 'Python'],
      frontend_technologies: [
        { id: 1, language: 'HTML' },
        { id: 2, language: 'CSS' },
        { id: 3, language: 'Vue' }
      ]
    }
  },
  methods: {
    showEmail () {
      this.mostrar_email = !this.mostrar_email
      this.textoBotao = this.mostrar_email ? 'Esconder e-mail' : 'Mostrar e-mail'
    }
  }
}
</script>

<style>
.paragrafo-pai {
  color: red;
}
</style>
