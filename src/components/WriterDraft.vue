<template>
  <div>
    <button  class="unfold" @click="showForm = !showForm">{{ showForm ? 'Hide' : 'Writting' }} Draft</button>
    <form v-if="showForm" @submit.prevent="saveData" >
      <div>
        <label for="email">Email:</label>
        <input type="email" required v-model="email" :disabled="!isEditing">
      </div>
      <div>
        <label>
          Content:
          <textarea class="contentInput" v-model="content" maxlength="1000" rows="10" :disabled="!isEditing"></textarea>
        </label>
      </div>
      <div>
        <input type="submit" :value="buttonText"  @click="toggleEdit"/>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email:'',  
      content: '',
      showForm: false,
      savedContent: '',
      isEditing: true,
      buttonText: 'Save'
    }
  },
  methods: {
    saveData() {
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
form {
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 530px;
  position: absolute;
  top:90px;
  margin: 0 auto;
  padding: 20px;
  border: 3px solid #ccc;
  border-radius: 10px;
  background: rgb(169, 193, 150);
  right: 80px;
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
  border: 2px solid #ccc;
}

input[type="submit"] {
  background-color: rgb(188, 62, 17);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transform: scale(0.8);
  position: relative;
  bottom: -5px;
  border: 2px solid #ccc;
}

.unfold {
  background-color: rgb(46, 46, 101);
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  position: absolute;
  top: 20px;
  right: 15px;
}

.contentInput {
  background-color: rgb(255, 255, 255);
  padding: 10px;
  border-radius: 5px;
  width: 428px;
  height: 390px;
  display: block;
  font-size: 16px;
  border: 2px solid #ccc;
}
</style>