<template>
  <h1>Details</h1><hr>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h4>{{ 'name: ' + post.name }}</h4><hr>
    <h4>{{ 'email: ' + '(' + post.email + ')' }}</h4><hr>
    <br>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'


export default {
  setup(){
    const id=useRoute().params.id
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
  /* * {
    border: 1px solid black
  } */
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
        white-space: pre-wrap;
        position: relative;
        word-wrap: break-word;
        text-align: justify;
        left:450px;
    }

  @media (max-width: 500px) {
    .post {
      grid-template-columns: 1fr;
    }
  }
</style>