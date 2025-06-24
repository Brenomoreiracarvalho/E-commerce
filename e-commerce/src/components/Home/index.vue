<template>
  <div class="home">
    <h1>Bem-vindo ao E-commerce</h1>
    <p>Encontre os melhores produtos aqui!</p>
    <router-link to="/produtos" class="btn">Ver Produtos</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 60px;
}
.btn {
  display: inline-block;
  margin-top: 20px;
  padding: 10px 24px;
  background: #42b983;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;
}
.btn:hover {
  background: #369870;
}
</style>
