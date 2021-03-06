<template>
  <div>
    <h1>Lista de usuarios</h1>
    <h4>Este es una modificacion commit  </h4>
    <h5>Esto es una modificacion de la rama User2</h5>
  </div>
</template>

<script>
export default {
  name: 'ListUser',
  data: () => ({}),
  mounted () {
    const baseURI = 'https://jsonplaceholder.typicode.com/users'
    this.$http
      .get(baseURI)
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
</script>
