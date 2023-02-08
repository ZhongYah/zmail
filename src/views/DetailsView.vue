<template>
  <div>
    <StarButton />
  </div>
  <router-link to="/" > 
    <h1>
      <img src="../assets/email.png" alt="Image">
      Zmail
    </h1>
  </router-link> 
  <div class="detail">
    <div v-if="error">{{ error }}</div>  
    <div v-if="post" class="post">
      <hr><h4>{{ 'name: ' + post.name }}</h4><hr>
      <h4>{{ 'email: ' + '(' + post.email + ')' }}</h4><hr>
      <p class="pre">{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import StarButton from '../components/StarButton.vue';

export default {
  components: {
    StarButton,
  },
  setup(){
    const id=useRoute().params.id  //使用路徑的params.id
    const post=ref(null)
    const error = ref(null)

    const load = async () => {     
        try {
            let data = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            if (!data.ok) {
                throw Error('that post does not exist')
            }
            post.value = await data.json()
            }
        catch(err) {
            error.value = err.message
            console.log(error.value)
        }
    }
    load()

    return {post,error}
  },
}
</script>

<style>
.detail{
  position: relative;
  top:30px;
}
.post {
  margin: 0 auto;
}
.post h4 {
  width: 500px;
  color:#444;
  line-height: 1.5em;
  margin: 5px ;
  text-align: justify;
  position: relative;
  left:30px;
  word-wrap: break-word;
}
.pre {
  width: 500px;
  font-size: 20px;
  font-family: 'Lobster', sans-serif;
  color:#444;
  white-space: pre-wrap;
  position: relative;
  word-wrap: break-word;
  text-align: justify;
  left:470px;
}
</style>