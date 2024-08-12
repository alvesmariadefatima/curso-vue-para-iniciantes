<template>
  <div>
    <PrimeiroComponente />
    <p>O dado de app é: {{ testando }}</p>
    <LifeCycle />
    <Pessoa />
  </div>
</template>

<script>
import Pessoa from './components/Pessoa.vue'
import PrimeiroComponente from './components/PrimeiroComponente.vue'
import LifeCycle from './components/LifeCycle.vue'

export default {
  name: 'App',
  components: {
    PrimeiroComponente,
    LifeCycle,
    Pessoa
  },
  data () {
    return {
      testando: 'Teste'
    }
  }
}
</script>
