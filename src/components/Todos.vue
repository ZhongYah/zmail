<template>
  <div>
    <h3>Zmail</h3>
    <div class="legend">
      <span>Double click to mark as read</span>
      <span>
        <span class="incomplete-box"></span> = Have read
      </span>
      <span>
        <span class="complete-box"></span> = Unread 
      </span>
    </div>
    <div class="todos">
      <div
        @dblclick="onDblClick(todo)"
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        v-bind:class="{'is-complete':todo.read}"
      >
        <span class="left">{{ todo.id + '.'}}</span>
        <span class="right">{{'(' + todo.email + ')'}}</span>
        <p>{{ todo.body.substring(0,70) + '.......'}}</p>
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        email: todo.email,
        body: todo.body,
        read: !todo.read,
      };

      this.updateTodo(updTodo);
    },
   
  },
  computed: mapGetters(["allTodos"]),
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.left {
  position: absolute;
  left:5px;
  top:30px;
  display: inline-block;
  font-size: 20px;
  color:rgb(68, 76, 131);
}
.right{
  position: absolute;
  left: 40px;
  top:35px;
  font-size: 15px;
  color: rgb(159, 94, 94);
}
p{
  position: relative;
  left:120px;
};
.todos {
  display: block;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  background: #d3d3e4;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.is-complete {
  background: #2d353d;
  /* color: #fff; */
}

i {
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}

.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #d3d3e4;;
}

.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #2d353d;
}



@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
