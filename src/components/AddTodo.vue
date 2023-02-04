<template>
  <div>
    <h3>Zeou_Zmail</h3>
    <div class="add">
     
      <!-- <form @submit="onSubmit">
        <input type="text" v-model="email" placeholder="writing account...">
        <input type="text" v-model="body" placeholder="writing content...">
        <input type="submit" value="Submit">  -->

        <!-- <router-link :to="{ name: 'draft' }">
          <h2>save</h2>
        </router-link>
      </form> -->
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 10px;
  border: 1px solid #aeaece;
  outline: 0;
}

input[type="submit"] {
  flex: 2;
  background: #aeaece;
  color: #fff;
  border: 1px #aeaece solid;
  cursor: pointer;
}
</style>
