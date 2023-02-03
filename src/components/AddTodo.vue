<template>
  <div>
    <h3>Zeou_Zmail</h3>
    <div class="add">
      <form @submit="onSubmit">
        <input type="text" v-model="email" placeholder="writing account...">
        <input type="text" v-model="body" placeholder="writing content...">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTodo",
  data() {
    return {
      email: "" ,
      body: ""
    };
  },
  methods: {
    ...mapActions(["addTodo"]),
    onSubmit(e) {
      e.preventDefault();
      this.addTodo(this.email);
      this.addTodo(this.body);

    // }
    // handleSubmit() {
      //validate password
      // this.passwordError = this.password.length > 5 ? 
      //   '' : 'Password must be at least 6 chars long'
      // if(!this.passwordError) {
          // console.log('email: ', this.email)
      //     console.log('password: ', this.password)
      //     console.log('role: ', this.role)
      //     console.log('skills: ', this.skills)
      //     console.log('terms accepted: ', this.terms)
      // }
  }
}
}
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
