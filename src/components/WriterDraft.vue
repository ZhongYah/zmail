<template>
  <div>
    <button  class="your-button-class" @click="showForm = !showForm">{{ showForm ? 'Hide' : 'Writting' }} Draft</button>
    <form v-if="showForm" @submit.prevent="saveData" >
      <div>
        <label for="email">Email:</label>
        <input type="email" required v-model="email" :disabled="!isEditing">
      </div>
      <div>
        <label>
        Content:
       <textarea class="text-input-class" v-model="content" maxlength="500" rows="5" :disabled="!isEditing"></textarea>
      </label>
      </div>
      <div>
        <input type="submit" :value="buttonText"  @click="toggleEdit"/>

      </div>
    </form>
    <div v-if="submitted" >
      <p>Email: {{ email }}</p>
      <p>Content: {{ content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email:'',  
      content: '',
      showForm: false,
      submitted: false,
      savedContent: '',
      isEditing: true,
      buttonText: 'Save'
    }
  },
  methods: {
    saveData() {
            // this.isEditing = false
            this.submitted = true
            this.savedContent = this.content
        },
    toggleEdit() {
      this.isEditing = !this.isEditing
      this.buttonText = this.isEditing ? 'Save' : 'Edit'
    }
    }
}
</script>

<style>
/* * {
  border: 1px solid black;
} */

  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    position: absolute;
    top:150px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background: rgb(158, 187, 135);
    right: 140px;
}

  label {
    font-weight: bold;
    margin-bottom: 10px;
  }

  input[type="email"]{
    width:300px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  input[type="submit"] {
    background-color: rgb(188, 62, 17);
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transform: scale(0.8);
  }

  .your-button-class {
    background-color: rgb(46, 46, 101);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    position: absolute;
    top: 10px;
    right: 5px;
  }

  .text-input-class {
    background-color: rgb(255, 255, 255);
    padding: 10px;
    border-radius: 5px;
    width: 479px;
    height: 300px;
    display: block;
  }

  /* .disabled {
    pointer-events: none;
    opacity: 0.6;
  } */

</style>