<template>
  <div>
    <button @click="$emit('mudar-imagem')">Trocar Imagem de Perfil</button>
  </div>
</template>

<script>
export default {
  name: 'MudarImagem',
  emits: ['mudar-imagem']
}
</script>
