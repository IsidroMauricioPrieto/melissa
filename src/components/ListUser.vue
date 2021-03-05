<template>
  <div>
    <h1>Lista de usuarios</h1>
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
