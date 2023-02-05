<template>
  <nav>
    <router-link to="/" >
    Inbox
    <img src="./assets/email.png" alt="Image">
    </router-link> |
    <router-link to="/NextPage/:data">
    Scheduled 
    <img class="star" src="./assets/star.png" alt="Image">
    </router-link>
  </nav>
  <router-view/>
</template>

<script>

export default {
  name: "home",
  components: { }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

}

nav a.router-link-exact-active {
  color: #2146db;
  text-decoration: none;
}
img{
  width: 20px;
  height: auto;
}
.star{
  width: 20px;
  height: auto;
  position: relative;
  top:2px;
}
</style>
